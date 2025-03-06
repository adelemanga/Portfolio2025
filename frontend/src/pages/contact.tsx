import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import YouTubeAudio from "@/components/Audio";

export default function ContactPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Adèle Manga</h1>
        <Contact />
        <Footer />{" "}
      </div>
    </ApolloProvider>
  );
}
