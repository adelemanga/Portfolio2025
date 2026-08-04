import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMe from "@/components/About";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.aboutTitle} />
        <Header />
        <section className="about-wave-page">
          <h1 className="page-title about-wave-title">{t.about.pageTitle}</h1>
          <AboutMe />
        </section>
        <Footer />
      </div>
    </ApolloProvider>
  );
}
