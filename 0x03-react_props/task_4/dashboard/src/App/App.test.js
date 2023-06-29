import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Main App renders with all components on no login', () => {
    it('renders App component without crashing', () => {
        render(<App />);
    })

    it('App has expected elements', () => {
        const { container } = render(<App />);
        expect(container.getElementsByClassName('Notifications').length).toBe(0);
        expect(container.getElementsByClassName('App-header').length).toBe(1);
        expect(container.getElementsByClassName('App-body').length).toBe(1);
        expect(container.getElementsByClassName('App-footer').length).toBe(1);
        expect(container.querySelector('#CourseList')).toBe(null);
    });
})

describe('Main App renders with all components on login', () => {
    it('renders App component without crashing', () => {
        render(<App isLoggedIn={true} />);
    })

    it('App has expected elements', () => {
        const { container } = render(<App isLoggedIn={true} />);
        expect(container.getElementsByClassName('menuItem').length).toBe(1);
        expect(container.getElementsByClassName('App-header').length).toBe(1);
        expect(container.getElementsByClassName('App-body').length).toBe(0);
        expect(container.getElementsByClassName('App-footer').length).toBe(1);
        expect(container.querySelectorAll('#CourseList').length).toBe(1);
    })
})
