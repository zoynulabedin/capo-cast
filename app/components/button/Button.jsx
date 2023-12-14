export const Button = ({ title, active }) => {
  return (
    <button
      className={`${
        active ? "bg-red" : "bg-darkbg"
      } w-[100px] h-[40px] text-white rounded-full hover:bg-red`}
    >
      {title}
    </button>
  );
};
