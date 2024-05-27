import React, { useEffect, useState } from "react";

//import Api server
import Axios from "../api/contacts";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
//Title Page
import TitlePage from "../TitlePages/TitlePage";

function Home() {
  const [Data, setData] =useState(null);
  const [UpDate, setUpDate] =useState(false);


  const DeleteHandeler = (id) => {

    const ConfirmDelete = window.confirm("Do you want to delete?");
    if (ConfirmDelete) {
      Axios.delete(`users/${id}`)
        .then(() => {
          toast.success("User Deleted");
          setUpDate(!UpDate)
        })
        .catch(() => {
          toast.success("Not Deleted");
        });
    }
  };

  useEffect(() => {
    const GetData = async () => {
      try {
        const respons = await Axios.get("users");
        setData(respons.data);
      } catch (err) {
        toast.error("Server connection error");
      }
    };

    GetData();
  }, [UpDate]);



  

  if (!Data) 
  {
    return (
      <div className="Home">
        <TitlePage title="Loading...." />
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="Home">
      <TitlePage title="Users List" />
      <h1>List Of Users</h1>
      <div className="baner section container">

        <div className="Add-User">
          <Link to="/Create" className="btn-R">
            Add +
          </Link>
        </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {Data?Data.map((D, i) => {
                return (
                  <tr key={i}>
                    <td>{D.id}</td>
                    <td>{D.name}</td>
                    <td>{D.email}</td>
                    <td>{D.phone}</td>
                    <td>
                      <Link to={`/Read/${D.id}`} className="btn-R">
                        Read
                      </Link>
                      <Link to={`/Update/${D.id}`} className="btn">
                        Edit
                      </Link>
                      <button className="btn-D"onClick={() => DeleteHandeler(D.id)}>Delete</button>
                    </td>
                  </tr>
                );
              }):null}
            </tbody>
          </table>

      </div>
    </div>
  );
}

export default Home;
