import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

export async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch data.");
  return res.json();
}

export default async function ProductsLayout() {
  const categories = await getCategories();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Page categories={categories} />
      </Suspense>
    </div>
  );
}
