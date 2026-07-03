import Image from "next/image";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Home() {

const products = await getProducts();
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((p: any) => (
        <div key={p.id} className="border p-4">
          <img src={p.image} alt={p.title} className="h-40 mx-auto" />
          <h2 className="font-bold">{p.title}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
