import UserList from './UserList'
import UserForm from './UserForm'
import { useState, useEffect} from 'react';

function UserManagement(){

    let [User , setUser]= useState([])


    async function  createUser(newUser){
        // setUser(newUser)
        let res = await fetch('http://localhost:3000/users' , {
            method : "POST",
            headers : {"Context-Type" : "application/json"},
            body : JSON.stringify(newUser)  
        })
        // console.log(res)
        // setUser(body)
        if(res.status === 201) readUser()
    }


    async function readUser(){
        let res = await fetch('http://localhost:3000/users')
        let data = await res.json()
        // console.log(data)
        setUser(data)
    }


    async function deleteUser(id){
        // check by ID
        let res = await fetch(`http://localhost:3000/users/${id}` , {
            method : "DELETE"
        })
        // console.log(res);
        if(res.status === 200) readUser()
    }

    async function modifyUser(modifiedUserObj){
        // console.log(modifiedUserObj)
        let res = await fetch (`http://localhost:3000/users/${modifiedUserObj.id}`, {
            method : 'PUT',
            headers :{ "Content-Type" : "application/json"},
            body : JSON.stringify(modifiedUserObj)
        })
        // console.log(res)
       if(res.status === 200) readUser()
    }

    useEffect(()=>{
        readUser()
    },[])

    return(
        <div className="container text-center">
            <h1 className='text-primary text-center display-2 mb-3'>User Management</h1>
            <div className="row text-center" >
                <div className='col md-6'>
                    <UserForm createUser = {createUser}/>
                </div>
                <div className='col md-6'>
                    <UserList deleteUser = {deleteUser} readUser = {readUser} modifyUser = {modifyUser} User = {User} />
                </div>
            </div>
        </div>
    )

}

export default UserManagement;