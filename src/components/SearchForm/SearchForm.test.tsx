import { fireEvent, render, screen} from '@testing-library/react'

import SearchForm from './index'

describe('SearchForm', () => {
  it('should render a form fields and submit data', async () => {
    const onSubmit = jest.fn()
    render(<SearchForm onSubmit={onSubmit} loading={false} />)

    expect(screen.getByPlaceholderText('Type your address')).toBeDefined()
    expect(screen.getByPlaceholderText('Type your city')).toBeDefined()
    expect(screen.getByPlaceholderText('Type your state')).toBeDefined()

    fireEvent.click(screen.getByText('Search'))

    expect(onSubmit).toHaveBeenCalledWith("4151 W Oak Ridge Rd", "Orlando", "Florida")
  })
})
