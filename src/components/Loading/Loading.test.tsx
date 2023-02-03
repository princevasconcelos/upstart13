import { render, screen} from '@testing-library/react'

import Loading from './index'

describe('Loading', () => {
  it('should render an progressbar', async () => {
    render(<Loading />)
    expect(screen.getByRole('progressbar')).toBeDefined()
  })
})
