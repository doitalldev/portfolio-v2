import { render } from '@redwoodjs/testing/web'

import AboutMe from './AboutMe'

describe('AboutMe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutMe />)
    }).not.toThrow()
  })
})
