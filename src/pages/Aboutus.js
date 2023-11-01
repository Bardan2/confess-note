import React from "react";
import useTitle from "../hook/useTitle";

const Aboutus = () => {
  useTitle("About us | Confess Note");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h3>About us</h3>
      <p>
        Confess Note is a public forum; where you can confess your ides or
        opinions or thoughts about anything. And, all the confessions made will
        be deleted after 24 hrs.
      </p>
    </div>
  );
};

export default Aboutus;
