export default function InputImageButton() {
  return (
    <div className="flex justify-center items-center justify-between py-5">
      <input className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-500 rounded-3xl" type="file" accept="image/*" />
    </div>
  );
}