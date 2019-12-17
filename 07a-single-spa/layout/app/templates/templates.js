module.exports = (hostTweet, hostProfile, hostTrending) => ({
    home: `
   <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
             <title>Twttr</title>
             <base href="/">
        </head>
        <body>
         <script type="systemjs-importmap">
            {
                "imports": {
                    "tweets-app": "${hostTweet}",
                    "profile-app": "${hostProfile}",
                    "trending-app": "${hostTrending}"
                }
            }
            </script>
            <main></main>
        </body>
        </html>
  `,
    auth: `
   <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">  
            <title>Twttr - Join Today</title>
        </head>
        <body>
            <main></main>
        </body>
        </html>
  `,
});