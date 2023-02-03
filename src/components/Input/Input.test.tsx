import { fireEvent, render, screen} from '@testing-library/react'

import Input from './index'

describe('Input', () => {
  it('should render an input and with a label', async () => {
    render(
      <Input
          name="Address"
          value=""
          onChange={() => null}
          placeholder="Type your address"
          required
        />
    )
    expect(screen.getByText('Address')).toBeDefined()
    expect(screen.getByPlaceholderText('Type your address')).toBeDefined()
  })

  it('should call onChange when user types', async () => {
    const onChange = jest.fn()
    render(
      <Input
          name="Address"
          value=""
          onChange={onChange}
          placeholder="Type your address"
          required
        />
    )

    fireEvent.change(screen.getByPlaceholderText('Type your address'), { target: { value: 'New address'}})

    expect(onChange).toHaveBeenLastCalledWith('New address')
  })
})
