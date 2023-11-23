
const Card = (props) => {
    let user = props.user
    return (<div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.contact}</h1>
    </div>)
}

export default Card