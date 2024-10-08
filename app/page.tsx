import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
// import Features from "@/components/Features";


export default function Home() {
  return (
    <main className="bg-black h-screen w-full">
        <Navbar />
        <Hero />
        {/* <Features /> */}
      </main>
  );
}
