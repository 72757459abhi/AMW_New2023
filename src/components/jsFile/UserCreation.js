import React, { useState } from "react";
import "../cssFile/UserCreation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const [showPrev, setShowPrev] = useState(false);
  const url = process.env.REACT_APP_SERVICE_ID;
  const nav = useNavigate();
  console.log("in ", props);

  const [payloadData, setPayloadData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    address: "",
    city: "",
    admin: false,
  });
  console.log(payloadData, "payloadData");
  const onChangeFun = (e, type) => {
    let obj = { ...payloadData };

    if (type === "username") {
      obj["username"] = e.target.value;
    } else if (type === "email") {
      obj["email"] = e.target.value;
    } else if (type === "password") {
      obj["password"] = e.target.value;
    } else if (type === "phonenumber") {
      obj["phonenumber"] = e.target.value;
    } else if (type === "address") {
      obj["address"] = e.target.value;
    } else if (type === "city") {
      obj["city"] = e.target.value;
    }  else if (type === "admin") {
      obj["admin"] = e.target.value;
    }
    setPayloadData(obj);
  };
  const CreateAccountFun = (e) => {
    console.log(payloadData);
    console.log(payloadData);
    e.preventDefault();

    let formData = new FormData();
    formData.append("admin", payloadData["admin"]);
    formData.append("address", payloadData["address"]);
    formData.append("city", payloadData["city"]);
    formData.append("username", payloadData["username"]);
    formData.append("password", payloadData["password"]);
    formData.append("phonenumber", payloadData["phonenumber"]);
    formData.append("email", payloadData["email"]);
    console.log(formData);
    const headers = {
      "Content-Type": "form-data",
    };
    axios.post(url + "upload/data", formData, headers).then((res) => {
      console.log(res);
    });
    console.log(payloadData, "Payload Data");
  };

  return (
    <>
        <>
          <main className={"profile"}>
            <main className={showPrev ? "auth" : "initialauth"}>
              <section>
                <form>
                  <div className={"control"}>
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      id="username"
                      onChange={(e) => {
                        onChangeFun(e, "username");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => {
                        onChangeFun(e, "email");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => {
                        onChangeFun(e, "password");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input
                      type="number"
                      id="phonenumber"
                      onChange={(e) => {
                        onChangeFun(e, "phonenumber");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      onChange={(e) => {
                        onChangeFun(e, "address");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      onChange={(e) => {
                        onChangeFun(e, "city");
                      }}
                    />
                  </div>
                  <div className={"control"}>
                    <label htmlFor="admin">Admin</label>
                    <input
                      type="number"
                      id="admin"
                      onChange={(e) => {
                        onChangeFun(e, "admin");
                      }}
                    />
                  </div>
                  <button
                    className={"btn"}
                    onClick={(e) => {
                      CreateAccountFun(e);
                    }}
                  >
                    {" "}
                    Create account {" "}
                  </button>
                </form>
              </section>
            </main>
          </main>
        </>
      
    </>
  );
};

export default Contact;
