export const Marker = ({ number }) => {
  return (
    <div className="w-8 h-8 bg-purple-500 rounded-full relative flex items-center justify-center text-white font-bold text-sm">
      <span className="z-10">{number}</span>
      <div className="absolute bottom-0  left-6 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rotate-45 origin-top-left"></div>
    </div>
  );
};
