import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    console.log('beforeAllApp');
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Main App renders with all components on no login', () => {
    it('renders App component without crashing', () => {
        render(<App />);
    })

    it('App has expected elements', () => {
        const { container } = render(<App />);
    });
})

describe('Main App renders with all components on login', () => {
    it('renders App component without crashing', () => {
        render(<App isLoggedIn={true} />);
    })

    it('App has expected elements', () => {
        const { container } = render(<App isLoggedIn={true} />);
    })
})


describe('Main app behaves as expected on Ctrl+h keys', () => {
    it('Shows everything on Ctrl+h', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });
        const { container } = render(<App logOut={logOutMock} />);
        const component = container.firstChild;

        fireEvent.keyDown(component, { key: 'h', ctrlKey: true });

        expect(logOutMock).toHaveBeenCalled();
        expect(alertMock).toHaveBeenCalledWith('Logging you out');

        alertMock.mockRestore();
    })
})
