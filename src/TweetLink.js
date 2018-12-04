import React, { Component } from 'react'
import { IoIosLink } from "react-icons/io"

export default class TweetLink extends Component {
  render() {
    const {id_str, user} = this.props.tweet
    const url = `https://twitter.com/${ user.screen_name }/status/${ id_str }`
    return (
      <div>
        <IoIosLink />
        <a
          className="box-link"
          href={ url }
          rel="noopener noreferrer"
          target="_blank">
            Link
        </a>
      </div>
    )
  }
}
