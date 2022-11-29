import Head from "next/head";
import Footer from "../organism/Footer";
import Navsbar from "../organism/Navbar";

const AppLayout = ({ title, description, children }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Navsbar />
      <main className="min-h-screen md:min-h-min ">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
