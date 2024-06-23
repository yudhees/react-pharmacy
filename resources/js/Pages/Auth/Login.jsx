import { useState } from "react";
import Layout from "../../components/Auth/layout.jsx";
import { Link, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import axios from "axios";
import ErrorMessage from "@/components/errorMessage.jsx"
const login = () => {
    const [show, setShow]=useState(false)
    const [error,setError]=useState('')
    const {data,setData}=useForm({
        email:"",
        password:'',
        remember:false,
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(name,value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(route('login_user'),data)
        .then(res=>{
            console.log(res);
            alert("Login Success")
        })
        .catch((err)=>{
            if(err.response.status==422){
            //    console.log(err.response.data);
             setError(err.response.data.message)
            }else
            console.error(err);
        })
    }
    return (
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label  className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" placeholder="jhon@example.com" name="email"
                      onChange={handleChange} value={data.email}
                    />
                </div>
                <div className="col-12">
                    <label  className="form-label">
                        Password
                    </label>
                    <div className="input-group" id="show_hide_password">
                        <input
                            type={show?'text':'password'}
                            className="form-control border-end-0"
                            placeholder="Enter Password"
                            name="password"
                            onChange={handleChange} value={data.password}
                        />
                        <a className="input-group-text bg-transparent" onClick={()=>setShow(!show)}>
                            <i className={show?'bi bi-eye-slash-fill':'bi bi-eye-fill'}></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            value={true}
                            name="remember"
                            onChange={(e)=>setData('remember',!data.remember)} checked={data.remember}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                        >
                            Remember Me
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <ErrorMessage success={false} message={error}/>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-grd-primary">
                            Login
                        </button>
                    </div>
                </div>
                <div className="col-12">
                    <div className="text-start">
                        <p className="mb-0">
                            Don't have an account yet?
                           <Link href={route('register')}>Sign up here</Link>
                        </p>
                    </div>
                </div>
            </form>
    );
};
login.layout = (page) => <Layout children={page} type="login" />;
export default login;
