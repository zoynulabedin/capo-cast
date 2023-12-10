export const Button = ({ title, active }) => {
  return (
    <button
      className={`${
        active ? "bg-red" : "bg-darkbg"
      } w-[145px] h-[56px] text-white rounded-full hover:bg-red`}
    >
      {title}
    </button>
  );
};
