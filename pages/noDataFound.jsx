import React from "react";
import Menu from "./Header/menu";

const NoDataFound = () => {
  return (
    <>
      <div className="container">
        <div className="card nodata-card ">
          <div className="card-body nodata-card-body">
            <img src = "/assets/img/noData1.jpg"></img>
            <p className="text-center nodata-text">Oh Crap! <br></br> You've got nothing :(</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoDataFound;
