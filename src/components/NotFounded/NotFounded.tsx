import { Helmet } from "react-helmet";
const NotFounded = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      <div className="pageGeneralClass pb-20 sm:pb-36  mt-8 sm:mt-16 flex justify-center ">
        <div className=" text-center mt-20">
          <h3 className="relative font-bold text-2xl sm:text-4xl">
            {" "}
            Oops page not found!!
            <div className=" absolute opacity-60 inset-0 w-full h-8 sm:h-16 bg-gradient-to-t from-red-300 to-red-900 blur-2xl rounded-full"></div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default NotFounded;
