export const BubbleReverse = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-white p-4 rounded-3xl shadow-lg max-w-sm">
        <p className="text-colorPrimary font-semibold text-xl">
          Nossa melhor Chef 😁
        </p>
        <div className="absolute -top-3 transform -translate-x-1/4 w-3 h-6 bg-white rotate-180 shadow-lg"></div>
      </div>
    </div>
  );
};
