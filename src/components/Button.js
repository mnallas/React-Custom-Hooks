import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Button = () => {
  const userModel = useContext(UserContext);

  return (
    <div>
      <h1>{userModel.name.value}</h1>
    </div>
  );
};

export default Button;
