import { Navbar } from "./(protected)/_components/navbar";
import { SmallNavbar } from "@/components/small-navbar";
import { Hero } from "@/components/landing/hero";
import { How } from "@/components/landing/how";
import { Tech } from "@/components/landing/tech";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="w-full bg-black relative">
      <Navbar />
      <SmallNavbar />
      <section id="main" className=" w-full h-[calc(100vh-200px)]">
        <Hero />
      </section>
      <section id="how" className=" w-full">
        <How />
      </section>
      <section id="tech" className=" w-full">
        <Tech />
      </section>
      <section id="contact" className=" w-full">
        <Contact />
      </section>
    </main>
  );
}
