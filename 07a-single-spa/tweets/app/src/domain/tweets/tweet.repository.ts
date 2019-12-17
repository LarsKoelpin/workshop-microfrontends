import {AxiosResponse} from 'axios';
import {Tweet, TweetCreate} from './tweet';
import {httpClient} from '../../infrastructure/http.service';

export const createTweet = (tweet: TweetCreate): Promise<Tweet> => httpClient.post<void, AxiosResponse<Tweet>>('/tweets', tweet)
    .then(response => response.data);


export const fetchTweets = (): Promise<Tweet []> => httpClient.get<void, AxiosResponse<Tweet[]>>('/tweets')
    .then(response => response.data);