"use cient";
import { ProductListInterface } from "../../app/products/page";
import Image from "next/image";

interface ProductInterface {
  image: string;
  title: string;
  width: number;
  height: number;
}

const Product: React.FC<ProductInterface> = ({
  image,
  title,
  width,
  height,
}) => {
  return <Image src={image} alt={title} width={width} height={height} />;
};

export default Product;
