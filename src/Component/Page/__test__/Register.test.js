import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import binarStore from '../../../store/store'
import Register from '../Register'

test( 'render register' , () => {
    render(<Provider store={binarStore}><Register /></Provider>)
    const registerElement = screen.getByTestId('register-container')
    expect(registerElement).toBeInTheDocument()
})