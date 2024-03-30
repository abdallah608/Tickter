
const CustomSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="relative h-20 w-20 ">
        <span className="absolute bg-sky-700 w-full h-full rounded-full animate-ping blur-md"></span>
        <span className="relative h-20 w-20 bg-sky-600 blur-xl  rounded-full inline-flex "></span>
      </span>
    </div>
  );
};

export default CustomSpinner;
