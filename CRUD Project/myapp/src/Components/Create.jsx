//import Hooks
import Axios from "../api/contacts";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import react icon
import { FiAlertCircle } from "react-icons/fi";
//share logic
import ValidityHoc from "./ValidityInput/Validity.Hoc";
//Title Page
import TitlePage from "../TitlePages/TitlePage";

function Create({
  Values,
  NameErr,
  EmailErr,
  PhoneErr,
  ValidationHandeler,
  InputProps,
}) {
  const Navigate = useNavigate();

  //Actions

  const PostHandeler = (e) => {
    e.preventDefault();

    !NameErr
      ? toast.error("Enter your name correctly")
      : !EmailErr
      ? toast.error("Enter your email correctly")
      : !PhoneErr
      ? toast.error("Enter your phone correctly")
      : Axios.post("users", Values)
          .then((Respons) => {
            toast.success("Added User");
            Navigate("/");
            console.log(Respons);
          })
          .catch(() => toast.error("Err 404"));
  };

  return (
    <div className="Create">
      <TitlePage title="Add a User" />
      <div className="box-Enter-Info">
        <h1>Add a User</h1>
        <form onSubmit={PostHandeler}>
          {InputProps.map((Prop) => {
            return (
              <div className="form-Contorol" key={Prop.name}>
                <label htmlFor={Prop.name}>{Prop.name}</label>
                <input
                  type="text"
                  placeholder={Prop.placeholder}
                  value={Prop.Values}
                  name={Prop.name}
                  onChange={ValidationHandeler}
                />

                <div className="Note">
                  <FiAlertCircle className={Prop.StateErr ? "icon Valid-p" : "icon"}/>
                  <p className={Prop.StateErr ? "Valid-p" : null}>
                    {Prop.NoteText}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="btn-link">
            <button>Submit</button>
            <Link to="/" style={{ color: "wheat" }}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ValidityHoc(Create);
