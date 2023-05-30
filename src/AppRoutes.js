import Footer from "components/Footer";
import Header from "components/Header";
import AboutUs from "pages/AboutUs";
import Error from "pages/Error";
import Home from "pages/Home";
import Posts from "pages/posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/postagens" element={<Posts />} />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
