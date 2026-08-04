import { ApolloProvider } from "@apollo/client";
import type { GetServerSideProps } from "next";
import client from "../graphql/client";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useTranslation } from "@/i18n/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <ApolloProvider client={client}>
      <div>
        <Seo title={t.seo.homeTitle} />
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.locale || context.locale === "fr") {
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};
