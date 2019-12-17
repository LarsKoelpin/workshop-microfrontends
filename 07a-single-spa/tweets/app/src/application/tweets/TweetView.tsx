import React, { useEffect, useState } from 'react';
import TweetList from './TweetList';
import TweetForm from './TweetForm';
import { Tweet } from "../../domain/tweets/tweet";
import { fetchTweets } from "../../domain/tweets/tweet.repository";

interface Props {
  currentUser: string;
}

const TweetView = ({currentUser}: Props) => {
  const [ tweets, setTweets ] = useState<Tweet[] | null>(null);

  useEffect(() => {
    fetchTweets().then(setTweets);
  }, []);


  const onTweetCreated = async (newTweet: Tweet) => {
    if (tweets) {
      setTweets([ newTweet, ...tweets ]);
    } else {
      setTweets([ newTweet ]);
    }
    window.dispatchEvent(new CustomEvent('tweet', {detail: newTweet}));
  };

  return (
    <div>
      <TweetForm currentUser={currentUser} onTweetCreated={onTweetCreated} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default TweetView;
