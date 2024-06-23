<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Hash;
use Validator,Auth;
class AuthController extends Controller
{
   public function login(){
     return inertia('Auth/Login');
   }
   public function register(){
    return inertia('Auth/Register');
   }
   public function register_user(Request $request){
    $request->validate([
        'username'=>'required',
        'password'=>'required',
        'email'=>'required|unique:users,email',
    ]);
      User::create([
        'name'=>$request->username,
        'password'=>Hash::make($request->password),
        'email'=>$request->email,
      ]);
      return response(['success'=>true,'message'=>'User Registered Successfully']);
   }
   public function login_user(Request $request){
    $validator=Validator::make($request->all(),[
        'email'=>'required|exists:users,email',
        'password'=>'required',
    ]);
    if($validator->fails())
    return response(['success'=>false,'message'=>$validator->errors()->first()],422);
    if(Auth::attempt(['email' => $request->email, 'password' => $request->password],$request->remember)){
        return response(['success'=>true,'message'=>'Login Successfully']);
    }
     return response(['success'=>false,'message'=>'In valid credencials']);
   }
}
