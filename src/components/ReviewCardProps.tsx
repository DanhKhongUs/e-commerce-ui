import Image from "next/image";
import { Star } from "lucide-react";

interface ReviewCardProps {
  title: string;
  content: string;
  rating: number;
  userImg: string;
  productImg: string;
  userName: string;
}

export default function ReviewCard({
  title,
  content,
  rating,
  userImg,
  productImg,
  userName,
}: ReviewCardProps) {
  return (
    <div className="w-[430px] h-[500px] rounded-2xl shadow-md overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
      {/* Nội dung review */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className=" text-gray-600">{content}</p>
          </div>
          {/* Avatar */}
          <Image
            src={userImg}
            alt={userName}
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium text-gray-700">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Ảnh sản phẩm */}
      <div className="w-full h-100 relative">
        <Image src={productImg} alt="Product" fill className="object-cover" />
      </div>
    </div>
  );
}
