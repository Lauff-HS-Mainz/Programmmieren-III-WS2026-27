import Header from "./_components/header";
import Text from "./_components/text";
import Main from "./_components/main";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <Header />
      <div className="w-full max-w-md my-6">
        <Text />
        <Main />
      </div>
    </div>
  );
}