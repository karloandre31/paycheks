import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useBankStore } from "../JS/database/store/zustand";

function CreateLinksToBanks() {
  const { banks, fetchBanksFromAPI } = useBankStore();

  console.log(banks);
  useEffect(() => {
    if (banks.length === 0) {
      fetchBanksFromAPI();
    }
  }, [fetchBanksFromAPI]);

  return (
    <div className="flex justify-start">
      {banks.map(({ bank, id }) => {
        return (
          <div key={id} className="pr-3">
            <Link to={`/${bank}`} className="no-underline">
              {bank}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CreateLinksToBanks;

