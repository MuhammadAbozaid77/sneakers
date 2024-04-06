//

import ProductDetails from "./ProductDetails";
import ProductDetailsCarosel from "./ProductDetailsCarosel";
import Container from "../ui/Container";

export default function ProductsDetails() {
  return (
    <Container>
      <div>
        <ProductDetailsCarosel />
        <ProductDetails />
      </div>
    </Container>
  );
}
