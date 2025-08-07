import AboutSRM from "@/components/AboutSRM/AboutSRM";
import AboutVMUN from "@/components/AboutVMUN/AboutVMUN";
import Cards from "@/components/Cards/Cards";
import Home from "@/components/Home/Home";

export default function Home_Page() {
  return (
    <div className="">
      <Home/>
      <AboutSRM />
      <AboutVMUN />
      <Cards/>
      
    </div>
  );
}
