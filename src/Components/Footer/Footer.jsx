import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram ,faTiktok} from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    const phoneNumber = "+972522851212"; 
const whatsappWebLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
  return (
    <div>
    <div className='footer '>
        <div className='row'>
            <div className='col-lg-7  mb-5 mb-lg-0'>
                <h4 className='text-uppercase mb-4'>الموقع</h4>
                 <p className='lead mb-0'> باقه الغربيه بجانب معصره السلام الحديثه</p>
               </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
  <h4 className="text-uppercase mb-4">مواقع التواصل</h4>
  <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/profile.php?id=61572958211315">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="btn btn-outline-light btn-social mx-1" href={whatsappWebLink} >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/abdalrhman_.2025?igsh=dzBzc3g3bTZpbmw4">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a className="btn btn-outline-light btn-social mx-1" href="https://www.tiktok.com/@abdalrhman_.2025?_t=ZS-8uBjPgBk2Da&_r=1">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
</div>

              
        </div>
       
        
      
   
    </div>

<div className="copyright py-4 text-center text-white">
<div className="container"><small>Copyright © Roaa Sabbarini</small></div>
</div>
</div>
  )
}