import {useMemo} from "react";
import {IoSearchOutline} from "react-icons/io5";
import {ThemeSkeleton} from "..";
import {selectTagsSelector} from "../../redux/selectors";
import {useAppSelector} from "../../redux/store";

const LeftAside = () => {
    const {items: tagsItems, loadingState, errors} = useAppSelector(selectTagsSelector);

    const renderThemes = useMemo(() => {
        const mappedThemeItems = tagsItems.themes?.map(({tag, tweetsCount}) => (
            <div key={Math.random()} className="hover:bg-gray-200 p-2 cursor-pointer">
                <span className="text-xs text-gray-500">Тренды в Казахстан</span>
                <h5 className="font-bold text-sm">{tag}</h5>
                <span className="text-xs text-gray-500">{tweetsCount}твитов</span>
            </div>
        ));
        if (!errors) {
            return loadingState === "LOADING" ? <ThemeSkeleton/> : mappedThemeItems;
        }
    }, [tagsItems.themes]);
    const renderUsers = useMemo(() => {
        const mappedUsers = tagsItems.users?.map(({avatarUrl, fullname, username}) => (
            <div key={username} className="hover:bg-gray-200 p-2 cursor-pointer flex items-center">
                <img className="h-8 w-8 rounded-full" src={avatarUrl} alt=""/>
                <div className="flex justify-around w-full items-center">
                    <div className="flex flex-col mx-2">
                        <span className="text-xs">{fullname}</span>
                        <span className="text-xs text-gray-500">@{username}</span>
                    </div>
                    <button
                        className="btn-secondary bg-gray-800 text-white justify-center text-xs leading-0 h-6 w-16 p-0">
                        Follow
                    </button>
                </div>
            </div>
        ));
        if (!errors) {
            return mappedUsers;
        }
        return <h1>Error {errors.message}</h1>;
    }, [tagsItems.users]);
    return (
        <div className="flex flex-col px-4 mt-2 h-full sticky top-5">
            <div className="top-0 fixed z-20">
                <input
                    type="text"
                    placeholder="Поиск по твиттеру"
                    className="border-gray-200  border-2 rounded-full pl-8 py-1 focus:outline-accent"
                />
                <IoSearchOutline size={20} className="absolute top-2 left-3 text-gray-500"/>
            </div>
            <div className="sticky top-0">
                <div className="flex w-full flex-col mt-12 bg-gray-100  pt-1 rounded-lg min-h-[400px]">
                    <h1 className="font-bold text-lg p-2">Актуальные Тренды</h1>
                    {renderThemes}
                    <div className="hover:bg-gray-200 p-2 cursor-pointer rounded-b-lg text-accent text-sm">
                        Show more
                    </div>
                </div>
                <div className="flex w-full flex-col mt-8 bg-gray-100 pt-1 rounded-lg ">
                    <h1 className="font-bold text-lg p-2">Кого читать</h1>
                    {renderUsers}
                    <div className="hover:bg-gray-200 p-2 cursor-pointer rounded-b-lg text-accent text-sm">
                        Show more
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftAside;
