import { useEffect, useState } from "react";
import StoryCard from "../component/StoryCard";
// import Loader from "../components/Loader";

const Home = () => {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    try {
      const response = await fetch(
        `https://mernapp1-p41g.onrender.com/api/stories/getAll/?page=1&limit=10`
      );

      const data = await response.json()
      setStories(data.stories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

//   if (loading) return <Loader />;

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Top Hacker News Stories
        </h1>

        <p className="text-muted">
          Latest tech news from Hacker News
        </p>
      </div>

      {stories.length > 0 ? (
        stories.map((story) => (
          <StoryCard
            key={story._id}
            story={story}
            fetchStories={fetchStories}
          />
        ))
      ) : (
        <h5>No stories found</h5>
      )}
    </div>
  );
};

export default Home;
