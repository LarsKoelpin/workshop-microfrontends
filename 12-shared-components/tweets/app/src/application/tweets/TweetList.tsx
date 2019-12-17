import React from 'react';
import styled from 'styled-components';
import {Tweet} from '../../domain/tweets/tweet';


interface Props {
    tweets: Tweet[] | null;
}

const showDetail = (id: string) => {
    history.pushState(null, '', `/details?id=${id}`);
};

const TweetList = ({tweets}: Props) => (
    <TweetContainer>
        {
            tweets && tweets.map(tweet => (
                <TweetEntry key={tweet.id}>
                    <h5>{tweet.tweetText}</h5>
                    <p><a onClick={() => showDetail(tweet.author)}>{tweet.author}</a></p>
                </TweetEntry>
            ))
        }
        {!tweets && <loader-component></loader-component>}
    </TweetContainer>
);

export default TweetList;

const TweetContainer = styled.div`
  position: relative;
`;

const TweetEntry = styled.div`
  padding: 2em;
  border-bottom: 1px solid #1b1e21;
  
  h5 {
    padding: 1em 0;
  }
  a {
   color: var(--app-secondary-color);
   cursor: pointer;
  }
`;