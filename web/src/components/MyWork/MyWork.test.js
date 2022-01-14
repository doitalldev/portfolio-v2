import { render } from '@redwoodjs/testing/web'

import MyWork from './MyWork'

describe('MyWork', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyWork />)
    }).not.toThrow()
  })
})
