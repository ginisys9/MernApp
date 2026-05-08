import { useEffect, useState } from "react";
import StoryCard from "../component/StoryCard";
import Loader from "../component/Loader";
const Bookmarks = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBookmarks = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );
      if (!user || !user.bookmarks) {
        setLoading(false);
        return;
      }
      const requests = user.bookmarks.map(
        async (id) => {
          const response = await fetch(
            `https://mernapp1-p41g.onrender.com/api/stories/${id}`
          );
         const data = await response.json();
          console.log(data)
        }
      );
      const data = await Promise.all(requests);
      const bookmarks = data.map(
        (item) => item.story
      );
      setStories(bookmarks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBookmarks();
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">
        Your Bookmarks
      </h2>

      {stories.length > 0 ? (
        stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
            fetchStories={fetchBookmarks}
            showRemove={true}
          />
        ))
      ) : (
        <h5>No bookmarks found</h5>
      )}
    </div>
  );
};

export default Bookmarks;
