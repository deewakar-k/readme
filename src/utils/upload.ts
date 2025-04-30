export const uploadImage = async (file: File): Promise<string> => {
  if (!file) return "";

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/files", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`upload failed with status: ${response.status}`);
    }

    const url = await response.json();

    if (!url || typeof url !== "string") {
      throw new Error("Invalid URL received from server");
    }

    return url;
  } catch (error) {
    console.error("image upload error: ", error);
    throw error;
  }
};
