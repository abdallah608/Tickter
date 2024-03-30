
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  previousRoute: string;
}

const BackButton = ({ previousRoute = "/" }: Props) => {
  return (
    <div className="flex">
      <Link
        to={previousRoute}
        className="bg-sky-700 text-white rounded-xl w-fit py-2 px-4"
      >
        <BsArrowLeft className="text-3xl" />
      </Link>
    </div>
  );
};

export default BackButton;
