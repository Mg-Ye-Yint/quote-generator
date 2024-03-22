import QuoteGenerator from "@/components/QuoteGenerator";

async function fetchData(param: string) {
  const response = await fetch(`http://localhost:3000/api/${param}`);
  const quote = await response.json();
  return quote;
}

const CategoryPage = async ({ params }: { params: { categories: string } }) => {
  const quotes = await fetchData(params.categories);
  console.log(quotes);
  return (
    <>
      {" "}
      <QuoteGenerator quotes={quotes} param={params.categories} />
    </>
  );
};

export default CategoryPage;
