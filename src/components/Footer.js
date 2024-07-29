import SocialLink from "../assets/SocialLink";
import MetaLogoFooter from "../assets/MetaLogoFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-100 w-full  flex  flex-col ">
      <div className="flex  w-[1216px] gap-11 mx-auto">
        <div className="mt-16 flex">
          <div className="w-[289px] flex flex-col gap-6">
            <h3 className="text-xl font-bold">About</h3>
            <div>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div>
              <p>Email : info@jstemplate.net</p>
              <p>Phone : 880 123 456 789</p>
            </div>
          </div>
          <div className="w-[315px] flex flex-col gap-6  font-bold ml-44">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/AllBlog">
              <button>Blog</button>
            </Link>
            <Link to="/ContactUs">
              <button>Contact</button>
            </Link>
          </div>
          <div>
            <SocialLink />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-950 w-[1216px] mx-auto mt-10 flex justify-between">
        <div className="mt-6 flex">
          <MetaLogoFooter />
          <div>
            <div className="text-xl flex">
              <p>Meta</p>
              <p className="font-bold">Blog</p>
            </div>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex  gap-4  items-center ">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
