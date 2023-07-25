import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react'
import WithLogging from './WithLogging';

// Dummy pure HTML component
const DummyComponent = () => <div>Dummy Component</div>;

// Dummy Login component
class Login extends React.Component {
    render() {
        return <div>Login Component</div>;
    }
}

describe('WithLogging', () => {
    test('console.log called on mount and unmount with Component for pure HTML component', () => {
        const WrappedComponent = WithLogging(DummyComponent);
        const spyConsoleLog = jest.spyOn(console, 'log');

        render(<WrappedComponent />);
        expect(spyConsoleLog).toHaveBeenCalledWith('Component DummyComponent is mounted');

        spyConsoleLog.mockRestore();
    });

    test('console.log called on mount and unmount with component name for Login component', () => {
        const WrappedComponent = WithLogging(Login);
        const spyConsoleLog = jest.spyOn(console, 'log');
        
        render(<WrappedComponent />);
        expect(spyConsoleLog).toHaveBeenCalledWith('Component Login is mounted');

        spyConsoleLog.mockRestore();
    });
});
