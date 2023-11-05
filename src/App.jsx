// SVG
import logo from "./assets/logo.svg";
// PNG
import exbox from "./assets/exbox.png";
import gradient from "./assets/gradient.png";
import medal from "./assets/medal.png";
import medal2 from "./assets/medal2.png";
import medal3 from "./assets/medal3.png";
import headerBg from "./assets/headerBg.png";
import bgFooter from "./assets/bgFooter.png";
// module
import Box from "./components/module/Box";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <img src={headerBg} alt="" className="absolute w-full h-full hidden md:block z-[-99]" />

      <img src={gradient} alt="" className="absolute left-0 z-[-1] md:z-1" />
      {/* container */}
      <div className="md:container px-4 md:px-0 ">
        <a href="https://www.excoino.com/" className="">
          <div className="w-full">
            <img src={logo} alt="" className="w-[7rem] md:w-[10rem] pt-5 mx-auto md:mr-auto " />
          </div>
        </a>
        {/* 1 Desktop */}
        <div className="items-center justify-center mt-[4rem] gap-4 hidden md:flex">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-[2.5rem] text-white">اکسکوینو، یک جعبه پر از پاداش و جایزه!</h1>
        </div>
        {/* 1 Mobile */}
        <div className="text-center mt-[7rem]  md:hidden text-[1.5rem] text-white ">
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* <img src={logo} alt="" /> */}
            اکسکوینو،
          </div>
          <h1 className=""> یک جعبه پر از پاداش و جایزه!</h1>
        </div>
        {/* 2 Desktop */}
        <div className="items-center justify-center mt-[3rem] gap-1  text-[1.5rem] text-white  hidden md:flex font-light">
          <span className="font-bold">با اکسکوینو</span>
          {/* <img src={logo} alt="" className="w-[8rem]" /> */}
          <h1 className=""> روزانه و ماهانه پاداش و جایزه‌های هیجان‌انگیز بگیرید</h1>
        </div>
        {/* 2 Mobile */}
        <div className="text-center mt-[7rem] md:hidden text-[1rem] text-white font-light">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-bold">با اکسکوینو،</span>
            {/* <img src={logo} alt="" className="w-[11.5rem]" /> */}
            روزانه و
          </div>
          <h1 className=""> ماهانه پاداش و جایزه‌های هیجان‌انگیز بگیرید</h1>
        </div>
      </div>
      {/* Boxes */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-[5rem]">
        <Box
          image={medal}
          title="در اکسکوینو باش، با کلی پاداش"
          des="از ۷٪ تا ۱۴٪ پاداش ثابت سالانه از اکسکوینو بگیرید!"
          link={"https://excoino.com/blog/holders"}
        />
        {/* <Box
          image={medal2}
          title="جایزه ماهانه بلیت سفر پاریس"
          des="با افزایش موجودی، دوشنبه آخر هر ماه از Ex-Box اکسکوینو جایزه‌های جذاب و متنوع بگیرید!"
          link={"https://excoino.com/leaderboard"}
        /> */}
        <Box
          image={medal3}
          title="پاداش روزانه با یک کوین خاص"
          des="با نگهداری یک کوین دلخواه در حسابتون، ۳٪ پاداش سالانه رو به‌صورت روزانه دریافت کنید."
          link={"https://excoino.com/blog/dailyinvest"}
        />
      </div>
      {/* images */}
      <div className="relative md:hidden mt-[20rem] md:mt-0">
        <img src={bgFooter} alt="" className="absolute bottom-[-4rem] left-2" />
        <img src={medal} className="absolute left-0  bottom-[46px] w-[12rem]" />
        <img src={medal2} className="absolute left-[25vw]  bottom-[46px] z-[99] w-[12rem]" />
        <img src={medal3} className="absolute right-0 bottom-[46px] w-[12rem]" />
      </div>
      {/* end */}
      <Footer />
    </>
  );
}

export default App;
