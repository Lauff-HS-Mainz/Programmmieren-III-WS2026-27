export default function Content() {
  return (
    <section
      className="bg-white p-9 rounded-xl shadow-md"
      aria-labelledby="knowledge-title"
    >

      <div className="mb-8">

        <h1
          className="text-4xl font-bold text-[#244c3b] mb-4"
          id="knowledge-title"
        >
          Fähigkeiten
        </h1>

        <p className="text-gray-600 text-base leading-relaxed">
          Finde die passende Ansprechperson für dein Reparaturprojekt.
        </p>

      </div>

      <div className="w-full overflow-x-auto">

        <table className="w-full border-collapse text-left">

          <thead>
            <tr className="bg-[#356b50] text-white">
              <th className="p-4 text-sm font-semibold">
                Fähigkeiten
              </th>

              <th className="p-4 text-sm font-semibold">
                Name
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="bg-white hover:bg-[#dce9dc]">
              <td className="p-4 border-b border-gray-200 font-bold text-[#244c3b]">
                Holz
              </td>

              <td className="p-4 border-b border-gray-200">
                Horst, Lehnard
              </td>
            </tr>

            <tr className="bg-[#edf3ed] hover:bg-[#dce9dc]">
              <td className="p-4 border-b border-gray-200 font-bold text-[#244c3b]">
                Software
              </td>

              <td className="p-4 border-b border-gray-200">
                Ignacio, Maria
              </td>
            </tr>

            <tr className="bg-white hover:bg-[#dce9dc]">
              <td className="p-4 border-b border-gray-200 font-bold text-[#244c3b]">
                Hardware
              </td>

              <td className="p-4 border-b border-gray-200">
                Rene Descartes, Platon, Aristoteles
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}