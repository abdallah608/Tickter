import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import axios from "axios";
import { Ticket } from "../Typing/TicketTyping";

const TicketDeletePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteTicketHandler = async () => {
    setIsLoading(true);
    try {
      await axios.delete<Ticket>(`/Tickets/delete/${id}`);
      setIsLoading(false);
      navigate("/tickets");
    } catch (error) {
      setIsLoading(false);
      navigate("/404");
    }
  };

  return (
    <div className="pageGeneralClass">
      <BackButton previousRoute="/tickets" />
      <h2 className="text-2xl sm:text-4xl font-bold my-8">
        Delete your ticket
      </h2>
      <div
        className={`flex flex-col items-center border-2 border-red-500 w-[600px] max-w-full mx-auto mt-8 p-2 rounded ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        <p className="font-bold mb-7 text-2xl">
          are you sure you want to delete this ticket?
        </p>

        <div className="flex justify-between items-center">
          <button
            className="bg-red-700 text-white px-4 py-2 mx-8 my-2 rounded-lg"
            onClick={deleteTicketHandler}
          >
            Yes!
          </button>
          <button
            type="button"
            className="bg-yellow-600 text-white px-4 py-2 mx-8 my-2 rounded-lg"
            onClick={() => navigate("/tickets")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDeletePage;
