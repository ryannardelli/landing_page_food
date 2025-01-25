interface CustomCardBestSeller {
  img: string;
  altImg: string;
  amountOrder: number;
}

export const CardBestSeller = ({
  img,
  altImg,
  amountOrder,
}: CustomCardBestSeller) => {
  return (
    <div className="p-5 border-0 rounded-3xl text-center max-w-sm shadow-lg">
      <img className="w-24 h-24 rounded-full mx-auto" src={img} alt={altImg} />
      <div className="text-2xl font-semibold text-[#1E1E1E] mt-5">
        <p>Prato Principal</p>
      </div>

      <p className="mt-2 text-xl font-medium text-[#555555]">
        ({amountOrder} pedidos)
      </p>
    </div>
  );
};
