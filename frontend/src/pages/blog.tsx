import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.blogTitle} />
        <Header />
        <h1 className="page-title">{t.blog.pageTitle}</h1>
        <Blog />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
