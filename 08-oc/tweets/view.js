import styles from './css/styles.css';

import tweetService from './tweets/tweets.service';

export default ({user}) =>
    `
<div class=${styles.tweets}>
    <h1>Tweets of ${user}</h1>
    <ul>
        ${tweetService.findAll().map(tweet => (`
              <li>${tweet.tweetText}</li>
        `)).join('')}
    </ul>
</div>
`;
