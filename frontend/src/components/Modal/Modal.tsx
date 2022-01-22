import { CloseOutlined, TwitterOutlined } from "@ant-design/icons";

const Modal = () => {
  return (
    <div className="overlay">
      <div className="z-30 relative w-1/3 mx-auto bg-white top-1/3 p-5 rounded-lg">
        <div className="flex items-center">
          <span>
            <CloseOutlined className=" text-xl cursor-pointer" />
          </span>
          <span className="flex-1 text-center">
            <TwitterOutlined className="text-accent text-4xl" />
          </span>
        </div>
        <span className="my-2 block font-bold text-xl">Создайте аккаунт</span>
        <div className="">
          <input
            type="text"
            name="email"
            placeholder="qwer"
            className="border-black border-2 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
