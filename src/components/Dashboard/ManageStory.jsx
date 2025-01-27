import axios from "axios";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [editingStory, setEditingStory] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  // Function to fetch stories from the server
  const fetchStories = async () => {
    try {
      const response = await axios.get(
        "https://server-000002.vercel.app/stories"
      );
      setStories(response.data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  // useEffect to fetch stories on component mount
  useEffect(() => {
    fetchStories();
  }, []);

  // Function to delete a story
  const deleteStory = async (id) => {
    try {
      await axios.delete(`https://server-000002.vercel.app/stories/${id}`);
      toast.success("Story deleted successfully");
      fetchStories(); // Refetch stories after deletion
    } catch (error) {
      console.error("Error deleting story:", error);
      toast.error("Failed to delete story");
    }
  };

  // Function to start editing a story
  const startEditing = (story) => {
    setEditingStory(story);
    setUpdatedTitle(story.title);
    setUpdatedContent(story.story);
  };

  // Function to handle the PATCH request
  const updateStory = async () => {
    if (!editingStory) return;

    try {
      await axios.patch(
        `https://server-000002.vercel.app/stories/${editingStory._id}`,
        {
          title: updatedTitle,
          story: updatedContent,
        }
      );
      toast.success("Story updated successfully");
      fetchStories();
      setEditingStory(null);
    } catch (error) {
      console.error("Error updating story:", error);
      toast.error("Failed to update story");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      {stories.map((story) => (
        <div key={story._id} className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">{story.title}</h3>
            <div className="flex gap-2">
              <button
                className="btn btn-sm btn-outline"
                onClick={() => startEditing(story)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => deleteStory(story._id)}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="mb-4">{story.story}</p>
          <div className="grid grid-cols-2 gap-4">
            {Array.isArray(story.images) && story.images.length > 0 ? (
              story.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Story ${idx + 1}`}
                  className="rounded-lg w-full h-40 object-cover"
                />
              ))
            ) : (
              <p>No images available for this story.</p>
            )}
          </div>
        </div>
      ))}

      {/* Edit Story Modal or Form */}
      {editingStory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Story</h2>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              placeholder="Title"
              className="input input-bordered w-full mb-4"
            />
            <textarea
              value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}
              placeholder="Story content"
              className="textarea textarea-bordered w-full mb-4"
            />
            <div className="flex justify-end">
              <button className="btn btn-primary mr-2" onClick={updateStory}>
                Save
              </button>
              <button
                className="btn btn-outline"
                onClick={() => setEditingStory(null)} // Close the modal
              >
                Cancel
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStories;
