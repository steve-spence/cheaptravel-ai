import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <p className="bg-white dark:bg-black">Page works!</p>
    </div>
  );
}
