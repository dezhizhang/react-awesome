

function User() {
    const users = new Array(100).fill(1);
    return <ul>
        {
            users.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
}

export default User;
