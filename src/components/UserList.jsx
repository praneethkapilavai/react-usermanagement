
function UserList(props){
    return(
        <div>
            <h1 className="mt-3 ">List of Users</h1>
        <table className="table  table-bordered table-striped">
            <thead>
                <tr>
                   <th>Username</th>
                   <th>DOB</th>
                   <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.User.map((user) => (
                    <tr key={user.id}>
                        <td >{user.name}</td>
                        <td >{user.date}</td>
                        <td >{user.email}</td>
                        <button className="btn btn-danger btn-sm bg-danger">x</button>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
            
    )
}

export default UserList