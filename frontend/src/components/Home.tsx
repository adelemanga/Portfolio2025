export default function HomePage() {
  return (
    <div className="video-container">
      <iframe
        className="video-background"
        src="https://www.youtube.com/embed/1NKBpxlxrjU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Background"
      />
    </div>
  );
}
