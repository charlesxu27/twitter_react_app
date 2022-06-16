import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value)
    console.log(`TEXT Target: ${event.target.value}`)
  }

  const handleOnSubmit = () => {

    const newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 150,
      likes: 99
    }
    console.log(`TEXT Tweet!!!: ${props.tweetText}`)

    // props.setTweets(newTweet)
    props.setTweets((oldTweets) => [...oldTweets, { ...newTweet, id: oldTweets.length }])
    // props.setUserProfile(props.userProfile.numTweets + 1)
    props.setTweetText("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange} />
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText} charactersLeft={140 - props.tweetText.length} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} isValidText={props.tweetText.length > 0 && props.tweetText.length <= 140} />
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
  return (<span>{props.charactersLeft}</span>)

}


export function TweetSubmitButton(props) { // use a boolean
  if (props.isValidText) {
    return (
      <div className="tweet-submit">
        <i className="fas fa-plus-circle"></i>
        <button className="tweet-submit-button" onClick={props.handleOnSubmit}>Tweet</button>
      </div>
    )
  }
  return null
}

