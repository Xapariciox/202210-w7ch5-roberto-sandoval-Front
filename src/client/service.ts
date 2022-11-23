const apiUrl = 'https://back-w7-wh5.onrender.com/robots';

export const getRobots = () => {
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InBhY28iLCJpYXQiOjE2NjkxMTQyOTh9.kcK-5tbDR1EUP7m1xaAAB0fPmds0sxhA0_OwChbtXno';
    const url = 'http://localhost:3300/users/robots';
    fetch(url, {
        headers: {
            'Content-type': 'application/json',
            Authentication: `Bearer ${token}`,
        },
    });
};

export const login = (data: Array<string>) => {
    const url = apiUrl + '/users/login';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' },
    }).then((resp) => resp.json());
};
