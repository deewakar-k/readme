"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { User } from "lucide-react";

import { useUser } from "@/hooks/use-user";

import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { CustomTextArea } from "../text-area";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Profile() {
  const { data: user, isLoading, error } = useUser();

  if (isLoading) return <Loader />;

  if (error) {
    console.error(error);
    return (
      <div className="mx-auto flex min-h-screen items-center justify-center">
        oops error loading user profile.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ProfileImage user={user} />
      <InputBox
        label="username"
        value={user?.username || ""}
        placeholder="your unique handle"
      />

      <InputBox
        label="display name"
        value={user?.name || ""}
        placeholder="your handle"
      />

      <InputBox
        label="what do you do?"
        value={user?.bio || ""}
        placeholder="software engineer, etc"
      />

      <InputBox
        label="location"
        value={user?.location || ""}
        placeholder="where you're based"
      />

      <InputBox
        label="website"
        value={user?.website || ""}
        placeholder="http://localhost:3000"
      />

      <CustomTextArea
        label="about"
        defaultValue={user?.about || ""}
        placeholder="something about you..."
      />
    </div>
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
