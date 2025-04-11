"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { User } from "lucide-react";

import { useUser } from "@/hooks/use-user";

import { Loader } from "../loader";
import { Avatar, AvatarFallback } from "../ui/avatar";

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
    <div className="flex items-start justify-start p-8">
      <div className="flex flex-col items-center gap-4">
        <ProfileImage user={user} />
      </div>
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
          <AvatarFallback>
            <User
              strokeWidth={1.2}
              className="text-muted-foreground h-12 w-12"
            />
          </AvatarFallback>
        )}
      </Avatar>

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
