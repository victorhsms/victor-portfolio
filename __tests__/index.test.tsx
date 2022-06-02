import { render, screen } from '@testing-library/react'

import Home from '@/pages/index'

describe('Main content', () => {
  it('renders a main', () => {
    render(<Home />)

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
