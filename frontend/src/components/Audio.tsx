import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";

const YouTubeAudio = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
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
      <button onClick={() => setIsPlaying(true)}>▶️ {t.music.play}</button>
    </div>
  );
};

export default YouTubeAudio;
