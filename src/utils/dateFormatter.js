export default function dateFormatter(date) {
    const options = {
        dateStyle: 'medium',
        timeStyle: 'short',
    }

    return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
};