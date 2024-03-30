import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Ticket } from "../Typing/TicketTyping";
import BackButton from "../BackButton/BackButton";
import CustomSpinner from "../Spinner/CustomSpinner";
import { Helmet } from "react-helmet";

const TicketDetails = () => {
  const { id } = useParams();
  const [tickets, setTickets] = useState<Ticket>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const navigate = useNavigate();

  const getTicketId = async () => {
    if (!isLoading) setIsLoading(true);
    try {
      const { data } = await axios.get<Ticket>(`/Tickets/${id}`);
      setIsLoading(false);
      setTickets(data);
    } catch (error) {
      setIsLoading(false);
      navigate("/404");
    }
  };

  useEffect(() => {
    getTicketId();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Derails Page</title>
      </Helmet>
      <div className="pageGeneralClass">
        <BackButton previousRoute="/tickets" />
        {isLoading ? (
          <CustomSpinner />
        ) : (
          <>
            <h3 className="text-2xl font-bold my-8 max-w-fit bg-neutral-700 text-white">
              {" "}
              Ticket Details For {tickets && tickets.passengerName}
            </h3>
            <div className="flex flex-col gap-y-5">
              <div>
                <span className="text-sky-900 font-bold mr-4">
                  Ticket ID :{" "}
                </span>
                <span className="text-lg">{tickets?.id}</span>
              </div>
              <div>
                <span className="text-sky-900 font-bold mr-4">
                  Passenger Name :{" "}
                </span>
                <span className="text-lg">{tickets?.passengerName}</span>
              </div>
              <div>
                <span className="text-sky-900 font-bold mr-4">
                  Passenger SSN :{" "}
                </span>
                <span className="text-lg">{tickets?.passengerSSN}</span>
              </div>
              <div className="flex ">
                <div>
                  <span className="text-sky-900 font-bold mr-4">From : </span>
                  <span className="text-lg">{tickets?.from}</span>
                </div>
                <div className=" ml-10">
                  <span className="text-sky-900 font-bold mr-4">
                    Destination(To) :{" "}
                  </span>
                  <span className="text-lg">{tickets?.to}</span>
                </div>
              </div>
              <div>
                <span className="text-sky-900 font-bold mr-4">
                  Ticket Date :{" "}
                </span>
                <span className="text-lg">{tickets?.time}</span>
              </div>
              <div>
                <span className="text-sky-900 font-bold mr-4">
                  Ticket Price :{" "}
                </span>
                <span className="text-lg">{tickets?.price}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TicketDetails;
