import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("athena-token"));
    if (session != null) {
      const [role, data] = Object.entries(session)[0];
      navigation(`/dashboard/${role}/${data._id}`);
    } else {
      navigation("/");
    }
  }, [navigation]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
      }}
    >
      <p style={{ margin: "auto " }}>Page Not Found Redirecting . . . </p>
    </div>
  );
};

export default PageNotFound;
