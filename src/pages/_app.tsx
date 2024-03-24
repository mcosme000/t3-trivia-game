import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutDefault from "@/components/layouts/default";
import { SessionProvider } from 'next-auth/react'


const App = ({ Component, pageProps: {session, ...pageProps} }: AppProps) => {
  const Layout = LayoutDefault;
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default App;
