import Newsletter from "@/components/shared/Newsletter";
import Featured from "./Featured";
import Hero from "./Hero";
import Offer from "./Offer";
import Transitional from "./Transitional";
import Banner from "./Banner";
import Categories from "./Categories";
import Products from "./Products";
import Instagram from "./Instagram";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Transitional /> */}
      <Featured />
      <Banner />
      <Categories />
      <Products />
      <Instagram />
      {/* <Offer /> */}
      <Newsletter />
    </main>
  );
}
