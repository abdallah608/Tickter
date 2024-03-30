import BackButton from "../BackButton/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "./EditForm";

const TicketsEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onSuccessHandeler = () => {
    navigate("/tickets");
  };
  const onFailureHandeler = () => {
    navigate("/404");
  };
  console.log(id);

  return (
    <div className="pageGeneralClass">
      <BackButton previousRoute="/tickets" />
      <h2 className="text-2xl sm:text-4xl font-bold my-8"> Edit your ticket</h2>
      <EditForm
        onSuccessHandeler={onSuccessHandeler}
        onFailureHandeler={onFailureHandeler}
        id={id}
      />
    </div>
  );
};

export default TicketsEditPage;
