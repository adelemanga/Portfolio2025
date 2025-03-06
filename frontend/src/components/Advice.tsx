import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_ADVICE } from "../graphql/mutations";

function Advice() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    message: "",
    imgUrl: "", // Correction ici (remplacer "ilmgUrl" par "imgUrl")
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
      alert("Sélectionnez une image avant de l'envoyer.");
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
        throw new Error("Échec de l'upload de l'image.");
      }

      const data = await response.json();
      setImageURL(data.filename); // Ici, vous obtenez l'URL de l'image
    } catch (err) {
      console.error("Erreur lors de l'upload :", err);
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mettre à jour formData avec l'URL de l'image téléchargée
    const formDataWithImg = {
      ...formData,
      imgUrl: imageURL || "", // Ajoutez l'URL de l'image dans formData
    };

    try {
      await addAvis({ variables: formDataWithImg });
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({
        name: "",
        lastname: "",
        message: "",
        imgUrl: "", // Réinitialisez ici également
        rating: 0,
        title: "",
      });
      setImageURL(null); // Réinitialisez l'URL de l'image
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);
    }
  };

  return (
    <div className="contact1">
      <h1>Laissez votre avis</h1>

      <form className="avis" onSubmit={handleSubmit}>
  
        {/* Formulaire */}
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
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
          <label htmlFor="lastname">Prénom :</label>
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
          <label htmlFor="title">Titre de l'avis :</label>
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
          <label htmlFor="rating">Évaluation :</label>
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
          <label htmlFor="message">Votre Avis :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">Une erreur est survenue.</p>}
      </form>

      <div className="image-container1">
        <img
          src="https://adelemanga-portfolio.netlify.app/static/media/girlme.0acab6167e7db055cb7a.png"
          alt="Original Image"
          className="clone-1"
        />
      </div>
    </div>
  );
}

export default Advice;
