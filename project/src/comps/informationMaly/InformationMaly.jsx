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
          <div className="col-2 contantInfo">
            <div>מבנה מל"י</div>
          </div>
          <div className="col-2 contantInfo">
            <div>גרף מל"י</div>
          </div>
          <div className="col-2 contantInfo">
            <div>בטיחות באימונים</div>
          </div>
          <div className="col-2 contantInfo">
            <div>עזרי אימון</div>
          </div>
          <div className="col-2 contantInfo">
            <div>תראו"גים</div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-2 contantInfo">
            <div>שטחי אימונים</div>
          </div>
          <div className="col-2 contantInfo">
            <div>"שביל הזהב"</div>
          </div>
          <div className="col-2 contantInfo">
            <div>רב מערכתי</div>
          </div>
          <div className="col-2 contantInfo">
            <div>בקרת כניסה</div>
          </div>
          <div className="col-2 contantInfo">
            <div>תפיסות וספרות</div>
          </div>
        </div>
      </div>
    </div>
  );
}
