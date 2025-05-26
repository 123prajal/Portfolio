import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram, FaNodeJs } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
  <h2 className="text-base uppercase font-titleFont mb-4">
    Find me in
  </h2>
  <div className="flex gap-4">
    <a 
      href="https://www.facebook.com/share/1CMzxQ956H/?mibextid=wwXIfr" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bannerIcon"
      aria-label="Facebook profile"
    >
      <FaFacebookF />
    </a>
    <a 
      href="https://www.instagram.com/pra_j_wal_11_26?igsh=MXIydjV0dWxienJp&utm_source=qr" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bannerIcon"
      aria-label="Instagram profile"
    >
      <FaInstagram />
    </a>
    <a 
      href="https://www.linkedin.com/in/prajal-khadka-242263312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bannerIcon"
      aria-label="LinkedIn profile"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media