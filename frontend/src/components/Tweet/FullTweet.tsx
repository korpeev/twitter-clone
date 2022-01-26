import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tweet } from "..";
import { selectTweetSelector } from "../../redux/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchTweet } from "../../redux/tweet/tweetSlice";

const FullTweet = () => {
  const { items: tweet } = useAppSelector(selectTweetSelector);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchTweet(params.id));
    console.log(params.id);
  }, []);
  if (!tweet.user) {
    return null;
  }
  return <Tweet {...tweet} />;
};

export default FullTweet;
