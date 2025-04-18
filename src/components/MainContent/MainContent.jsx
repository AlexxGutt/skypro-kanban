import Column from "../Column/Column";
import { data } from "../../data";
function MainContent() {
  return (
    <>
      {data.map((columnData) => (
        <Column column={columnData} key={columnData.id} />
      ))}
    </>
  );
}
export default MainContent;
