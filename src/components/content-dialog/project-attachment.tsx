import Image from "next/image";

import { X } from "lucide-react";
import { Controller } from "react-hook-form";

import { Button } from "../ui/button";
import { ImageUpload } from "../upload";

export const ProjectAttachmentField = ({
  control,
  existingUrls = [],
  onRemoveUrl,
}) => {
  return (
    <div className="space-y-4">
      {/* Show existing attachments */}
      {existingUrls.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {existingUrls.map((url, idx) => (
            <div
              key={idx}
              className="relative h-24 w-24 overflow-hidden rounded-md border"
            >
              <Image src={url} alt="Attachment" fill className="object-cover" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 rounded-full bg-white/80"
                onClick={() => onRemoveUrl(url)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Regular file upload for new files */}
      <Controller
        name="attachments"
        control={control}
        render={({ field }) => (
          <ImageUpload onChange={field.onChange} value={field.value} />
        )}
      />
    </div>
  );
};
