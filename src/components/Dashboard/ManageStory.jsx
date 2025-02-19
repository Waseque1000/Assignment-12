import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [editingStory, setEditingStory] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

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

  useEffect(() => {
    fetchStories();
  }, []);

  const deleteStory = async (id) => {
    try {
      await axios.delete(`https://server-000002.vercel.app/stories/${id}`);
      toast.success("Story deleted successfully");
      fetchStories();
    } catch (error) {
      console.error("Error deleting story:", error);
      toast.error("Failed to delete story");
    }
  };

  const startEditing = (story) => {
    setEditingStory(story);
    setUpdatedTitle(story.title);
    setUpdatedContent(story.story);
  };

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
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {stories.map((story) => (
          <div key={story._id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{story.title}</h3>
            <p className="text-gray-700 mb-4">{story.story}</p>
            <div className="grid grid-cols-2 gap-2">
              {Array.isArray(story.images) && story.images.length > 0 ? (
                story.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Story ${idx + 1}`}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                ))
              ) : (
                <p className="text-sm text-gray-500">No images available.</p>
              )}
            </div>
            <div className="mt-4 flex justify-between">
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
        ))}
      </div>

      {editingStory && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
                onClick={() => setEditingStory(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageStories;
