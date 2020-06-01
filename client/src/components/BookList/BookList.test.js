import React from 'react'
import TestRenderer from 'react-test-renderer'
import BookList from './BookList'
import delay from 'redux-saga'

jest.mock('./services/GetCovers')

const getBookCovers = require('./services/GetCovers').default


describe('The book list', () => {

  beforeAll(() => {
    getBookCovers.__setBookData()
  })

  it('should display the book covers', async () => {
    const tree = TestRenderer.create(
      <BookList />
    )

    await delay()
    const instance = tree.root
    const component = instance.findByProps({ className: `list__gallery` })
    const gallery = component.children[0]
    const firstBook = gallery.children[0]

    expect(firstBook).toEqual('test')
  })
})