import React from "react";
import "./information.css";
import { Link } from "react-router-dom";

export default function InformationMaly() {
  return (
    <div className="row content">
      <div className="col-4">
        <div className="d-flex justify-content-center align-items-center bg-secondary m-2">
          <h4 className="text-info"> ייעוד מל"י</h4>
        </div>
        <div className=" m-2  bg-secondary">
          <h5 className="d-flex justify-content-center align-items-center h-25">
            {" "}
            הכנת כוחות היבשה באופן חיילי ורב זרועי למלחמה
          </h5>
          <span className="contantImg  d-flex justify-content-center">
            <img src="https://vanl.ink/F6RCK" alt="" />
          </span>
        </div>
      </div>
      <div className="col-8 h-100 mt-5">
        <div className="row justify-content-center mb-1">
          <span className="col-2">
            {" "}
            <Link to={"/maliStructer"}>
              <div className=" contantInfo">
                <div>מבנה מל"י</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/maliGraph"}>
              <div className=" contantInfo">
                <div>גרף מל"י</div>
              </div>
            </Link>
          </span>
          <span className="col-2">
            {" "}
            <Link to={"/securty"}>
              <div className=" contantInfo">
                <div>בטיחות באימונים</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/traningStaff"}>
              <div className=" contantInfo">
                <div>עזרי אימון</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/a"}>
              <div className=" contantInfo">
                <div>תראו"גים</div>
              </div>
            </Link>
          </span>
        </div>
        <div className="row justify-content-center ">
          <span className="col-2">
            {" "}
            <Link to={"/traningArea"}>
              <div className=" contantInfo">
                <div>שטחי אימונים</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/goldenRoad"}>
              <div className=" contantInfo">
                <div>"שביל הזהב"</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/multiSystem"}>
              <div className=" contantInfo">
                <div>רב מערכתי</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/entrence"}>
              <div className=" contantInfo">
                <div>בקרת כניסה</div>
              </div>
            </Link>
          </span>

          <span className="col-2">
            {" "}
            <Link to={"/digits"}>
              <div className=" contantInfo">
                <div>תפיסות וספרות</div>
              </div>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
