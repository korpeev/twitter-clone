import { TwitterOutlined, GoogleOutlined } from "@ant-design/icons";
import Modal from "./components/Modal/Modal";
const App = () => {
  return (
    <div className="h-screen flex relative">
      <Modal />
      <div className="bg-accent h-screen w-1/2">
        <TwitterOutlined className="text-white text-9xl h-full flex items-center justify-center" />
      </div>
      <div className="p-6 w-1/2">
        <TwitterOutlined className="text-accent text-5xl" />

        <h1 className="font-bold text-6xl leading-[5rem]">Будь в крусе происходящего</h1>

        <h3 className="font-bold pt-5 text-4xl">
          Присоединяйтесь к Твиттеру прямо сейчас!
        </h3>
        <button className="btn-black w-1/2 flex justify-between mt-12">
          Войти с Помощью Google
          <GoogleOutlined className="text-red-600" />
        </button>
        <span className="font-bold block text-center w-1/2 my-5">или</span>
        <button className="btn-primary text-center px-5 w-1/2 justify-center">
          Зарегистрироваться
        </button>
        <div className="pt-12">
          <span className="font-bold text-lg">Уже есть акканут?</span>
          <button className="mt-2 btn-outlined text-center px-5 w-1/2 justify-center">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
