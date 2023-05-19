// const UserIndex = () => {
//     return (
//         <div class="container-fluid ml-3">
//             <h1>Welcome User</h1>
//             <hr />
//         </div>
//     )
// }

// export default UserIndex;

const IndexGreeting = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const name = user.Email.split('@')[0]; // extracts the name from the email

    return (
        <div className="container-fluid ml-3">
            <h1>Welcome {name}!</h1>
            <hr />
        </div>
    )
}

export default IndexGreeting;