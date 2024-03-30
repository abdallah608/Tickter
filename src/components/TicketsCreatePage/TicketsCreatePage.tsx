import { Helmet } from "react-helmet";
import BackButton from "../BackButton/BackButton";
import TicketsForm from "./TicketsForm";
import { useNavigate } from "react-router-dom";

const TicketsCreatePage = () => {
  const navigate = useNavigate();

  const onSuccessHandeler = () => {
    navigate("/tickets");
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ticket Page</title>
      </Helmet>
      <div className="pageGeneralClass">
        <BackButton previousRoute="/tickets" />
        <h2 className="text-2xl sm:text-4xl font-bold my-8">
          Book your ticket
        </h2>
        <TicketsForm onSuccessHandeler={onSuccessHandeler} />
      </div>
    </>
  );
};

export default TicketsCreatePage;
