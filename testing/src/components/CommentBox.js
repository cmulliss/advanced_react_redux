import React, { Component } from 'react'

class CommentBox extends Component {
  state = {
    comment: ''
  }
  // our fake event gets merged into this in the test file, replaces e.target.value, trick it into seeing 'new comment'
  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }
  // empty out text area
  handleSubmit = (e) => {
    e.preventDefault()

    // TODO - call an action creator
    // and save the comment
    this.setState({ comment: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox
