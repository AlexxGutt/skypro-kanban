import { useParams } from "react-router-dom";
import PopBrowse from "../components/PopUp/PopBrowse";

function CardPage({ tasks }) {
  const { id } = useParams();

  return <PopBrowse cardId={id} tasks={tasks} />;
}

export default CardPage;
