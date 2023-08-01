import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
export default function FooterLeft() {
    return (
        <>
            <div className="row px-1">
                <div className="col-12 p-0">
                    <p className='footerNavLeft'>
                        ענן מתאמנים מל"י
                    </p>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Link className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                        <p className='mt-1'>זרוע יבשה</p>
                    </Link>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Link className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                        <p className='mt-1'>זרוע יבשה</p>
                    </Link>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Link className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                        <p className='mt-1'>זרוע יבשה</p>
                    </Link>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <Link className="">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/IDF_GOC_Army_Headquarters_From_2020_%28Alternative%29.svg" alt=",sdc" />
                        <p className='mt-1'>זרוע יבשה</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
