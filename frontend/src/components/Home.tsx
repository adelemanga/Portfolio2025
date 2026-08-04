import { useTranslation } from "@/i18n/useTranslation";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="video-container">
      <video
        className="video-background"
        src="/nature-project.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label={t.home.videoLabel}
      ></video>
    </div>
  );
}
