import React, { useState } from "react";
import "../assets/css/AddConfessionPost.css";
import { FaLock } from "react-icons/fa";
import {
  database as db,
  set,
  ref,
  onValue,
  database,
} from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toast";
import { deleteData } from "../utils/database";

const AddConfessionPost = () => {
  const [text, setText] = useState("");

  const addConfession = () => {
    // query
    if (text) {
      // add to db
      set(ref(db, "confessions/" + uuidv4()), {
        note: text,
        createdAt: Date.now(),
      }).then((err) => {
        if (!err) {
          toast.success("Successfully Added");
          setText("");

          // check data
          deleteData();
        } else toast.error("Couldnot add Confession Note.");
      });
    }
  };

  return (
    <center>
      {" "}
      <div className="add-confession-post">
        <textarea
          rows="8"
          cols="80"
          placeholder="Write your Confession here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button className="confess-btn" onClick={() => addConfession()}>
          Confess
        </button>
      </div>
      <FaLock size="10" />
      <small style={{ fontSize: "12px", marginLeft: "5px" }}>
        Confessd Note will remain for 24 hrs.
      </small>
      <ToastContainer delay={2500} />
    </center>
  );
};

export default AddConfessionPost;
