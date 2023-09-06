import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col">
          <a href="/">
            <img src={footerLogo} alt="logo footer" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5 mt-8">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="w-12 h-12 bg-white rounded-full flex justify-center items-center"
              >
                <a href="/">
                  <img
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* NAV LIST */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white font-montserrat w-full">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className=" text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((each) => (
                  <li
                    key={each.name}
                    className="mt-3 text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href={each.link}>{each.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p>©Copyright 2023. All rights reserved.</p>
        </div>
        <div>
          <p className="font-montserrat cursor-pointer">
            Developed by Norawich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
