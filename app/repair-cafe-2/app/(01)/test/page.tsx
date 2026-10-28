import Header from "./_components/header";
import Content from "./_components/content";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}