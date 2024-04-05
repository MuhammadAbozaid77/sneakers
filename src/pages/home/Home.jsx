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
    </div>
  );
}
