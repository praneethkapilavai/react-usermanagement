
function UserList(){
    return(
        <div>
            <h1 className="mt-3">List of Users</h1>
        <table className="table">
            <thead>
                <tr>
                   <th>Username</th>
                   <th>DOB</th>
                   <th>Email</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        </div>
            
    )
}

export default UserList