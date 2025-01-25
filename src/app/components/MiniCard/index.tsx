import { CustomRating } from "../CustomRating";

interface CustomMiniCardProps {
  name: string;
  price: number;
  img: string;
  stars: number;
}

export const MiniCard = ({ name, price, img, stars }: CustomMiniCardProps) => {
  const rating = Array(5)
    .fill(false)
    .map((_, index) => index < stars);

  return (
    <div className="flex justify-center mx-2">
      <div className="px-2 py-2 flex bg-white rounded-lg drop-shadow-sm overflow-hidden w-60 transform transition-transform border-gray-200 border items-center">
        <img
          className="aspect-square h-16 object-cover rounded-lg"
          src={img}
          alt="product image"
        />
        <div className="p-2 flex flex-col justify-between">
          <h3 className="text-sm font-bold text-gray-700 leading-4">{name}</h3>
          <div className="pb-0">
            <CustomRating rating={rating} />
          </div>
          <p>R${price},00</p>
        </div>
      </div>
    </div>
  );
};
