import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
