import { fireEvent, render, screen} from '@testing-library/react'

import Button from './index'

describe('Button', () => {
  it('should render an Button with text', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} disabled={false}>Click me</Button>)

    const btn = screen.getByText('Click me')
    expect(btn).toBeDefined()
    fireEvent.click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not call onClick on disabled', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} disabled={true}>Click me</Button>)

    fireEvent.click(screen.getByText('Click me'))

    expect(onClick).toHaveBeenCalledTimes(0)
  })
})
