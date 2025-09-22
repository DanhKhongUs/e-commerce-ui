import { Product } from "@/types";
import Image from "next/image";
import { productCardConfig } from "@/config/productCardConfig";

export default function ProductCard({
  product,
}: {
  product: Product & { type?: string };
}) {
  return (
    <div>
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-sm p-4 flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
      >
        <div className="relative">
          {product.tag && (
            <div
              className={`absolute top-0 left-0 px-4 py-2 text-xs font-medium rounded-tl-2xl rounded-br-2xl shadow-sm
                ${productCardConfig.tagStyles.bgColor} ${productCardConfig.tagStyles.textColor}`}
            >
              {product.tag}
            </div>
          )}

          {product.soldOut && (
            <div
              className={`absolute inset-0 flex items-center justify-center text-xl font-extrabold
                ${productCardConfig.soldOutOverlay.bgColor} ${productCardConfig.soldOutOverlay.textColor} backdrop-contract-200`}
            >
              {productCardConfig.soldOutLabel}
            </div>
          )}

          {/* Image */}
          <div className="flex justify-center items-center h-[312px]">
            <Image
              src={product.img}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain h-[350px]"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="mt-4 font-bold text-left text-black">{product.name}</h2>

        {/* Button */}
        <button className="mt-4 w-full px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 cursor-pointer">
          VIEW PRODUCT -{" "}
          <span className="text-yellow-600">${product.price}</span>
        </button>
      </div>
    </div>
  );
}
