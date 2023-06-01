export interface ProductListInterface {
	categories: [
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
import CategoryList from "./productList";
const Page: React.FC<ProductListInterface> = ({ categories }) => {
	console.log("Categories =>", categories);
	return (
		<div>
			<h1>Page component</h1>
			<CategoryList categories={categories} />
		</div>
	);
};

export default Page;
