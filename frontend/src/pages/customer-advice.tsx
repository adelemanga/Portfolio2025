import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Advice from "@/components/Advice";
import Footer from "@/components/Footer";
import AdviceList from "@/components/AdviceList";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function AdvicePage() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.reviewsTitle} />
        <Header />
        <Advice />
        <AdviceList />
        <Footer />
      </div>
    </ApolloProvider>
  );
}
