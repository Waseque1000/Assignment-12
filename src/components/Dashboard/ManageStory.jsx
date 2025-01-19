import React from "react";

const ManageStories = ({ onEditStory, onDeleteStory }) => {
  const stories = [
    {
      id: 1,
      title: "Amazing Sundarbans Trip",
      content: "The mangrove forest was breathtaking...",
      images: ["/api/placeholder/300/200", "/api/placeholder/300/200"],
      date: "2025-01-10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stories.map((story) => (
        <div key={story.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-bold">{story.title}</h3>
            <div className="flex gap-2">
              <button
                className="btn btn-sm btn-outline"
                onClick={() => onEditStory(story)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => onDeleteStory(story.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="mb-4">{story.content}</p>
          <div className="grid grid-cols-2 gap-4">
            {story.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Story ${idx + 1}`}
                className="rounded-lg w-full h-40 object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageStories;
