export default function DbOutput() {
  return (
    <section className="rounded-lg border border-blue-200 bg-gray-50 p-5">
      <h3 className="mb-3 text-xl font-semibold text-blue-500">Auftragsdetails: </h3>

      <p className="mb-2 text-gray-700">
        Gegenstand: <span className="font-semibold">Laptop</span>
      </p>
      <p className="text-gray-700">
        Der Laptop hat einen defekten Bildschirm und benötigt eine Reparatur.
      </p>
    </section>
  );
}
