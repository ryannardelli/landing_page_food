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
      <div className="px-2 py-2 flex bg-white rounded-xl drop-shadow-sm overflow-hidden w-60 transform transition-transform items-center border-0 shadow-lg">
        <img
          className="aspect-square h-20 object-cover rounded-lg"
          src={img}
          alt="product image"
        />
        <div className="p-2 flex flex-col justify-between gap-1">
          <h3 className="text-lg font-medium text-gray-700 leading-4">
            {name}
          </h3>
          <div className="pb-0">
            <CustomRating rating={rating} />
          </div>
          <p>
            <span className="text-colorPrimary text-base">R$</span>{" "}
            <span className="text-xl font-semibold">{price},00</span>
          </p>
        </div>
      </div>
    </div>
  );
};
