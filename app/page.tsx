import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
    </div>
  );
}
