import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="pageGeneralClass flex flex-col justify-center items-center gap-y-6 sm:gap-y-14 ">
      <div className="text-center mt-20">
        <h1 className=" relative text-2xl sm:text-4xl font-bold ">
          {" "}
          welcome to Tackier
          <div className="absolute inset-0 w-full h-8 sm:h-16 rounded-full bg-gradient-to-t from-purple-500 to-blue-300 blur-md opacity-30 "></div>
        </h1>
      </div>
      <Link
        to="/tickets"
        className="bg-slate-800 text-white rounded-lg py-4 px-6"
      >
        Tickets
      </Link>
    </div>
  );
};

export default HomePage;
