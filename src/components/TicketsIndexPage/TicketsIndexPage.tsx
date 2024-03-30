import  { useEffect, useState } from "react";
import BackButton from "../BackButton/BackButton";
import { Ticket } from "../Typing/TicketTyping";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import axios from "axios";
import CustomSpinner from "../Spinner/CustomSpinner";
import moment from "moment";
const TicketsIndexPage = () => {
  const [Tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getTickets = async () => {
    if (!isLoading) setIsLoading(true);
    const { data } = await axios.get<Ticket[]>("/Tickets");
    setIsLoading(false);
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  const NoDataContent = (
    <div className="text-center text-3xl"> no tickets found</div>
  );

  const TicketsContent = (
    <table className=" w-full">
      <thead className="bg-gray-300 p-2">
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">Passenger Name</th>
          <th className="text-center max-md:hidden">Passenger SSN</th>
          <th className="text-center max-md:hidden">From</th>
          <th className="text-center max-md:hidden">To</th>
          <th className="text-center max-md:hidden">Price</th>
          <th className="text-center">Time</th>
          <th className="text-center">Operation</th>
        </tr>
      </thead>
      <tbody className="bg-sky-200">
        {Tickets.map((item) => (
          <tr
            key={item.id}
            className="border-2 border-grey-200 h-12 hover:bg-sky-400 transition-all duration-200"
          >
            <td className="text-center">{item.id}</td>
            <td className="text-center">{item.passengerName}</td>
            <td className="text-center max-md:hidden">{item.passengerSSN}</td>
            <td className="text-center max-md:hidden">{item.from}</td>
            <td className="text-center max-md:hidden">{item.to}</td>
            <td className="text-center max-md:hidden">{item.price}</td>
            <td className="text-center ">
              {moment(item.time).format("YYYY-MM_DD | HH:MM")}
            </td>
            <td className="text-center ">
              <Link
                to={`/tickets/${item.id}`}
                className="bg-green-600 text-lg px-3 py-1 rounded-md mx-1"
              >
                {" "}
                Details
              </Link>
              <Link
                to={`/tickets/edit/${item.id}`}
                className="bg-yellow-600 text-lg px-3 py-1 rounded-md mx-1 max-md:hidden"
              >
                {" "}
                Edit
              </Link>
              <Link
                to={`/tickets/delete/${item.id}`}
                className="bg-red-600 px-3 py-1 text-lg rounded-md mx-1 max-md:hidden"
              >
                {" "}
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  return (
    <>
      <div className="pageGeneralClass">
        <BackButton previousRoute="/" />

        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold my-8"> Ticket List</h3>
          <Link to="/tickets/create">
            <AiOutlinePlusSquare className="text-4xl text-blue-600 " />
          </Link>
        </div>

        {isLoading ? (
          <CustomSpinner />
        ) : !Tickets.length ? (
          NoDataContent
        ) : (
          TicketsContent
        )}
      </div>
    </>
  );
};

export default TicketsIndexPage;
