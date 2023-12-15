export const Button = ({ title, active }) => {
  return (
    <button
      className={`${
        active ? "bg-red" : "bg-darkbg"
      } w-full h-[60px] text-white rounded-full hover:bg-red`}
    >
      {title}
    </button>
  );
};
