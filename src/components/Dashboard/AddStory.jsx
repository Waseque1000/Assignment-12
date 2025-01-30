import React, { useState, useContext } from "react";
import axios from "axios";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";

const AddStory = () => {
  const [title, setTitle] = useState(""); // State for the story title
  const [content, setContent] = useState(""); // State for the story content
  const [images, setImages] = useState([]); // State for uploaded images
  const [previewUrls, setPreviewUrls] = useState([]); // State for image previews
  const { user } = useContext(AuthContext); // Get the user from AuthContext
  const imgbbApiKey = import.meta.env.VITE_IMGBB_KEY; // Use the ImgBB API key from environment variable

  // Handle image selection and upload to ImgBB
  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);

    // Create preview URLs for selected images
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);

    // Upload images to ImgBB
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_KEY
          }`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return response.data.data.url; // Get the image URL from the ImgBB response
      })
    );

    setImages(uploadedImages); // Store the image URLs from ImgBB
  };

  // Remove an image
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => {
      // Revoke the URL to prevent memory leaks
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://server-000002.vercel.app/stories",
        {
          title,
          story: content,
          author: user?.email || "Anonymous",
          images, // Array of ImgBB URLs
        }
      );

      toast.success("Story posted successfully");
      setTitle("");
      setContent("");
      setImages([]);
      setPreviewUrls([]);
    } catch (error) {
      toast.error("Error posting story");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Story Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Story Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Story Content */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Story Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        {/* Upload Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <div className="mt-2">
            <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Camera className="h-5 w-5 mr-2" />
              Add Images
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Preview selected images */}
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="h-24 w-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Story
        </button>
      </form>
    </div>
  );
};

export default AddStory;
