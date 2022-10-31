import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// for scope, otherwise wrapped out of scope
let wrapped

// common setup
beforeEach(() => {
  wrapped = shallow(<App />)
})

it('shows a comment box', () => {
  // returns an array, so use length
  expect(wrapped.find(CommentBox).length).toEqual(1)
})
it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
// created jsconfig.json to avoid awkward nesting
