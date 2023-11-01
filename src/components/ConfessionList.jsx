import React, { useEffect, useState } from "react";
import "../assets/css/ConfessionList.css";
import { database, set, ref, onValue } from "../config/firebase";
import Moment from "react-moment";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { deleteData } from "../utils/database";

const ConfessionList = () => {
  const [confessionList, setConfessionList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    deleteData();
    onValue(ref(database, "confessions"), (snapshot) => {
      let _data = snapshot.val();
      let _confessionList = [];

      for (let key in _data) {
        _confessionList.push(_data[key]);
      }

      setConfessionList(_confessionList);
      setisLoading(false);
    });
  }, []);

  return (
    <center>
      <div className="confessionList">
        {isLoading ? (
          <div style={{ width: "72%" }}>
            <ShimmerSimpleGallery
              card
              imageHeight={300}
              row={2}
              col={2}
              caption
            />
          </div>
        ) : confessionList ? (
          confessionList.map((confession, index) => {
            let date = new Date(confession.createdAt);

            return (
              <div key={index} className="confession-card">
                <div>{`${date.getFullYear()} / ${
                  monthList[date.getMonth()]
                } / ${date.getDay()}`}</div>
                <br />
                {confession.note}

                <div className="time-ago">
                  <Moment fromNow>{confession.createdAt}</Moment>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Confession Notes</h3>
        )}
      </div>
    </center>
  );
};

export default ConfessionList;
