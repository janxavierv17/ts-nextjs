import { render, screen } from "@testing-library/react";
import ProductsLayout from "@/app/products/layout";

describe("productsList component", () => {
  test("Should fetch products from api", async () => {
    render(await ProductsLayout());

    const image = screen.getByRole("img");
    expect(image).oBeInTheDocument();
  });
});
