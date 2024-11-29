export const uploadingImageToCloudinary = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    if (!file || !uploadPreset) {
        throw new Error("File or Upload Preset not provided");
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    try {
        const response = await fetch(cloudinaryUrl, {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            throw new Error("Failed to upload image");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}