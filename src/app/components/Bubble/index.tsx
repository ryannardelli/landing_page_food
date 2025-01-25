export const Bubble = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-white p-4 rounded-2xl shadow-lg max-w-sm">
        <p className="text-colorPrimary font-semibold text-xl">
          Hmm... Saboroso! 😋
        </p>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-lg"></div>
      </div>
    </div>
  );
};
