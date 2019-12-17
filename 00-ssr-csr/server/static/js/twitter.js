const initForm = () => {
    const formHandler = async e => {
        e.preventDefault();
        const tweet = e.target.tweet.value;
        document.querySelector('#tweets').innerHTML = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tweetText: tweet, author: 'Lars'})
        }).then(r => r.text());
        initForm();
    };

    document.querySelector('#tweetForm').addEventListener('submit', formHandler);
};

initForm();
