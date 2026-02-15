import { useEffect } from "react";
import { useForm } from "react-hook-form";
function UserForm(props){

    let {register , handleSubmit , formState:{errors}} = useForm()

    return(
        <div className="mt-3">
            <h1>Add a new User</h1>
            <form className="m-3" onSubmit={handleSubmit(props.createUser)}>
                <input type="text" {...register("name" , {required:true})} placeholder="Username" className="form-control mb-3"/>
                {errors.name?.type === 'required' && <p className="text-danger">Please Enter Name</p> }
                <input type="date" {...register("date")} className="form-control mb-3" />
                <input type="email" {...register("email" , {required:true })} className="mb-3 form-control" placeholder="Email" />
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )

}
export default UserForm;