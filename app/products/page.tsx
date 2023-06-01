export interface ProductListInterface {
  categories?: [
    {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
      rating: { rate: number; count: number };
    }
  ];
}

import Product from "../../components/products/product";
const Page: React.FC<ProductListInterface> = ({ categories }) => {
  const products = categories?.map((product) => (
    <li key={product.id}>
      <Product
        image={product.image}
        title={product.title}
        width={200}
        height={200}
      />
    </li>
  ));
  return (
    <div>
      <h1>Page component</h1>
      {products}
    </div>
  );
};

export default Page;
