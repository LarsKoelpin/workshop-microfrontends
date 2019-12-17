import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import './App.css';

const SERVER = 'http://localhost:8080/api';

const App = () => {

    const [tweets, setTweets] = useState(null);
    const [trends, setTrends] = useState(null);
    const [tweet, setTweet] = useState('');

    useEffect(() => {
        fetch(`${SERVER}/tweets`)
            .then(res => res.json())
            .then(tweets => setTweets(tweets));

        fetch(`${SERVER}/trends`)
            .then(res => res.json())
            .then(trends => setTrends(trends));
    }, []);

    const onNewTweet = async e => {
        e.preventDefault();
        const created = await fetch(`${SERVER}/tweets`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({author: 'Lars', tweetText: tweet})
        }).then(r => r.json());
        setTweet('');
        setTweets([created, ...tweets]);
    };

    return (
        <>
            <Profile>Hello, Lars - CSR!!!</Profile>
            <Container>
                <Tweets>
                    <form onSubmit={onNewTweet}>
                        <h2>Tweet verfassen</h2>
                        <TweetInput type="text"
                                    required={true}
                                    value={tweet}
                                    onChange={e => setTweet(e.target.value)}
                                    placeholder="What's on your mind?"/>
                        <Button>Submit</Button>
                    </form>
                    {
                        tweets && tweets.map(tweet => <Tweet key={tweet.id}>
                            <h5>{tweet.tweetText}</h5>
                            <p><a href='#'>{tweet.author}</a></p>
                        </Tweet>)
                    }
                    {
                        !tweets && <Loading>Loading...</Loading>
                    }
                </Tweets>
                <Trending>
                    <h2>Trending</h2>
                    {
                        trends && trends.map((trend, i) => <Trend key={i}>{trend.hashtag}</Trend>)
                    }
                    {
                        !trends && <Loading>Loading...</Loading>
                    }
                </Trending>
            </Container>
        </>
    );
};

export default App;


const primaryColor = '#ff320b';

const Profile = styled.div`
  background: ${primaryColor};
  color: white;
  padding: 2em;
`;

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
`;

const Tweets = styled.div`
  flex: 2;
  padding: 0 1em 1em 1em;
`;

const Trending = styled.div`
  flex: 1;
  padding: 0 1em 1em 1em;
`;


const Tweet = styled.div`
  border-bottom: 1px solid #1b1e21;
  
  a {
   color: ${primaryColor};
  }
`;

const Trend = styled.div`
  padding: .5em;
`;

const Button = styled.button`
    color: #fff;
    background-color: ${primaryColor};
    display: block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid ${primaryColor};
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

const TweetInput = styled.input`
  padding: 1em;
  width: 100%;
  display: block;
`;

const Loading = styled.div`
  color: red;
  font-size: 2em;
`;
