import { Poppins } from "next/font/google";
import { Navbar } from "./(protected)/_components/navbar";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="w-screen bg-black h-full px-5">
      <Navbar />
    </main>
  );
}
