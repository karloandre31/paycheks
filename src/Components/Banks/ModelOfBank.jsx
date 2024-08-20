import { useParams } from "react-router";
import FormCreateBank from "../FormCreateBank";
import FormForChecks from "./FormForChecks";

function ModelOfBank({bankName}) {
  const {bank} = useParams();
  console.log(bank);
  
  return (
    <div className="container">
    <FormForChecks/>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ModelOfBank;
