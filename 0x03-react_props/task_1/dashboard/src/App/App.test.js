import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('Main App renders with all components', () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName('Notifications').length).toBe(1);
    expect(container.getElementsByClassName('App-header').length).toBe(1);
    expect(container.getElementsByClassName('App-body').length).toBe(1);
    expect(container.getElementsByClassName('App-footer').length).toBe(1);
});
