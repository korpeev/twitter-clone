import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {useAppDispatch, useAppSelector} from "./redux/store";
import {ReactNode, useEffect, useMemo} from "react";
import {selectTweetsSelector} from "./redux/selectors";
import {fetchTweets} from "./redux/tweets/tweetsSlice";
import {fetchTags} from "./redux/tags/tagsSlice";
import TweetSkeleton from "./components/Skeletons/TweetSkeleton";
import {FullTweet} from "./components";
import {Tweet} from "./components";
import SendTweet from "./components/Tweet/SendTweet";

const App = () => {
    const dispatch = useAppDispatch();
    const {items: tweets, errors, loadingState} = useAppSelector(selectTweetsSelector);
    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, []);

    const renderTweets = useMemo((): ReactNode => {
        return loadingState === "LOADING" ? (
            new Array(10).fill(null).map((_) => <TweetSkeleton key={Math.random()}/>)
        ) : (
            <>
                <SendTweet/>
                <div className="bg-gray-200 h-4"/>
                {tweets.map(({text, user, id}) => (
                    <Tweet key={id} id={id} text={text} user={user}/>
                ))}
            </>
        );


    }, [errors, tweets]);
    let auth = true;
    return (
        <Routes>
            <Route path="/auth" element={auth ? <Navigate to="/"/> : <Auth/>}/>
            <Route path="/" element={auth ? <Home/> : <Navigate to="/auth"/>}>
                <Route index element={renderTweets}/>
                <Route path="tweet/:id" element={<FullTweet/>}/>
            </Route>
        </Routes>
    );
};

export default App;
