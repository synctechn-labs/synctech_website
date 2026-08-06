import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
