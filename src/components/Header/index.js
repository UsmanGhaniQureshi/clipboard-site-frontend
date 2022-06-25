import { FaRegCopyright } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="flex relative flex-col items-center justify-center bg-no-repeat object-fill h-80 md:h-96 opacity-90"
      style={{
        backgroundImage:
          "url(https://static.vecteezy.com/system/resources/previews/001/409/192/original/abstract-geometric-banner-free-vector.jpg)",
      }}
    >
      <FaRegCopyright className="w-24 h-24  md:w-36 md:h-36 text-slate-600" />
      <h1 className="absolute bottom-8 text-black px-4 text-center text-xl md:text-3xl  font-extrabold font-sans">
        A History of Everything that you need copy.
      </h1>
    </div>
  );
};

export default Header;
