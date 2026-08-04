import { useTranslation } from "@/i18n/useTranslation";

function Blog() {
  const { t } = useTranslation();

  return (
    <div className="list">
      <h2>{t.blog.sectionTitle}</h2>

      <main>
        <video
          className="video-background5"
          src="https://i.imgur.com/4pS6nCp.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          aria-label={t.blog.videoLabel}
        />

        {t.blog.posts.map((post, index) => (
          <article key={post.title}>
            <h2>{post.title}</h2>
            <img
              className="img1Blog"
              src={
                index === 0
                  ? "https://i.imgur.com/DrcbKCv.png"
                  : "https://i.imgur.com/7oLVQV8.png"
              }
              alt={`${t.blog.imageAlt} - ${post.title}`}
            />
            <p className="date">{post.date}</p>
            <p className={index === 1 ? "text-blog1" : undefined}>
              {post.body}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default Blog;
