import { FaStar } from "react-icons/fa";
interface CustomCardHighlight {
  srcImg: string;
  altImg: string;
  nameProdutc: string;
  price: number;
  description: string;
  pontuation: number;
}

export const CardHighlight = ({
  srcImg,
  altImg,
  nameProdutc,
  price,
  description,
  pontuation,
}: CustomCardHighlight) => {
  return (
    <div>
      <div className="flex flex-col justify-between p-4 bg-white border-0 rounded-3xl min-h-full relative shadow-lg">
        <span className="absolute -top-5 left-[84%] mt-4 ml-4 bg-colorPrimary p-4 rounded-bl-3xl rounded-tr-3xl">
          <img src="/img/heart.png" alt="Ireland Flag" />
        </span>
        <span className="absolute top-12 left-0 ml-4"></span>
        <a href="#">
          <img
            className="p-8 rounded-t-lg w-96 h-96 object-cover"
            src={srcImg}
            alt={altImg}
          />
        </a>
        <div className="flex-grow mb-3">
          <a href="#">
            <h5 className="text-3xl sm:text-3x1 leading-5 sm:leading-6 font-semibold text-black">
              {nameProdutc}
            </h5>
          </a>
          <p className="text-xl tracking-wide text-[#555555] mb-4 mt-4">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold tracking-wide text-black">
            <span className="text-colorPrimary">R$</span> {price},00
          </span>

          <div className="flex items-center space-x-2">
            <FaStar className="text-yellow-400 text-2xl" />
            <span className="font-semibold text-2xl text-[#454545] ">
              {pontuation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
