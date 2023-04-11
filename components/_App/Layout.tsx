import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>PhishFort Drop Page Demo</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="PhishFort Drop Page Demo" />
        <meta
          name="og:title"
          property="og:title"
          content="PhishFort Drop Page Demo"
        ></meta>
        <meta name="twitter:card" content="PhishFort Drop Page Demo"></meta>
        <link rel="canonical" href=""></link>
        <meta property="og:image" content="" />
      </Head>

      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
