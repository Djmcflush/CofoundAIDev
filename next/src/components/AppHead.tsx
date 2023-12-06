import Head from "next/head";
const image = "/utils/CFAI Transparent.PNG";


const AppHead = ({ title, ogTitle }: { title?: string; ogTitle?: string }) => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "Assemble, configure, and deploy autonomous AI Agents in your browser.";
  return (
    <Head>
      <title>{title ?? "CofoundAI"}</title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content="@Djmflush" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ?? "AgentGPT 🤖"} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="640" />
      <meta property="og:title" content={ogTitle ?? "CofoundAI: Dedicated CoFounders for your buisness"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="http://3.82.9.241:3000/" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA" />
      <link rel="icon" href="/cfai.svg" />
      <link rel="mask-icon" href="/cfai.svg" />
    </Head>
  );
};

export default AppHead;
