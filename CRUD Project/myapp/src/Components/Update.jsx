import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../api/contacts";
//share logic
import ValidityHoc from "./ValidityInput/Validity.Hoc";
//import react icon
import { FiAlertCircle } from "react-icons/fi";
//Title Page
import TitlePage from "../TitlePages/TitlePage";

function Update({
  setValues,
  Values,
  NameErr,
  EmailErr,
  PhoneErr,
  ValidationHandeler,
  InputProps,
}) {
  const { id } = useParams();
  const Navigate = useNavigate();

  const EditHandeler = (e) => {
    e.preventDefault();
    !NameErr
      ? toast.error("Enter your name correctly")
      : !EmailErr
      ? toast.error("Enter your email correctly")
      : !PhoneErr
      ? toast.error("Enter your phone correctly")
      : Axios.put(`users/${id}`, Values)
          .then(() => {
            toast.success("The user was edited");
            Navigate("/");
          })
          .catch(() => toast.error("Err 404"));
  };

  useEffect(() => {
    const GetData = async () => {
      try {
        const respons = await Axios.get(`users/${id}`);
        setValues(respons.data);
      } catch (err) {
        toast.error("Server connection error");
      }
    };
    GetData();
  }, []);

  return (
    <div className="Update Create">
      <TitlePage title="Edit a User" />
      <div className="box-Enter-Info ">
        <h2>Edit a User</h2>
        <form onSubmit={EditHandeler}>
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
                  <FiAlertCircle
                    className={Prop.StateErr ? "icon Valid-p" : "icon"}
                  />
                  <p className={Prop.StateErr ? "Valid-p" : null}>
                    {Prop.NoteText}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="btn-link">
            <button>Edit</button>
            <Link to="/" style={{ color: "wheat" }}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ValidityHoc(Update);
