import { useNavigate } from "react-router";
import signOutEmail from "../JS/Firesbase/Login/sign-out";
function SignOut({ focus, classNames }) {
  const navigate = useNavigate();

  return (
    <div>
      <a
        href="#"
        className={classNames(
          focus ? "bg-gray-100" : "",
          "block px-4 py-2 text-sm text-gray-700"
        )}
        onClick={() => {
          signOutEmail(), navigate("/");
        }}
      >
        Sign out
      </a>
    </div>
  );
}

export default SignOut;
