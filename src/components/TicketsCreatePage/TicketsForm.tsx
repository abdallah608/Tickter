import { useState } from "react";
import { useForm } from "react-hook-form";
import { TicketCreated } from "../Typing/TicketTyping";
import CustomSpinner from "../Spinner/CustomSpinner";
import "./ticket.css";
import axios from "axios";
import { Helmet } from "react-helmet";
interface Props {
  onSuccessHandeler: () => void;
}

const TicketsForm = ({ onSuccessHandeler }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<TicketCreated>({});
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const onSubmit = async (data: TicketCreated) => {
    console.log(data);
    try {
      setIsLoading(true);
      await axios.post("/Tickets/create", data);
      onSuccessHandeler();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ticket Form</title>
      </Helmet>
      {isLoading && <CustomSpinner />}
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={` border-2 border-gray-200 w-[400px] max-w-full mx-auto mt-8 p-2 rounded-lg ${
            isLoading ? "blur-xl" : ""
          }`}
          noValidate
        >
          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">Ticket Time</label>
            <input
              type="datetime-local"
              {...register("time", {
                required: "ticket time is required",
                valueAsDate: true,
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.time?.message}
            </span>
          </div>

          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">
              Passenger Name
            </label>
            <input
              type="text"
              autoComplete="off"
              {...register("passengerName", {
                required: "Passenger Name is required",
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.passengerName?.message}
            </span>
          </div>

          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">
              Passenger SSN
            </label>
            <input
              type="number"
              autoComplete="off"
              {...register("passengerSSN", {
                required: "Passenger SSN is required",
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.passengerSSN?.message}
            </span>
          </div>

          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">
              Source(Form)
            </label>
            <input
              type="text"
              autoComplete="off"
              {...register("from", {
                required: "Source(Form) is required",
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.from?.message}
            </span>
          </div>

          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">
              Destination(To)
            </label>
            <input
              type="text"
              autoComplete="off"
              {...register("to", {
                required: "Destination(To) is required",
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.to?.message}
            </span>
          </div>

          <div className="m-4 ">
            <label className="text-sky-700  pb-2 font-bold ">
              Ticket Price
            </label>
            <input
              type="number"
              autoComplete="off"
              {...register("price", {
                required: "Ticket Price is required",
              })}
            />
            <span className="bg-red-200 text-red-600">
              {errors?.price?.message}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <button className="bg-green-700 text-white px-4 py-2 mx-8 my-2 rounded-lg">
              Submit
            </button>
            <button
              type="button"
              className="bg-yellow-600 text-white px-4 py-2 mx-8 my-2 rounded-lg"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketsForm;
