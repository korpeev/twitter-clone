import {
  AiFillHome,
  AiOutlineHome,
  BsPerson,
  BsPersonFill,
  HiBookmark,
  HiMail,
  HiOutlineBookmark,
  HiOutlineMail,
  RiNotification3Fill,
  RiNotification3Line,
  RiFileList2Line,
  RiFileList2Fill,
} from "./aside-icons";
type MenuListType = {
  text: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
};

export const menuLists: MenuListType[] = [
  {
    text: "Главная",
    icon: <AiOutlineHome size={25} />,
    iconActive: <AiFillHome size={25} />,
  },
  {
    text: "Уведолмление",
    icon: <RiNotification3Line size={25} />,
    iconActive: <RiNotification3Fill size={25} />,
  },
  {
    text: "Сообщение",
    icon: <HiOutlineMail size={25} />,
    iconActive: <HiMail size={25} />,
  },
  {
    text: "Заклдаки",
    icon: <HiOutlineBookmark size={25} />,
    iconActive: <HiBookmark size={25} />,
  },
  {
    text: "Список",
    icon: <RiFileList2Line size={25} />,
    iconActive: <RiFileList2Fill size={25} />,
  },
  {
    text: "Профиль",
    icon: <BsPerson size={25} />,
    iconActive: <BsPersonFill size={25} />,
  },
];
