import ProductCard from "../../components/features/ProductCard";
import Container from "../../components/ui/Container";
import HomeSlider from "./HomeSlider";

//
export default function Home() {
  return (
    <div className="">
      <Container>
        <div className=" flex justify-center items-center">
          <HomeSlider />
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
}
