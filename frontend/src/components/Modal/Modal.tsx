import { CloseOutlined, TwitterOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, title, isOpen, handleClose }) => {
  useEffect(() => {
    const body = document.body;
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed z-40 w-screen h-screen left-0 top-auto bottom-auto overflow-y-auto">
      <div
        className="overlay cursor-pointer overflow-y-auto"
        onClick={handleClose}
      />
      <div className="z-40 relative w-1/3 mx-auto bg-white top-1/3 p-5 rounded-lg">
        <div className="flex items-center">
          <span>
            <CloseOutlined
              onClick={handleClose}
              className=" text-xl cursor-pointer"
            />
          </span>
          <span className="flex-1 text-center">
            <TwitterOutlined className="text-accent text-4xl" />
          </span>
        </div>
        <span className="my-5 block font-bold text-xl">{title}</span>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
