import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <div className="music-container">
        {isPlaying && (
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/kjlu9RRHcbE?autoplay=1&loop=1&playlist=kjlu9RRHcbE"
            allow="autoplay"
            style={{ display: "none" }}
          ></iframe>
        )}

        <button
          className="button-music"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "⏸️ Stop Music" : "▶️ Jouer"}
        </button>
      </div>

      {children}
    </div>
  );
};

export default Layout;
