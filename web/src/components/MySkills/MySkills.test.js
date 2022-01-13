import { render } from '@redwoodjs/testing/web'

import MySkills from './MySkills'

describe('MySkills', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MySkills />)
    }).not.toThrow()
  })
})
