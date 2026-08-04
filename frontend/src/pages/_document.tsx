import Document, {
  Head,
  Html,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

type PortfolioDocumentProps = DocumentInitialProps & {
  locale?: string;
};

export default class PortfolioDocument extends Document<PortfolioDocumentProps> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<PortfolioDocumentProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      locale: ctx.locale,
    };
  }

  render() {
    const lang = this.props.locale === "en" ? "en-US" : "fr-FR";

    return (
      <Html lang={lang}>
        <Head>
          <link rel="icon" type="image/png" href="/images/adele-web-studio-logo-gradient.png" />
          <link rel="apple-touch-icon" href="/images/adele-web-studio-logo-gradient.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
