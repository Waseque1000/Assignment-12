import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

import { toast } from "react-toastify";

const AddStory = () => {
  const [title, setTitle] = useState(""); // State for the story title
  const [story, setStory] = useState(""); // State for the story content
  const [images, setImages] = useState([]); // State for uploaded images
  const [captions, setCaptions] = useState([]); // State for image captions
  const { user } = useContext(AuthContext);
  // console.log(user);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Function to handle caption change
  const handleCaptionChange = (e, index) => {
    const newCaptions = [...captions];
    newCaptions[index] = e.target.value;
    setCaptions(newCaptions);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append("title", title);
    formData.append("story", story);
    formData.append("author", user?.email || "Anonymous"); // Assuming user has a name property

    // Append images and captions to formData
    images.forEach((image, index) => {
      formData.append("images", image);
      formData.append(`captions[${index}]`, captions[index] || ""); // Append caption for each image
    });

    try {
      const response = await axios.post(
        "https://server-000002.vercel.app/stories",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Story posted successfully:");

      form.reset();
      // Optionally reset the form or handle success
    } catch (error) {
      toast.error("Error posting story:");
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Share Your Travel Story</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Story Title</label>
          <input
            type="text"
            placeholder="Enter your story title"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
          />
        </div>
        <div>
          <label className="block mb-2">Your Story</label>
          <textarea
            placeholder="Share your experience..."
            className="textarea textarea-bordered w-full h-32"
            value={story}
            onChange={(e) => setStory(e.target.value)} // Update story state
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            name="image"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange} // Handle image selection
          />
        </div>
        {images.length > 0 && (
          <div className="space-y-2 mt-4">
            <label className="block mb-2">Image Captions</label>
            {images.map((image, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  src={URL.createObjectURL(image)} // Display the selected image
                  alt="preview"
                  className="w-16 h-16 object-cover rounded"
                />
                <input
                  type="text"
                  placeholder={`Caption for image ${index + 1}`}
                  className="input input-bordered w-full"
                  value={captions[index] || ""}
                  onChange={(e) => handleCaptionChange(e, index)} // Handle caption input
                />
              </div>
            ))}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Post Story
        </button>
      </form>
    </div>
  );
};

export default AddStory;
