import { FC } from "react";
import { useNavigate, useNavigationType } from "react-router-dom";
import { TweetsType } from "../../redux/tweets/types";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  FiMessageCircle,
  RiShareForward2Line,
} from "./tweet-icons";

interface TweetProps extends TweetsType {}

const Tweet: FC<TweetProps> = ({ text, user, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`tweet/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-start p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ease-in-out">
      <div className="h-12 w-24 mb-4 lg:mb-0 mr-2">
        <img
          src={user.avatarUrl}
          alt="avatar"
          className="h-full w-full rounded-full overflow-hidden shadow"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex text-sm">
          <a href="#id" className="font-semibold hover:underline">
            {user.fullname}
          </a>
          <span className="text-gray-400 mx-2 text-xs">@{user.username} -</span>
          <span className="text-gray-400">1hr</span>
        </div>
        <div className="max-w-2xl">
          <p className="text-xs">{text}</p>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <div className="flex group hover:text-accent items-center transition-colors duration-150 ease-linear cursor-pointer">
            <span className=" mr-1 duration-150 ease-linear transition-colors group-hover:bg-sky-100 rounded-full w-8 h-8 flex items-center justify-center">
              <FiMessageCircle size={20} />
            </span>
            <span className="text-xs">12</span>
          </div>
          <div className="flex group hover:text-green-500 items-center transition-colors duration-150 ease-linear cursor-pointer">
            <span className=" mr-1 duration-150 ease-linear transition-colors group-hover:bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
              <AiOutlineRetweet size={20} />
            </span>
            <span className="text-xs">12</span>
          </div>
          <div className="flex group hover:text-red-500 items-center transition-colors duration-150 ease-in cursor-pointer">
            <span className=" mr-1 duration-150 ease-in transition-colors group-hover:bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
              <AiOutlineHeart size={20} />
            </span>
            <span className="text-xs">12</span>
          </div>
          <div className="flex group hover:text-accent items-center transition-colors duration-150 ease-in cursor-pointer">
            <span className=" mr-1 duration-150 ease-in transition-colors group-hover:bg-sky-100 rounded-full w-8 h-8 flex items-center justify-center">
              <RiShareForward2Line size={20} />
            </span>
            <span className="text-xs">12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
