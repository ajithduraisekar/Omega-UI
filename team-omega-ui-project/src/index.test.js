import React from 'react'
import ReactDOM from 'react-dom'
import { ReactStrictMode, rootElement } from './index'

jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('testing index.js file', () => {
  it('renders without crashing', () => {
    ReactDOM.render(ReactStrictMode, rootElement)
    expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode, rootElement)
  })
})