import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.contactTitle} />
        <Header />
        <h1 className="page-title">{t.contact.pageTitle}</h1>
        <Contact />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
