import {useEffect, useState} from "react";
import {Params, useParams} from "react-router-dom";
import {Tweet} from "..";
import {selectTweetSelector} from "../../redux/selectors";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {fetchTweet} from "../../redux/tweet/tweetSlice";
import React from 'react';


const FullTweet = () => {
  const {items: tweet} = useAppSelector(selectTweetSelector);
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchTweet(params.id));
  }, []);

  if (!tweet.user) {
    return null
  }

  return <Tweet {...tweet} full/>;
};

export default FullTweet;
