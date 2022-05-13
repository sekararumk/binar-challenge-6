import { render, screen, fireEvent } from '@testing-library/react'

import Login from '../Login'

const mockLoginFnc = jest.fn()

test('input email', () => {
    render(<Login setLogin={mockLoginFnc} />)
    const inputElementEmail = screen.getByTestId('input-email')
    fireEvent.change(inputElementEmail, {
        target: {
            value: 'sekararumk21@gmail.com'
        }
    })
    expect(inputElementEmail.value).toBe('devi123@gmail.com')
})

test('input password', () => {
    render(<Login setLogin={mockLoginFnc} />)
    const inputElementPassword = screen.getByTestId('input-password')
    fireEvent.change(inputElementPassword, {
        target: {
            value: '123456'
        }
    })
    expect(inputElementPassword.value).toBe('devi123')
})

test('input button clicked', () => {
    render(<Login setLogin={mockLoginFnc} />)
    const inputElementEmail = screen.getByTestId('input-email')
    const inputElementPassword = screen.getByTestId('input-password')
    const buttonElement = screen.getByTestId('button')
    // ketik di field
    fireEvent.change(inputElementEmail, inputElementPassword, {
        target: {
            value: 'sekararumk21@gmail.com',
            value: '123456'
        }
    })
    // klik button
    fireEvent.click(buttonElement)
    expect(inputElementEmail.value).toBeFalsy()
  
})
