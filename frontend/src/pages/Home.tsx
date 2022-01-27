import {Outlet, useLocation, useMatch, useNavigate} from "react-router-dom";
import {Aside, LeftAside, Notification} from "../components";
import {MdKeyboardBackspace} from 'react-icons/md'
import {useState} from "react";


const Home = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const match = useMatch('/tweet/:id')
    const handleClickGoBack = () => {
        navigate(-1)
    }
    return (
        <div className=" grid container max-w-[1200px] mx-auto grid-cols-12 ">

            <Aside/>
            <div className="col-start-4 w-full col-end-9 border-r-2 border-gray-200 h-full relative">
                <div className="h-10 top-0 pl-2 bg-gray-100 sticky flex items-center">
                    {location.pathname === match?.pathname &&
                        <span onClick={handleClickGoBack} className="cursor-pointer text-accent">
                <MdKeyboardBackspace/>
            </span>}
                    <h1 className="px-4 font-semibold">Главная</h1>
                </div>
                <Outlet/>
            </div>
            <div className="col-start-9 col-span-12">
                <LeftAside/>
            </div>
        </div>
    );
};

export default Home;
