import Twitter from "twitter";
import { app_keys, user_keys } from "./keys/keys.js";
/*
const twitter = new Twitter({
    consumer_key: user_keys[0].consumer_key,
    consumer_secret: user_keys[0].consumer_secret,
    access_token_key: app_keys[0].access_token_key,
    access_token_secret: app_keys[0].access_token_secret
})

twitter.post("statuses/update", {status: "test"}, (error, tweet, response) => {
    if (!error) {
        console.log(tweet)
    } else {
        console.log(error)
        console.log(response)
    }
})
*/
for (let i = 0; i < 9; i++) {
    try {
        const client = new Twitter({
            consumer_key: user_keys[0].consumer_key,
            consumer_secret: user_keys[0].consumer_secret,
            access_token_key: app_keys[i].access_token_key,
            access_token_secret: app_keys[i].access_token_secret
        });
        const me = await client.get("account/verify_credentials", {});
        console.log(me);
    }
    catch (e) {
        console.log(e);
    }
}
