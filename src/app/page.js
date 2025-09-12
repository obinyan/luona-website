import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 text-center">
        <h1 className="text-4xl font-bold tracking-wide">
          Welcome to Luona Luxury Shoes
        </h1>
        <p className="mt-4 text-gray-600">
          Crafted elegance. Timeless style. Explore our collection.
        </p>
      </section>
    </main>
  );
}
