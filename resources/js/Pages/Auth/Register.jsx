import { Link, useForm } from "@inertiajs/react";
import Layout from "@/components/Auth/layout.jsx";
import { useState } from "react";
import { route } from "ziggy-js";
import  ErrorMessage  from "@/components/errorMessage.jsx";
import axios from "axios";
const Register = () => {
    const [show, setShow]=useState(false)
    const {data,setData}=useForm({
        email:'',username:'',password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(name,value)
    }
    const [errors,setErrors] =useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(route('register_user'),data)
        .then(res=>{
            console.log(res.data)
            setData({email:'',username:"",password:''})
        })
        .catch(err=>{
            if(err.response.status==422){
                 setErrors(err.response.data.errors)
            }else
            console.error(err);
        })
    }
    return (
        <>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label  className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Jhon" value={data.username}
                    onChange={handleChange}/>
                    <ErrorMessage success={false} message={errors?.username}/>
                </div>
                <div className="col-12">
                    <label  className="form-label">Email Address</label>
                    <input type="email" className="form-control"  placeholder="example@user.com" value={data.email}
                    onChange={handleChange} name="email"/>
                    <ErrorMessage success={false} message={errors?.email}/>
                </div>
                <div className="col-12">
                    <label  className="form-label">Password</label>
                    <div className="input-group" id="show_hide_password">
                        <input type={show?'text':'password'} className="form-control border-end-0"  placeholder="Enter Password" value={data.password} onChange={handleChange} name="password"/>
                            <a  onClick={()=>setShow(!show)} className="input-group-text bg-transparent">
                            <i className={show?'bi bi-eye-slash-fill':'bi bi-eye-fill'}></i>
                            </a>
                    </div>
                    <ErrorMessage success={false} message={errors?.password}/>
                </div>
                <div className="col-12">
                    <div className="d-grid">
                        <button type="submit" className="btn btn-grd-danger">Register</button>
                    </div>
                </div>
                <div className="col-12">
                    <div className="text-start">
                        <p className="mb-0">Already have an account? <Link href={route('login')}>Sign in here</Link></p>
                    </div>
                </div>
            </form>
        </>
    )
}
Register.layout = (page) => <Layout children={page} type="create" />
export default Register;
