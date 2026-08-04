import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
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
            title={t.music.title}
            style={{ display: "none" }}
          ></iframe>
        )}

        <button
          className="button-music"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? `⏸️ ${t.music.stop}` : `▶️ ${t.music.play}`}
        </button>
      </div>

      {children}
    </div>
  );
};

export default Layout;
