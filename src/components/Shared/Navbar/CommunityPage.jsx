import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CommunityPage = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosSecure.get("/stories");
        setStories(response.data || []);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [axiosSecure]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Community Stories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity"></div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {story.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                By {story.author} on {story.date}
              </p>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {story.shortContent}
              </p>
              <div className="flex justify-between space-x-2">
                <button
                  className="btn btn-outline flex-1"
                  onClick={() => setSelectedStory(story)}
                >
                  Read More
                </button>
                <button
                  className="btn btn-secondary flex-1"
                  onClick={() => toast.success("Share Success")}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStory && (
        <Dialog
          open={!!selectedStory}
          onClose={() => setSelectedStory(null)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex min-h-screen items-center justify-center px-4">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto shadow-xl">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <Dialog.Title className="text-2xl font-bold mb-2">
                  {selectedStory.title}
                </Dialog.Title>
                <p className="text-sm text-gray-500 mb-4">
                  {selectedStory.author} on {selectedStory.date}
                </p>
                <p className="text-gray-700 mb-6">
                  {selectedStory.fullContent}
                </p>
                <div className="flex justify-end space-x-2">
                  <button
                    className="btn btn-ghost bg-red-500 text-white"
                    onClick={() => setSelectedStory(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default CommunityPage;
