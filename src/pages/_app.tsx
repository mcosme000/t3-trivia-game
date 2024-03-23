import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutDefault from "@/components/layouts/default";

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = LayoutDefault;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
