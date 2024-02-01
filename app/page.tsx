import { Navbar } from "./(protected)/_components/navbar";
import { SmallNavbar } from "@/components/small-navbar";
import { Hero } from "@/components/landing/hero";
import { How } from "@/components/landing/how";
import { Tech } from "@/components/landing/tech";
import { Contact } from "@/components/landing/contact";
import { Suspense } from "react";
import { Loading } from "@/components/loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full bg-black relative flex items-center flex-col">
        <Navbar />
        <SmallNavbar />
        <div className="w-full max-w-[1440px] flex items-center flex-col gap-[100px] pb-[100px]">
          <section
            id="main"
            className=" w-full py-[100px]  lg:h-[calc(100vh-200px) "
          >
            <Hero />
          </section>
          <section id="how" className=" w-full ">
            <How />
          </section>
          <section id="tech" className=" w-full ">
            <Tech />
          </section>
          <section id="contact" className=" w-full ">
            <Contact />
          </section>
        </div>
      </main>
    </Suspense>
  );
}
