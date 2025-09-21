import ReviewCard from "../ReviewCardProps";

export default function Review() {
  return (
    <section className="flex justify-center px-4 pt-16">
      <div className="max-w-[1320px] w-full flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            REVIEWS
          </h1>
          <button className=" mt-4 px-8 py-3 text-white bg-[#4a69e2] hover:bg-blue-600 rounded-lg text-sm font-semibold transition cursor-pointer">
            SEE ALL
          </button>
        </div>

        <div className="flex gap-3">
          <ReviewCard
            title={"Good Quality"}
            content={"I highly recommend shopping from kicks"}
            rating={5}
            userImg="/user.jpg"
            userName="Danh"
            productImg="/landing/hero1.png"
          />

          <ReviewCard
            title={"Good Quality"}
            content={"I highly recommend shopping from kicks"}
            rating={5}
            userImg="/user.jpg"
            userName="Danh"
            productImg="/landing/hero1.png"
          />
          <ReviewCard
            title={"Good Quality"}
            content={"I highly recommend shopping from kicks"}
            rating={5}
            userImg="/user.jpg"
            userName="Danh"
            productImg="/landing/hero1.png"
          />
        </div>
      </div>
    </section>
  );
}
