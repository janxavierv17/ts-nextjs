"use cient";
import { ProductListInterface } from "./page";
import Image from "next/image";
const ProductList: React.FC<ProductListInterface> = ({ categories }) => {
	const displayCategories = categories.map((category) => {
		return (
			<>
				<li key={category.id}>
					{category.title}{" "}
					<Image
						src={category.image}
						alt={category.title}
						width={200}
						height={200}
					/>
				</li>
			</>
		);
	});
	return <h1>{displayCategories}</h1>;
};

export default ProductList;
