import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "../components/Project";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function ProjectPage() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.projectsTitle} />
        <Header />
        <Projects />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
