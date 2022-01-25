import { TwitterOutlined, GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal } from "../components";
const Auth = () => {
  const [modalType, setModalType] = useState<"signIn" | "signUp" | null>(null);

  const handleOpenRegister = () => {
    setModalType("signUp");
  };
  const handleOpenLogin = () => {
    setModalType("signIn");
  };
  const handleClose = () => {
    setModalType(null);
  };
  return (
    <div className="h-screen flex">
      <Modal
        isOpen={modalType === "signUp"}
        title="Создайте Аккаунт"
        handleClose={handleClose}>
        <input
          type="text"
          placeholder="E-mail"
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-accent"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border-2 mt-5 border-gray-300 rounded-md p-1 focus:outline-accent"
        />
        <button className="btn-primary justify-center mt-5">Далле</button>
      </Modal>
      <Modal
        title="Войти в аккаунт"
        handleClose={handleClose}
        isOpen={modalType === "signIn"}>
        <input
          type="text"
          placeholder="E-mail"
          className="border-2 border-gray-300 rounded-md p-1 focus:outline-accent"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="border-2 mt-5 border-gray-300 rounded-md p-1 focus:outline-accent"
        />
        <button className="btn-primary justify-center mt-5">Вход</button>
      </Modal>
      <div className="bg-accent h-screen w-1/2">
        <TwitterOutlined className="text-white text-9xl h-full flex items-center justify-center" />
      </div>
      <div className="p-6 h-screen w-1/2">
        <TwitterOutlined className="text-accent text-5xl" />

        <div className="flex flex-col justify-center h-full">
          <h1 className="font-bold text-6xl leading-[5rem]">
            Будь в крусе происходящего
          </h1>
          <h3 className="font-bold pt-5 text-4xl">
            Присоединяйтесь к Твиттеру прямо сейчас!
          </h3>
          <button className="btn-black w-1/2 flex justify-between mt-12">
            Войти с Помощью Google
            <GoogleOutlined className="text-red-600" />
          </button>
          <span className="font-bold block text-center w-1/2 my-5">или</span>
          <button
            onClick={handleOpenRegister}
            className="btn-primary text-center px-5 w-1/2 justify-center">
            Зарегистрироваться
          </button>
          <div className="pt-12 w-1/2">
            <span className="font-bold text-lg">Уже есть акканут?</span>
            <button
              onClick={handleOpenLogin}
              className="mt-2 btn-outlined text-center px-5 justify-center">
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
