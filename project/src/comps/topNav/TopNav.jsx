import React from "react";
import "./topNav.css";
import Zroha from "../../imagesMaly/zrohaHayabasha.png";
import Hativa500 from '../../imagesMaly/hativa500.png'
import logo from "../../imagesMaly/alpha.png"


export default function TopNav() {
  return (
    <>
    <div>
      <div className="row">
        <div className="col-4 d-flex mt-3">
          <img className="logos" src={Zroha} alt="" />
          <img className="logos" src={Hativa500} alt="" />
          <div>
            <h1 className="mt-2">מל"י דיגיטלי</h1>
            <h3 className="d-flex align-items-center justify-content-center">
              יולי 2023
            </h3>
          </div>
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
    <div className="container-alpha-logo">
       <img className="alpha-logo" src={logo} alt="" />
    </div>
    </>
  );
}
