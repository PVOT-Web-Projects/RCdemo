import "./contactUsHear.scss";
import Link from "next/link";
const ContactUsHear = () => {
  return (
    <div className="ContactUsmainBanner">
      <div className="ContactUsHearBanner">
        <p className="ContactUsHearText">Contact Us</p>
        <div>
          <p className="ContactUsHearTextInner">We’d love to hear from you</p>
        </div>
        <div>
          <p className="ContactUsHearTextOne">
            Our friendly team is always here to chat.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="ContactUsEmailFlex">
        <div className="ContactUsEmail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
          </svg>
          <p className="BoldTextInner">Email</p>
          <p>Our friendly team is here to help</p>
          <Link href={"mailto: marketing@royalcrowm.com"}>
            <p>marketing@royalcrown.com</p>
          </Link>
        </div>
        <div className="ContactUsEmail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.507 19l-1.507-6-6-1.5 12-4.5-4.493 12z" />
          </svg>
          <p className="BoldTextInner">Office</p>
          <p>Crown Decor Pvt. Ltd.</p>
          <Link
            href={"https://maps.app.goo.gl/kMbjwniPJ4jZ7cW88"}
            target="_blank"
          >
            <p className="ContactusAddress">
              One 42, 401 North Tower,
              <br /> Ambli Bopal Road,
              <br />
              Ahmedabad 380054.
            </p>
          </Link>
        </div>
        <div className="ContactUsEmail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
          </svg>
          <p className="BoldTextInner">Phone</p>
          <p>Mon-Fri from 8am to 5pm.</p>
          <Link href={"tel: +919825230742"}>
            <p>+91 98252 30742</p>
          </Link>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7343.565444953944!2d72.46514944495584!3d23.03174869031674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9e585cfc57%3A0x833b59aeb8ec9afe!2sCrown%20Decor%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726645230117!5m2!1sen!2sin"
          className="MapFrame"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.0581432308504!2d72.49073037591127!3d22.98488931773235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aeb23c7e7e7%3A0xd34044573492f3c0!2sRoyal%20Art%20Laminates!5e0!3m2!1sen!2sin!4v1726573533512!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="MapFrame"
        ></iframe> */}
      </div>
    </div>
  );
};
export default ContactUsHear;
