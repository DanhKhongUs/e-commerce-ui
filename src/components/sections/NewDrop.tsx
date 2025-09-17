import Image from "next/image";

export default function NewDrop() {
  const products = [
    {
      id: 1,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      src: "/hero/hero1.png",
    },
    {
      id: 2,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      src: "/hero/hero2.png",
    },
    {
      id: 3,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      src: "/hero/hero3.png",
    },
    {
      id: 4,
      name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
      price: 125,
      src: "/hero/hero4.png",
    },
  ];

  return (
    <section className="flex justify-center px-4 pt-16">
      <div className="max-w-[1320px] w-full flex flex-col gap-10">
        {/* Left Content */}
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            DON&apos;T MISS OUT
            <br /> NEW DROPS
          </h1>

          <button className="mt-20 self-start px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition cursor-pointer">
            SHOP NEW DROPS
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm p-4 flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              {/* Badge */}
              <div className="absolute">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-br-lg rounded-tl-lg">
                  New
                </span>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center h-[312px]">
                <Image
                  src={product.src}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-contain h-[350px]"
                />
              </div>

              {/* Name */}
              <h2 className="mt-4 font-bold text-left">{product.name}</h2>

              {/* Button */}
              <button className="mt-4 w-full px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 cursor-pointer">
                VIEW PRODUCT -{" "}
                <span className="text-yellow-600">${product.price}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
