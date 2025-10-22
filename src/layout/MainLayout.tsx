import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function MainLayout() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
