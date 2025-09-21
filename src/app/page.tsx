import Categories from "@/components/sections/Categories";
import Hero from "@/components/sections/Hero";
import NewDrop from "@/components/sections/NewDrop";
import Review from "@/components/sections/Review";

export default function Home() {
  return (
    <>
      <Hero />
      <NewDrop />
      <Categories />
      <Review />
    </>
  );
}
