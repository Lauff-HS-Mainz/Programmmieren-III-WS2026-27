import Input from './input';
import InputImageButton from './input-image-button';
import DbOutput from './db_output';

export default function Content() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-bold">Alle Daten zum Auftrag von #Hans</h2>
        <div className="space-y-4">
          <Input />
          <InputImageButton />
        </div>
      </section>

      <DbOutput />
    </main>
  );
}