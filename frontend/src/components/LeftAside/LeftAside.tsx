import { IoSearchOutline } from "react-icons/io5";

const LeftAside = () => {
  return (
    <div className="flex flex-col px-4 mt-2 fixed">
      <div className="relative ">
        <input
          type="text"
          placeholder="Поиск по твиттеру"
          className="border-gray-200  border-2 rounded-full pl-8 py-1 focus:outline-accent"
        />
        <IoSearchOutline size={20} className="absolute top-2 left-3 text-gray-500" />
      </div>
      <div className="flex w-full flex-col mt-12 bg-gray-100  pt-1 rounded-lg">
        <h1 className="font-bold text-lg p-2">Актуальные Тренды</h1>
        <div className="hover:bg-gray-200 p-2 cursor-pointer">
          <span className="text-xs text-gray-500">Тренды в Казахстан</span>
          <h5 className="font-bold text-sm">Украины</h5>
          <span className="text-xs text-gray-500">16.5k твитов</span>
        </div>
        <div className="hover:bg-gray-200 p-2 cursor-pointer">
          <span className="text-xs text-gray-500">Тренды в Казахстан</span>
          <h5 className="font-bold text-sm">Украины</h5>
          <span className="text-xs text-gray-500">16.5k твитов</span>
        </div>
        <div className="hover:bg-gray-200 p-2 cursor-pointer">
          <span className="text-xs text-gray-500">Тренды в Казахстан</span>
          <h5 className="font-bold text-sm">Украины</h5>
          <span className="text-xs text-gray-500">16.5k твитов</span>
        </div>
        <div className="hover:bg-gray-200 p-2 cursor-pointer rounded-b-lg text-accent text-sm">
          Show more
        </div>
      </div>
      <div className="flex w-full flex-col mt-12 bg-gray-100  pt-1 rounded-lg">
        <h1 className="font-bold text-lg p-2">Кого читать</h1>
        <div className="hover:bg-gray-200 p-2 cursor-pointer flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="https://pbs.twimg.com/profile_images/941277194910863360/u4L5dOrS_400x400.jpg"
            alt=""
          />
          <div className="flex flex-col mx-2">
            <span className="text-sm">Katya</span>
            <span className="text-xs text-gray-500">@Katya</span>
          </div>
          <button className="btn-secondary ml-4 bg-gray-800 text-white justify-center text-xs leading-0 h-6 w-16 p-0">
            Follow
          </button>
        </div>

        <div className="hover:bg-gray-200 p-2 cursor-pointer rounded-b-lg text-accent text-sm">
          Show more
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
