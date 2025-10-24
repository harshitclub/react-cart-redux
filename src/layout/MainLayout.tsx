import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
