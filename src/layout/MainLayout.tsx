import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/global/footer/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
