import Button from "./components/Button";
import Header from "./components/Header";
import Section from "./components/Section";
import { RiFilePaper2Line, RiEyeLine, RiMicrosoftFill } from "react-icons/ri";
import {
  FaRegCopyright,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebook,
} from "react-icons/fa";

function App() {
  return (
    <>
      {/* ================  Hero ================ */}
      <Header />
      <div className="flex flex-col gap-3 mt-4 mx-auto max-w-xs md:gap-6 md:flex-row md:max-w-sm ">
        {/* ================ Download Buttons =================== */}
        <Button
          btnText="Download For IOS"
          btnClasses="bg-green-700 text-white px-4 py-1 md:px-6 md:py-2"
        />
        <Button
          btnText="Download For MAC"
          btnClasses="bg-blue-700 text-white px-4 py-1 md:px-6 md:py-2"
        />
      </div>

      {/* Detail Section */}
      <div className="max-w-xl space-y-5 mt-4 p-4 mx-auto">
        <Section
          paragraphClasses="text-center"
          paragraphText="Note that the development build is not optimized.To create a production build .Note that the development build  evelopment build is not optimized.To create a production build"
        />
        <Section
          headingText="Keep Track Of Your Snippets "
          headingClasses="text-center font-bold tracking-wider "
          paragraphClasses="text-center"
          paragraphText="Note that the development build is not optimized.To create a production build .Note that the development build  evelopment build is not optimized.To create a production build"
        />
      </div>

      {/* ============================ Specification =============================*/}
      <div className="flex flex-col lg:flex-row mt-14 ">
        <div className="max-w-3xl mx-auto p-4">
          <img
            alt="Specification"
            src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-lg w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3 px-4 md:mx-auto  py-16 max-w-md">
          <Section
            headingText="Quick Search "
            headingClasses="font-bold text-slate-700 text-xl "
            paragraphClasses="mt-2 md:mt-4 text-slate-400"
            paragraphText="Note that the development build is not optimized."
          />
          <Section
            headingText="Keep Track Of Your Snippets "
            headingClasses="font-bold text-slate-700 text-xl "
            paragraphClasses="mt-2 md:mt-4 text-slate-400"
            paragraphText="Note that the development build is not optimized.Tent build  evelopment build is not optimized.To create a production build"
          />
          <Section
            headingText="Keep Track Of Your Snippets "
            headingClasses="text-left text-xl "
            paragraphClasses="mt-2 md:mt-4 text-slate-400"
            paragraphText="Note that the development build is not optimized.To cr build is not optimized.To create a production build"
          />
        </div>
      </div>

      {/* ========================== Super Charge Section ============================= */}

      <div className="flex flex-col justify-center items-center">
        <Section
          headingText="SuperCharge Your WorkFlow"
          headingClasses="text-center text-xl md:text-4xl"
          paragraphText="We Have Got the tool to Boost Your Productivity"
          paragraphClasses="text-center mt-2 md:mt-4"
        />
        <div className="flex flex-col items-center md:flex-row mx-auto gap-3 md:gap-5 w-2/3 p-4">
          <div className="max-w-xs flex flex-col items-center">
            <div className="w-10 h-10">
              <RiFilePaper2Line className="w-full h-full text-slate-400" />
            </div>
            <Section
              headingText="Create Blacklists"
              headingClasses="text-center"
              paragraphText="Easily Search Your Content By Searching,web application, Andoiod Application"
              paragraphClasses="md:text-center"
            />
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <div className="flex items-center justify-center w-10 h-10">
              <p className="flex font-bold items-center text-slate-400">
                A <div className=" text-2xl font-serif">I</div>{" "}
              </p>
            </div>

            <Section
              headingText="Create Blacklists"
              headingClasses="text-center"
              paragraphText="Easily Search Your Content By Searching,web application, Andoiod Application"
              paragraphClasses="md:text-center"
            />
          </div>
          <div className="max-w-xs flex flex-col items-center">
            <div className="w-10 h-10">
              <RiEyeLine className="w-full h-full text-slate-400" />
            </div>
            <Section
              headingText="Create Blacklists"
              headingClasses="text-center"
              paragraphText="Easily Search Your Content By Searching,web application, Andoiod Application"
              paragraphClasses="md:text-center"
            />
          </div>
        </div>
        {/* Brand Logos */}
        <div className="flex flex-col gap-2 p-4 justify-center items-center md:flex-row md:justify-around md:gap-0">
          <div className="flex md:items-center md:justify-center max-w-xs">
            <p className="text-slate-300 text-2xl font-bold md:text-4xl">
              Google
            </p>
          </div>
          <div className="flex max-w-xs">
            <img
              alt="Brand Logos"
              src="https://www.freepnglogos.com/uploads/ibm-logo-png/ibm-logo-png-transparent-svg-vector-bie-supply-3.png"
              className="w-20 h-20 md:w-28 md:h-28 object-cover "
            />
          </div>
          <div className="flex max-w-xs items-center">
            <RiMicrosoftFill className="w-12 h-12 md:w-20 md:h-20 text-slate-300" />
            <p className="text-slate-300 text-2xl font-bold">Microsoft</p>
          </div>
          <div className="px-7 md:px-0 mt-4 md:mt-0 w-40">
            <div className="w-12 h-3 border-4 border-slate-400 " />
            <p className="text-slate-500 text-sm font-bold">Hewlat Packard</p>
            <p className="text-slate-300 text-sm font-bold">Enterprise</p>
          </div>
          <div className="flex w-40 px-4 md:px-0 items-center mt-4 md:mt-0  font-bold text-slate-400 gap-1">
            <div className="w-8 h-8 bg-slate-600 rounded-full " />
            <div className="flex flex-col ">
              <p className="-my-1">Vector</p>
              <p className="-my-1">Graphics</p>
            </div>
          </div>
        </div>
      </div>

      {/* ClipBoard for  */}
      <div className="max-w-2xl px-4 mt-3 mx-auto">
        <Section
          headingText="ClipBoard For IOS and Android"
          headingClasses="text-center font-bold text-2xl"
          paragraphText=" Avaliable for Free on the store of Apple , Android and also on mac
          store,have an alt prop, either with meaningful text, or an empty
          string"
          paragraphClasses="text-center mt-3"
        />
        <div className="flex flex-col p-4 items-center md:flex-row md:justify-center mt-2 gap-2">
          <Button
            btnText="Download For IOS"
            btnClasses="px-4 py-2 bg-blue-500 text-white"
          />
          <Button
            btnText="Download For MAC"
            btnClasses="px-4 py-2 bg-green-500 text-white"
          />
        </div>
      </div>
      {/* Footer */}
      <div className=" bg-slate-100 p-3">
        <div className="flex flex-col max-w-xl  justify-between items-center gap-5 md:gap-0 mx-auto md:flex-row ">
          <FaRegCopyright className="w-20 h-20 text-green-500" />
          <ul className="md:columns-3 text-slate-400">
            <li>FAQS</li>
            <li>Privacy Policy</li>
            <li>Contact Me</li>
            <li>Install guide</li>
            <li>Press Kit</li>
          </ul>
          <div className="flex text-slate-600 items-center gap-4">
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaFacebook />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
