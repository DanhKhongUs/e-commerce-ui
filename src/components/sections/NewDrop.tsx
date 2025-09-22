import { Product } from "@/types";
import ProductCard from "../ProductCard";
import { Products } from "@/data/product";

export default function NewDrop() {
  const products: Product[] = Products;

  return (
    <section className="flex justify-center px-4 pt-16 pb-20">
      <div className="max-w-[1320px] w-full flex flex-col gap-10">
        {/* Left Content */}
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            DON&apos;T MISS OUT
            <br /> NEW DROPS
          </h1>

          <button className="mt-20  px-6 py-3 text-white bg-[#4a69e2] hover:bg-blue-600 rounded-lg text-sm font-semibold transition cursor-pointer">
            SHOP NEW DROPS
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
