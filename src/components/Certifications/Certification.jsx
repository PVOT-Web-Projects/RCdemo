"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import "./Certification.scss";
import Image from 'next/image';
import intertek from '@/images/certi1.png'
import iso from '@/images/isomarkLogo.png'
import isiMarkLogo from "@/images/isiMarkLogo.png"
import ceLogo from "@/images/ceLogo.png"
import fscLogo from "@/images/fscLogo.png"
import enLogo from "@/images/enLogo.png"
import nemaLogo from "@/images/nema-Logo.png"
import BisLogo from "@/images/bismarkLogo.png"
import IgbcLogo from "@/images/igbcLogo.svg"
import GreenlandLogo from "@/images/greenlandLogo.png"
import IndianPowerLogo from "@/images/indianpowerLogo.png"
import {motion} from "framer-motion"
const Certification = () => {
  return (
    <>
     <div className="certification_main" style={{marginTop:"140px"}}>
     <motion.div
     className="certification_heading"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS
        </motion.div>
     {/* <h2 className='certification_heading'>CERTIFICATIONS</h2> */}
        <Marquee speed={50} loop={0}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={ceLogo} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={isiMarkLogo} alt="certificationimg" />
            <Image className='logocertificate' src={fscLogo} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={enLogo} alt="certificationimg" />
            <Image className='logocertificate' src={nemaLogo} alt="certificationimg" />
            <Image className='logocertificate' src={BisLogo} alt="certificationimg" />
            <Image className='logocertificate' src={IgbcLogo} alt="certificationimg" />
            <Image className='logocertificate' src={GreenlandLogo} alt="certificationimg" />
            <Image className='logocertificate' src={IndianPowerLogo} alt="certificationimg" />
          </div>
        </Marquee>
      </div>
      
    </>
  )
}

export default Certification
