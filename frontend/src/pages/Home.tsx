import { Outlet } from "react-router-dom";
import { Aside, Tweet, LeftAside } from "../components";
import SendTweet from "../components/Tweet/SendTweet";

const Home = () => {
  return (
    <div className=" grid container max-w-[1200px] mx-auto grid-cols-12 ">
      <Aside />
      <div className="col-start-4 w-full col-end-9 border-r-2 border-gray-200 h-full relative">
        <div className="h-10 top-0 bg-gray-100 pt-2 sticky">
          <h1 className="px-4 font-semibold">Главная</h1>
        </div>
        <Outlet />
      </div>
      <div className="col-start-9 col-span-12">
        <LeftAside />
      </div>
    </div>
  );
};

export default Home;
