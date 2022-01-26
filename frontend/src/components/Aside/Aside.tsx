import cn from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "..";
import SendTweet from "../Tweet/SendTweet";
import { AiOutlineTwitter } from "./aside-icons";
import { menuLists } from "./aside-menu-list";
const Aside = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickActiveIndex = (index: number): (() => void) => {
    return () => setActiveIndex(index);
  };

  return (
    <>
      <Modal handleClose={handleClose} isOpen={open} title="Создать Твит">
        <SendTweet />
      </Modal>
      <aside className="col-start-1 col-end-4 relative">
        <nav className="sticky top-0 h-screen border-r-2 border-gray-200 pr-4">
          <li className="relative pl-3 pt-5 rounded-[50%] w-[42px] cursor-pointer list-none text-accent">
            <Link
              to="/"
              className="rounded-full hover:bg-sky-200 w-8 h-8 flex items-center justify-center">
              <AiOutlineTwitter size={35} />
            </Link>
          </li>
          {menuLists.map(({ icon, iconActive, text }, index) => (
            <li
              onClick={handleClickActiveIndex(index)}
              key={text}
              className={cn(
                "flex my-5 cursor-pointer items-center px-4 py-3 hover:bg-gray-200 rounded-3xl w-fit"
              )}>
              <span>{index === activeIndex ? iconActive : icon}</span>
              <span
                className={cn("ml-5 leading-none text-lg", {
                  "font-bold": activeIndex === index,
                })}>
                {text}
              </span>
            </li>
          ))}
          <button
            onClick={handleClickOpen}
            className="btn-primary w-full p-3 justify-center">
            Tweet
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
