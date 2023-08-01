import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterRight() {
    return (
        <>
            <div className="row" style={{ backgroundColor: "rgb(59, 57, 60)" }}>
                <Link className="col-12 p-0">
                    <p className='footerNavRight'>
                        ענן  מל"י
                    </p>
                </Link>

                <div className="d-flex justify-content-center mt-3">
                    <div className="col-2 d-flex justify-content-center">
                        <Link className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                            <p className='mt-1'>זרוע יבשה</p>
                        </Link>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <Link className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                            <p className='mt-1'>זרוע יבשה</p>
                        </Link>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <Link className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                            <p className='mt-1'>זרוע יבשה</p>
                        </Link>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <Link className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                            <p className='mt-1'>זרוע יבשה</p>
                        </Link>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <Link className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                            <p className='mt-1'>זרוע יבשה</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>)
}
