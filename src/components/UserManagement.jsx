import UserList from './UserList'
import UserForm from './UserForm'

function UserManagement(){


    return(
        <div className="container text-center">
            <h1 className='text-primary text-center display-2 mb-3'>User Management</h1>
            <div className="row text-center" >
                <div className='col md-6'>
                    <UserForm/>
                </div>
                <div className='col md-6'>
                    <UserList/>
                </div>
            </div>
        </div>
    )

}

export default UserManagement;