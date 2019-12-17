import React, {SyntheticEvent, useEffect, useRef, useState,} from 'react';
import styled from 'styled-components';
import {Tweet} from '../../domain/tweets/tweet';
import {createTweet} from '../../domain/tweets/tweet.repository';

interface Props {
    currentUser: string;
    onTweetCreated: (tweet: Tweet) => any;
}

const TweetForm = ({onTweetCreated, currentUser}: Props) => {
    const [tweetText, setTweetText] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const newTweet = await createTweet({tweetText, author: currentUser});
        setTweetText('');
        setLoading(false);
        onTweetCreated(newTweet);
    };

    return (
        <Form onSubmit={onSubmit}>
            <TweetInput
                maxLength={140}
                disabled={loading}
                ref={inputRef}
                placeholder={"What's on your mind?"}
                value={tweetText}
                onChange={e => setTweetText(e.target.value)}
            />
            <TweetSubmit disabled={loading}>
                {loading && '...'}
                {!loading && 'Tweet'}
            </TweetSubmit>
        </Form>
    );
};

export default TweetForm;

const Form = styled.form`
  display: flex;
`;

const TweetInput = styled.input.attrs({
    type: 'text',
    required: true,
})`
  padding: 1em;
  margin: 5px;
  border-radius: 1em;
  outline: none;
  border: solid 1px gainsboro;
  flex: 1;
  display: block;

  :focus {
    border-color: var(--app-primary-color-dark);
  }

  :disabled {
    background: #efefef;
  }
`;

const TweetSubmit = styled.button.attrs({
    type: 'submit',
})`
  padding: 1em 2em;
  background: var(--app-primary-color);
  color: var(--app-light-color);
  border: solid 1px var(--app-primary-color-dark);
  border-radius: 1em;
  margin: 5px;
  outline: none;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: block;
  width: 95px;

  :hover {
    background: var(--app-primary-color-dark);
  }

  :disabled {
    background: #ffc3c6;
  }

  :active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;
