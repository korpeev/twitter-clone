import { ReactNode, useEffect, useMemo } from "react";
import { Aside, Tweet, LeftAside } from "../components";
import SendTweet from "../components/Tweet/SendTweet";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectTweetsSelector } from "../redux/selectors";
import { fetchTweets } from "../redux/tweets/tweetsSlice";
import TweetSkeleton from "../components/Skeletons/TweetSkeleton";

const Home = () => {
  const dispatch = useAppDispatch();
  const { items: tweets, errors, loadingState } = useAppSelector(selectTweetsSelector);
  useEffect(() => {
    dispatch(fetchTweets());
  }, []);
  const renderTweets = useMemo((): ReactNode => {
    if (!errors) {
      return loadingState === "LOADING"
        ? new Array(10).fill(null).map((_) => <TweetSkeleton key={Math.random()} />)
        : tweets.map(({ text, user, id }) => <Tweet key={id} text={text} user={user} />);
    }
    return <h1>Opps Something went wrong</h1>;
  }, [errors, tweets]);

  return (
    <div className=" grid container max-w-4xl mx-auto grid-cols-12 ">
      <Aside />
      <div className="col-start-4 col-end-10 border-r-2 border-gray-200 h-screen relative">
        <div className="w-full h-10 right-0 sticky top-0 bg-gray-100 py-2 mt-2">
          <h1 className="ml-3 font-semibold">Главная</h1>
        </div>
        <SendTweet />
        <div className="bg-gray-200 h-4" />
        {renderTweets}
      </div>
      <div className="col-start-10 col-span-12">
        <LeftAside />
      </div>
    </div>
  );
};

export default Home;
