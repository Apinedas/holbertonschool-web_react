import { render } from '@testing-library/react'
import App from './App'

test("Main App renders, and contains expected structure", () => {
    const { container } = render(<App />);
    const appheader = container.getElementsByClassName('App-header');
    const appbody = container.getElementsByClassName('App-body');
    const appfooter = container.getElementsByClassName('App-footer');
    expect(appbody.length).toBe(1);
    expect(appheader.length).toBe(1);
    expect(appfooter.length).toBe(1);
})
