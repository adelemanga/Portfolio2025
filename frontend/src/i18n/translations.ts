export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export const locales: Locale[] = ["fr", "en"];

export const localeLabels: Record<
  Locale,
  { code: string; flag: string; nativeName: string; ariaLabel: string }
> = {
  fr: {
    code: "FR",
    flag: "🇫🇷",
    nativeName: "Français",
    ariaLabel: "Afficher le site en français",
  },
  en: {
    code: "EN",
    flag: "🇺🇸",
    nativeName: "English",
    ariaLabel: "View the website in English",
  },
};

export const translations = {
  fr: {
    seo: {
      siteName: "Portfolio 2025 - Adèle Manga",
      defaultDescription:
        "Portfolio d'Adèle Manga, développeuse web full-stack et fondatrice d'Adèle Web Studio.",
      homeTitle: "Portfolio 2025 - Adèle Manga",
      aboutTitle: "À propos - Adèle Manga",
      projectsTitle: "Projets - Adèle Manga",
      reviewsTitle: "Avis clients - Adèle Manga",
      blogTitle: "Blog - Adèle Manga",
      contactTitle: "Contact - Adèle Manga",
    },
    nav: {
      home: "Accueil",
      about: "À propos de moi",
      projects: "Mes projets",
      reviews: "Avis clients",
      blog: "Mon blog",
      contact: "Contact",
      openMenu: "Ouvrir le menu de navigation",
      closeMenu: "Fermer le menu",
      language: "Langue",
      mainNavigation: "Navigation principale",
      mobileNavigation: "Navigation mobile",
    },
    music: {
      play: "Jouer",
      stop: "Stop musique",
      title: "Lecteur audio d'ambiance",
    },
    home: {
      videoLabel: "Vidéo de fond du Portfolio 2025",
    },
    about: {
      pageTitle: "À propos de moi",
      imageAlt: "Portrait professionnel d'Adèle Manga",
      title: "Bonjour, je suis",
      subtitle:
        "Développeuse web passionnée par la technologie et le design UI/UX",
      projectsCta: "Voir mes projets",
      contactCta: "Me contacter",
    },
    projects: {
      pageTitle: "Mes projets",
      technologiesLabel: "Technologies utilisées",
      projectCta: "Voir le projet",
      imageAlt: "Capture du projet",
      items: [
        {
          title: "Mon premier portfolio",
          description:
            "Un portfolio interactif avec animations et transitions fluides.",
        },
        {
          title: "Amicale Sénior de Liebherr",
          description:
            "Un site administrable avec WordPress, Laragon et CSS personnalisé.",
        },
        {
          title: "Mon portfolio 2025",
          description: "Portfolio animé, fluide et connecté à un backend.",
        },
        {
          title: "Aéroport de Colmar",
          description: "Refonte du site de l'aéroport et proposition de maquette.",
        },
        {
          title: "Application de service de football",
          description:
            "Une application web pensée pour présenter et réserver des cours de football.",
        },
        {
          title: "Un restaurant à mon image",
          description:
            "Site e-commerce avec expérience utilisateur optimisée et paiement sécurisé.",
        },
        {
          title: "Application mobile React Native",
          description:
            "Une application mobile avec React Native et Firebase pour le backend.",
        },
        {
          title: "Application d'administration d'œuvres d'art",
          description:
            "Application pour administrer, organiser et visualiser des œuvres d'art.",
        },
      ],
    },
    reviews: {
      pageTitle: "Avis clients",
      formTitle: "Laissez votre avis",
      listTitle: "Avis des utilisateurs",
      name: "Nom",
      lastname: "Prénom",
      title: "Titre de l'avis",
      rating: "Évaluation",
      message: "Votre avis",
      submit: "Envoyer",
      loading: "Envoi en cours...",
      success: "Votre message a été envoyé avec succès !",
      genericError: "Une erreur est survenue.",
      uploadMissing: "Sélectionnez une image avant de l'envoyer.",
      uploadError: "Échec de l'upload de l'image.",
      loadingList: "Chargement...",
      listError: "Erreur",
      empty: "Aucun avis pour le moment.",
      authorLabel: "Auteur",
      ratingLabel: "Note",
      decorativeAlt: "Illustration décorative",
    },
    blog: {
      pageTitle: "Bienvenue dans mon blog",
      sectionTitle: "Blog",
      videoLabel: "Vidéo de fond du blog",
      imageAlt: "Capture de l'article",
      posts: [
        {
          title: "Mon tout premier portfolio !",
          date: "Publié le 30 octobre 2024",
          body:
            "Bienvenue sur mon tout premier portfolio ! Ce projet représente bien plus qu'une simple vitrine de mes compétences : c'est le reflet de mon évolution en tant que développeuse. J'ai conçu ce site avec React, Node.js, JavaScript et CSS, en mettant l'accent sur une interface moderne et dynamique. Vous y trouverez mes projets, mes expériences et les technologies que j'utilise au quotidien.",
        },
        {
          title: "Découvrir une passion : un site internet pour un ami",
          date: "Publié le 4 mars 2025",
          body:
            "Mon ami est un passionné de football et souhaite partager son expertise avec d'autres passionnés. Pour l'aider à réaliser son projet, j'ai développé un site web qui lui permet de proposer des cours de football personnalisés. L'objectif est d'offrir une plateforme simple, fluide et agréable, afin de rendre l'apprentissage du football accessible à différents profils de joueurs.",
        },
      ],
    },
    contact: {
      pageTitle: "Contact",
      heading: "Adèle Manga",
      videoLabel: "Vidéo de fond de la page contact",
      name: "Nom",
      lastname: "Prénom",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
      loading: "Envoi en cours...",
      success: "Votre message a été envoyé avec succès !",
      error: "Une erreur est survenue, veuillez réessayer.",
      decorativeAlt: "Illustration décorative",
      detailsTitle: "Coordonnées",
      websiteLabel: "Site web",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
    },
    footer: {
      title: "Portfolio 2025",
      name: "Adèle Manga",
      role: "Développeuse web full-stack & fondatrice d'Adèle Web Studio",
      description:
        "Je conçois des interfaces modernes, des backends solides et des expériences web sur mesure pour des projets professionnels.",
      navigationTitle: "Navigation",
      contactTitle: "Contact professionnel",
      website: "Adèle Web Studio",
      websiteLabel: "Visiter Adèle Web Studio",
      emailLabel: "Envoyer un email",
      phoneLabel: "Appeler Adèle Manga",
      contact: "Me contacter",
      contactLabel: "Aller à la page contact",
      copyright: "Tous droits réservés.",
    },
  },
  en: {
    seo: {
      siteName: "Portfolio 2025 - Adèle Manga",
      defaultDescription:
        "Portfolio of Adèle Manga, full-stack web developer and founder of Adèle Web Studio.",
      homeTitle: "Portfolio 2025 - Adèle Manga",
      aboutTitle: "About - Adèle Manga",
      projectsTitle: "Projects - Adèle Manga",
      reviewsTitle: "Client Reviews - Adèle Manga",
      blogTitle: "Blog - Adèle Manga",
      contactTitle: "Contact - Adèle Manga",
    },
    nav: {
      home: "Home",
      about: "About me",
      projects: "My projects",
      reviews: "Client reviews",
      blog: "My blog",
      contact: "Contact",
      openMenu: "Open navigation menu",
      closeMenu: "Close menu",
      language: "Language",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
    },
    music: {
      play: "Play",
      stop: "Stop music",
      title: "Background audio player",
    },
    home: {
      videoLabel: "Portfolio 2025 homepage background video",
    },
    about: {
      pageTitle: "About me",
      imageAlt: "Professional portrait of Adèle Manga",
      title: "Hi, I'm",
      subtitle: "Web developer passionate about technology and UI/UX design",
      projectsCta: "View my projects",
      contactCta: "Contact me",
    },
    projects: {
      pageTitle: "My projects",
      technologiesLabel: "Technologies used",
      projectCta: "View project",
      imageAlt: "Project screenshot",
      items: [
        {
          title: "My first portfolio",
          description:
            "An interactive portfolio with smooth animations and transitions.",
        },
        {
          title: "Amicale Seniors Liebherr",
          description:
            "An editable website built with WordPress, Laragon, and custom CSS.",
        },
        {
          title: "My 2025 portfolio",
          description: "A smooth animated portfolio connected to a backend.",
        },
        {
          title: "Colmar Airport",
          description: "Website redesign and interface mockup proposal.",
        },
        {
          title: "Football service application",
          description:
            "A web application designed to present and book football coaching sessions.",
        },
        {
          title: "A restaurant in my style",
          description:
            "An e-commerce website with an optimized user experience and secure payment flow.",
        },
        {
          title: "React Native mobile application",
          description:
            "A mobile application built with React Native and Firebase for the backend.",
        },
        {
          title: "Artwork administration application",
          description:
            "An application for managing, organizing, and viewing artwork.",
        },
      ],
    },
    reviews: {
      pageTitle: "Client reviews",
      formTitle: "Leave a review",
      listTitle: "User reviews",
      name: "Last name",
      lastname: "First name",
      title: "Review title",
      rating: "Rating",
      message: "Your review",
      submit: "Submit",
      loading: "Sending...",
      success: "Your message has been sent successfully!",
      genericError: "An error occurred.",
      uploadMissing: "Please select an image before uploading.",
      uploadError: "Image upload failed.",
      loadingList: "Loading...",
      listError: "Error",
      empty: "No reviews yet.",
      authorLabel: "Author",
      ratingLabel: "Rating",
      decorativeAlt: "Decorative illustration",
    },
    blog: {
      pageTitle: "Welcome to my blog",
      sectionTitle: "Blog",
      videoLabel: "Blog background video",
      imageAlt: "Article screenshot",
      posts: [
        {
          title: "My very first portfolio",
          date: "Published on October 30, 2024",
          body:
            "Welcome to my very first portfolio. This project is more than a simple showcase of my skills: it reflects my growth as a developer. I built it with React, Node.js, JavaScript, and CSS, with a focus on a modern and dynamic interface. It presents my projects, experience, and the technologies I use in my daily work.",
        },
        {
          title: "Turning a passion into a website for a friend",
          date: "Published on March 4, 2025",
          body:
            "A friend of mine is passionate about football and wanted to share his expertise with other players. To support the project, I developed a website that presents personalized football coaching sessions. The goal was to create a simple, smooth, and enjoyable platform that makes football training accessible to different player profiles.",
        },
      ],
    },
    contact: {
      pageTitle: "Contact",
      heading: "Adèle Manga",
      videoLabel: "Contact page background video",
      name: "Last name",
      lastname: "First name",
      email: "Email",
      message: "Message",
      submit: "Send",
      loading: "Sending...",
      success: "Your message has been sent successfully!",
      error: "An error occurred. Please try again.",
      decorativeAlt: "Decorative illustration",
      detailsTitle: "Contact details",
      websiteLabel: "Website",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
    footer: {
      title: "Portfolio 2025",
      name: "Adèle Manga",
      role: "Full-stack web developer & founder of Adèle Web Studio",
      description:
        "I design modern interfaces, reliable backends, and custom web experiences for professional projects.",
      navigationTitle: "Navigation",
      contactTitle: "Professional contact",
      website: "Adèle Web Studio",
      websiteLabel: "Visit Adèle Web Studio",
      emailLabel: "Send an email",
      phoneLabel: "Call Adèle Manga",
      contact: "Contact me",
      contactLabel: "Go to the contact page",
      copyright: "All rights reserved.",
    },
  },
} as const;
