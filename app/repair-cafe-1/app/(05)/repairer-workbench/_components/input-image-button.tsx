export default function InputImageButton() {
  return (
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 rounded" type="file" accept="image/*" />
  );
}