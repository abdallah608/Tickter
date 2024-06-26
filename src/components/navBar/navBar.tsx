
import { AiOutlineHome } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";
import { Link } from "react-router-dom";

const meunItems = [
  { id: 1, label: "Home", route: "/", icon: <AiOutlineHome /> },
  { id: 2, label: "Tickets", route: "/tickets", icon: <MdAirplaneTicket /> },
];

const navBar = () => {
  return (
    <div className="bg-sky-600 flex justify-between  items-center p-2 md:p-4 lg:px-8 lg:py-4 text-2xl ">
      <div>
        <Link to="/"> Ticketier</Link>
      </div>
      <div className="flex  items-center gap-x-4">
        {meunItems.map((item) => (
          <Link key={item.id} to={item.route}>
            <span className="hidden md:block">{item.label}</span>
            <span className="block md:hidden text-3xl">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default navBar;
