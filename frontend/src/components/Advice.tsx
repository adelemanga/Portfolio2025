import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_ADVICE } from "../graphql/mutations";
import { useTranslation } from "@/i18n/useTranslation";

function Advice() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    message: "",
    imgUrl: "",
    rating: 0,
    title: "",
  });

  const [imageURL, setImageURL] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [addAvis, { loading, error }] = useMutation(ADD_ADVICE);

  // Gestion du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gestion de la note (étoiles)
  const handleRatingChange = (value: number) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  // Upload d’image avec Fetch
  const handleImageUpload = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!file) {
      alert(t.reviews.uploadMissing);
      return;
    }

    const url = "/img";
    const formDataUpload = new FormData();
    formDataUpload.append("file", file, file.name);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error(t.reviews.uploadError);
      }

      const data = await response.json();
      setImageURL(data.filename); // Ici, vous obtenez l'URL de l'image
    } catch (err) {
      console.error("Review image upload failed:", err);
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mettre à jour formData avec l'URL de l'image téléchargée
    const formDataWithImg = {
      ...formData,
      imgUrl: imageURL || "",
    };

    try {
      await addAvis({ variables: formDataWithImg });
      setSuccessMessage(t.reviews.success);
      setFormData({
        name: "",
        lastname: "",
        message: "",
        imgUrl: "",
        rating: 0,
        title: "",
      });
      setImageURL(null);
    } catch (err) {
      console.error("Review submission failed:", err);
    }
  };

  return (
    <div className="contact1 contact-with-floating-image">
      <h1 className="page-title">{t.reviews.formTitle}</h1>

      <form className="avis contact-form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name1">{t.reviews.name}</label>
          <input
            type="text"
            id="name1"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">{t.reviews.lastname}</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">{t.reviews.title}</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">{t.reviews.rating}</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                onClick={() => handleRatingChange(value)}
                style={{
                  cursor: "pointer",
                  color: value <= formData.rating ? "gold" : "blue",
                  fontSize: "30px",
                }}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.reviews.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? t.reviews.loading : t.reviews.submit}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{t.reviews.genericError}</p>}
      </form>

      <div className="image-container1 form-floating-image">
        <img
          src="https://adelemanga-portfolio.netlify.app/static/media/girlme.0acab6167e7db055cb7a.png"
          alt={t.reviews.decorativeAlt}
          className="clone-1"
        />
      </div>
    </div>
  );
}

export default Advice;
