
const StoryCard = ({
  story,
  fetchStories,
  showRemove
}) => {
  const handleBookmark = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/api/stories/${story._id}/bookmark`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const data = await response.json();
      console.log(data)
      alert(data.message);
      fetchStories();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="card shadow-sm mb-3 story-card">
      <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h6 className="points">
            {story.points} points
          </h6>

          <h5 className="fw-bold">
            {story.title}
          </h5>

          <p className="text-muted">
            by {story.author} • {story.postedAt}
          </p>
        </div>
        <div className="d-flex gap-2">
          <a
            href={story.url}
            target="_blank"
            className="btn btn-outline-primary btn-sm"
          >
            Read
          </a>
          <button
            className={`btn btn-sm ${
              showRemove
                ? "btn-danger"
                : "btn-warning"
            }`}
            onClick={handleBookmark}
          >
            {showRemove
              ? "Remove"
              : "Bookmark"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;