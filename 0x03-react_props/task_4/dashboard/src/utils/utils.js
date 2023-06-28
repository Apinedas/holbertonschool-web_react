export function getFullYear() {
    const now = new Date();
    return now.getFullYear();
}

export function getFooterCopy(isIndex) {
    const ret = isIndex ? "Holberton School" : "Holberton School main dashboard";
    return ret;
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}
