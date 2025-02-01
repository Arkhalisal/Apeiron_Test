// this layout contains the header and footer

// local imports
import Header from "@/components/layoutComponents/Header";
import Footer from "@/components/layoutComponents/Footer";

// main layout
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#26282a]">
      {/* sticky header */}
      <Header />

      {/* main content, flex-1 is to make sure the main content takes up the remaining space */}
      <main className="flex-1">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
}
