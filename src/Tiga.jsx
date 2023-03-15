function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user= {
    firstName: 'Angeline',
    lastName: 'Sirape'
};

const element = (
    <h1>
    {formatName(user)}
    </h1>
);

function Tiga() {
    return (
        element
    );
}

export default Tiga;