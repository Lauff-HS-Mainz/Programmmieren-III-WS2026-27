export default function Input() {
  return (
<div className="flex justify-center items-center justify-between py-5">
  <div className="w-full max-w-2xl min-w-[320px] md:min-w-[500px]">
    <textarea 
      placeholder="Kommentar hinzufügen..." 
      className="w-full h-full p-6 text-lg text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-3xl shadow-sm focus:shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
    ></textarea>
  </div>
  </div>
  );
}