import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const AddStory = () => {
  const [title, setTitle] = useState(""); // State for the story title
  const [story, setStory] = useState(""); // State for the story content
  const [images, setImages] = useState([]); // State for uploaded images
  const [captions, setCaptions] = useState([]); // State for image captions
  const { user } = useContext(AuthContext);
  console.log(user);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Prepare form data to send to the backend
    const formData = new FormData();
    formData.append("title", title); // Append story title to FormData
    formData.append("story", story); // Append story content to FormData
    formData.append("displayName", user.displayName); // Append user display name to FormData
    formData.append("email", user.email); // Append user email to FormData

    // Append images and captions if any are selected
    if (images.length > 0) {
      images.forEach((image, index) => {
        formData.append("images", image); // Append each image to FormData
        formData.append("captions", captions[index]); // Append corresponding caption
      });
    }

    try {
      // Send a POST request to the backend with FormData
      const response = await axios.post(
        "http://localhost:5000/stories", // Backend API endpoint for stories
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type
          },
        }
      );
      // Success: Display a success message
      alert("Story posted successfully!");
    } catch (error) {
      // Error: Display an error message
      console.error("Error posting story:", error);
      alert("Failed to post story. Please try again.");
    }
  };

  // Handle image file changes and captions input
  const handleImageChange = (e) => {
    setImages([...e.target.files]); // Update images state
  };

  const handleCaptionChange = (e, index) => {
    const newCaptions = [...captions];
    newCaptions[index] = e.target.value; // Update specific caption in the captions array
    setCaptions(newCaptions);
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
            type="url"
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
