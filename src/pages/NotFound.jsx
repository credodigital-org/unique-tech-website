import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Unique Tech General Maintenance LLC</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      <main className="page-main notfound">
        <h1>404</h1>
        <p>Sorry, we couldn't find the page you were looking for.</p>
        <Link className="button" to="/">Back to Home</Link>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
