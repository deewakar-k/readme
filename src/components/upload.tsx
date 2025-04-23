"use client";

import * as React from "react";

import { Upload, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDelete,
  FileUploadItemMetadata,
  FileUploadItemPreview,
  FileUploadList,
  FileUploadTrigger,
} from "@/components/ui/file-upload";

import { Label } from "./ui/label";

interface ImageUploadProps {
  onChange: (files: File[]) => void;
  value?: File[];
}

export function ImageUpload({ onChange, value = [] }: ImageUploadProps) {
  const [files, setFiles] = React.useState<File[]>(value);

  const onFileReject = React.useCallback((file: File, message: string) => {
    toast(message, {
      description: `"${file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}" has been rejected`,
    });
  }, []);

  const handleFilesChange = React.useCallback(
    (newFiles: File[]) => {
      setFiles(newFiles);
      onChange(newFiles);
    },
    [onChange]
  );

  return (
    <>
      <Label className="text-sm">attachments</Label>
      <FileUpload
        maxFiles={2}
        maxSize={5 * 1024 * 1024}
        className="w-full max-w-md"
        value={files}
        onValueChange={handleFilesChange}
        onFileReject={onFileReject}
        multiple
      >
        <FileUploadDropzone>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center justify-center rounded-full border p-2.5">
              <FileUploadTrigger asChild>
                <Upload className="text-muted-foreground size-6" />
              </FileUploadTrigger>
            </div>
          </div>
        </FileUploadDropzone>
        <FileUploadList>
          {files.map((file, index) => (
            <FileUploadItem key={index} value={file}>
              <FileUploadItemPreview />
              <FileUploadItemMetadata />
              <FileUploadItemDelete asChild>
                <Button variant="ghost" size="icon" className="size-7">
                  <X />
                </Button>
              </FileUploadItemDelete>
            </FileUploadItem>
          ))}
        </FileUploadList>
      </FileUpload>
    </>
  );
}
