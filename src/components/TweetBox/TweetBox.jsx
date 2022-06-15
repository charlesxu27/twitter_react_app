import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const handleOnSubmit = () => {

    console.log(`TWEETS: ${props.tweets.length}`)
    console.log(`NAME: ${props.userProfile.name}`)
    console.log(`HANDLE: ${props.userProfile.handle}`)
    const newTweet = {
      // id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: "hey all!!! :D",
      comments: 0,
      retweets: 150,
      likes: 99
    }

    // props.setTweets(newTweet)
    props.setTweets((oldTweets) => [...oldTweets, {...newTweet, id: oldTweets.length}])


    console.log(`TWEETS 2: ${props.tweets.length}`)
    console.log(`NAME 2: ${props.userProfile.name}`)
    console.log(`HANDLE 2: ${props.userProfile.handle}`)

  }
  return (
    <div className="tweet-box">
      <TweetInput />
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}
