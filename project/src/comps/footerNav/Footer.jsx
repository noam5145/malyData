import React from 'react'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'

export default function Footer() {
  return (
    <>
    <div className="row">
    <div className="col-6">
    <FooterRight/> 
    </div>
    <div className="col-6">
    <FooterLeft/> 

    </div>
    </div>
    </>
  )
}
