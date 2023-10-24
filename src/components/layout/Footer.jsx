import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-[#110527] flex items-center justify-center gap-4 py-5 md:hidden mt-[24rem] md:mt-0 text-white">
      <p>اطلاعات تماس:</p>
      <a href="tel:02128111400">
        <FaPhone />
      </a>
      <a href="mailto:support@excoino.com">
        <IoMdMail />
      </a>
    </div>
  );
};

export default Footer;
