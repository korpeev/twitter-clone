import { FC } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { TweetsType } from "../../redux/tweets/types";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  FiMessageCircle,
  RiShareForward2Line,
} from "./tweet-icons";

interface TweetProps extends TweetsType {
  full?: boolean;
}

const Tweet: FC<TweetProps> = ({ text, user, id, full }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    !full && navigate(`tweet/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex items-start p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200 ease-in-out",
        {
          "sticky top-0": full,
        }
      )}>
      <img
        src={user?.avatarUrl}
        alt="avatar"
        className="inline object-cover w-12 h-12 mr-2 rounded-full"
      />

      <div className="flex flex-col w-full">
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
        <div className="mt-5 flex items-center justify-between text-sm ">
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
