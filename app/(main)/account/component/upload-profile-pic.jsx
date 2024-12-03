"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const UploadProfilePic = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    // Check file size (2MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be less than 2MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file");
      return;
    }

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload/profile-picture", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        // Refresh the page to show the new image
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Input
      id="pro-img"
      name="profile-image"
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageUpload}
      disabled={isUploading}
    />
  );
};

export default UploadProfilePic;
