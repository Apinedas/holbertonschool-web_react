import { getFullYear, getFooterCopy, getLatestNotification } from './utils'
import '@testing-library/jest-dom'

test('getFullYear returns actual year', () => {
    const now = new Date();
    expect(getFullYear()).toBe(now.getFullYear());
})

test('getFooterCopy returns correct string', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
})
