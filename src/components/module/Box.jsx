import arrowLeftWhite from "../../assets/arrowLeftWhite.svg";
const Box = ({ image, title, des, link }) => {
  return (
    <a href={link} className="z-10">
      <div className="bg-[#0f022cb8] rounded-[20px] px-4  border border-white md:min-w-[350px] max-w-[280px]  md:min-h-[500px] text-center group">
        <img src={image} alt="" className="mx-auto" />
        <div className="flex items-center justify-center gap-4 border-b py-5 ">
          <div className="rounded-[5px] w-fit p-1 bg-[#500FE9]">
            <img src={arrowLeftWhite} alt="" className="rotate-[180deg] w-4" />
          </div>
          <p className="text-[14px] md:text-[1rem] text-white ">{title}</p>
        </div>
        <p className="text-[1rem] text-white pt-5 w-[90%] mx-auto min-h-[6rem]">{des}</p>
        <button className="my-5 px-4 py-2 text-white bg-[#8a5ff0] rounded-lg mx-auto">
          ماجرا چیه ؟
        </button>
      </div>
    </a>
  );
};

export default Box;
