import { render, screen} from '@testing-library/react'

import Alert from './index'

describe('Alert', () => {
  it('should render an alert with text', async () => {
    const error = 'Houve um problema na requisição'
    render(<Alert text={error} />)

    expect(screen.getByText('Houve um problema na requisição')).toBeDefined()
  })
})
