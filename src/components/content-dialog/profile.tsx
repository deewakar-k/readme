"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { User } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";

import { updateUser } from "@/actions/user";
import { useUser } from "@/hooks/use-user";

import { Error } from "../error";
import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { CustomTextArea } from "../text-area";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface ProfileFormInput {
  username: string;
  name: string;
  bio: string;
  location: string;
  website: string;
  about: string;
}

export default function Profile() {
  const { data: user, isLoading, error } = useUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = useForm<ProfileFormInput>({
    values: user
      ? {
          username: user.username || "",
          name: user.name || "",
          bio: user.bio || "",
          location: user.location || "",
          website: user.website || "",
          about: user.about || "",
        }
      : undefined,
  });

  const onSubmit = async (data: ProfileFormInput) => {
    try {
      const updatedUser = await updateUser(data);
      if (updatedUser) {
        mutate(updatedUser, { revalidate: false });
        toast.success("profile updated!");
      }
    } catch (error) {
      console.error("failed to update user profile: ", error);
      toast.error("failed to update profile");
    }
  };

  if (isLoading) return <Loader />;

  if (error) {
    console.error(error);
    return <Error label={"profile"} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <ProfileImage user={user} />
      <InputBox
        label="username"
        placeholder="your unique handle"
        {...register("username")}
      />

      <InputBox
        label="display name"
        placeholder="your handle"
        {...register("name")}
      />

      <InputBox
        label="what do you do?"
        placeholder="software engineer, etc"
        {...register("bio")}
      />

      <InputBox
        label="location"
        placeholder="where you're based"
        {...register("location")}
      />

      <InputBox
        label="website"
        placeholder="http://localhost:3000"
        {...register("website")}
      />

      <CustomTextArea
        label="about"
        defaultValue={user?.about || ""}
        placeholder="something about you..."
        {...register("about")}
      />

      <Button
        type="submit"
        className="fixed right-8 bottom-2"
        disabled={isSubmitting || !isDirty}
      >
        {isSubmitting ? <Loader /> : ""}
        Done
      </Button>
    </form>
  );
}

const ProfileImage = ({ user }: { user: any }) => {
  const [image, setImage] = useState<string | null>(user?.image || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const previewUrl = reader.result as string;
        setImage(previewUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleAvatarClick = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar className="h-24 w-24" onClick={handleAvatarClick}>
          {image ? (
            <Image
              src={image}
              alt={user?.name || ""}
              width={"96"}
              height={"96"}
              className="cursor-pointer object-cover"
            />
          ) : (
            <AvatarFallback className="cursor-pointer">
              <User
                strokeWidth={1.2}
                className="text-muted-foreground h-12 w-12"
              />
            </AvatarFallback>
          )}
        </Avatar>

        <Button
          variant={"outline"}
          className="cursor-pointer"
          onClick={handleRemoveImage}
        >
          remove image
        </Button>
      </div>

      <input
        ref={fileInputRef}
        id="profile-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  );
};
