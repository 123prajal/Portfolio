import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Prajwal Khadka</h3>
        <p className="text-lg font-normal text-gray-400">
          Backend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Skilled Backend Developer proficient in Node.js, experienced in building robust 
        APIs and scalable server-side applications with a strong focus on performance, security, and maintainability.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+977 9863979269</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">khadkaprajal1@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a 
                  href="https://www.facebook.com/share/1CMzxQ956H/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bannerIcon"
                  aria-label="Facebook profile"
                >
                  <FaFacebookF />
                </a>
          </span>
          <span className="bannerIcon">
           <a 
                 href="https://www.instagram.com/pra_j_wal_11_26?igsh=MXIydjV0dWxienJp&utm_source=qr" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bannerIcon"
                 aria-label="Instagram profile"
               >
                 <FaInstagram />
               </a>
          </span>
          <span className="bannerIcon">
           <a 
                 href="https://www.linkedin.com/in/prajal-khadka-242263312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bannerIcon"
                 aria-label="LinkedIn profile"
               >
                 <FaLinkedinIn />
               </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft