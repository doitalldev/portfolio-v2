import { render } from '@redwoodjs/testing/web'

import MyServices from './MyServices'

describe('MyServices', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyServices />)
    }).not.toThrow()
  })
})
