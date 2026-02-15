import  {Modal} from 'react-bootstrap'
import {set, useForm } from 'react-hook-form';
import { useState } from 'react';
function UserList(props){

    let [showModal , setShowModal] = useState(false)
    let {register , handleSubmit , setValue} = useForm()

    function openModal(){
        setShowModal(true)
        // closeModal()
    }
    function closeModal(){
        setShowModal(false)
    }
    function userToEdit(userObj){
        openModal()
        setValue("id" , userObj.id)
        setValue("name" , userObj.name )
        setValue("date" , userObj.date )
        setValue("email" , userObj.email )
    }
    function modifiedUser(modifiedUserObj){
        // console.log(modifiedUserObj)
        closeModal()
        props.modifyUser(modifiedUserObj)
    }

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
                            <td> <button className="btn btn-danger btn-sm bg-danger" onClick={()=>props.deleteUser(user.id)}>x</button></td>
                            <td> <button className="btn btn-warning btn-sm bg-warning" onClick={()=>userToEdit(user)} >Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Modal implementation (placeholder) */}
            
            <Modal show={showModal}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <form className='form' onSubmit={handleSubmit(modifiedUser)}>
                        <input type="text" {...register("id")} className='form-control mb-3' disabled/>
                        <input type="text" {...register("name")} className='form-control mb-3'/>
                        <input type="date" {...register("date")} className='form-control mb-3'/>
                        <input type="email" {...register("email")} className='form-control mb-3'/>
                        <button className='submit btn btn-success' >Save</button>
                    </form>
                </Modal.Body>
            </Modal>
            
        </div>
            
    );
}

export default UserList