import { render } from '@redwoodjs/testing/web'

import HomepageMainInfo from './HomepageMainInfo'

describe('HomepageMainInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepageMainInfo />)
    }).not.toThrow()
  })
})
