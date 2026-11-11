import Content from "./content";
import Header from "./header";

export default function Main() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eef1e9] text-[#263d32] font-sans">

      <Header />

      <main className="w-[80%] max-w-[900px] mx-auto my-[60px] flex-1">
        <Content />
      </main>

      <footer className="p-6 bg-[#dce5d9] text-[#385644] text-center text-sm">
        Gemeinsam reparieren. Wissen teilen.
      </footer>

    </div>
  );
}
