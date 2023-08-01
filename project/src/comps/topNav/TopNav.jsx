import React from "react";
import "./topNav.css";
import Zroha from "../../imagesMaly/zrohaHayabasha.png";
import Hativa500 from '../../imagesMaly/hativa500.png'
import Mishan from "../../imagesMaly/mishan.png";

export default function TopNav() {
  return (
    <div>
      <div className="row">
        <div className="col-4 d-flex mt-3">
          <img className="logos" src={Zroha} alt="" />
          <img className="logos" src={Hativa500} alt="" />
          <span>
            <h1 className="mt-2">מל"י דיגיטלי</h1>
            <h3 className="d-flex align-items-center justify-content-center">
              יולי 2023
            </h3>
          </span>
        </div>
        <div className="col-8 leftNav d-flex justify-content-center align-items-center">
            <img className="logos" src={Zroha} alt="" />
            <img className="logos" src={Zroha} alt="" />
            <img className="logos" src={Zroha} alt="" />
            <img className="logos" src={Zroha} alt="" />
            <img className="logos" src={Hativa500} alt="" />
        </div>
      </div>
    </div>
  );
}
