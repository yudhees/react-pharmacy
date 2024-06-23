<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login',[AuthController::class,'login'])->name('login');
Route::get('/register',[AuthController::class, 'register'])->name('register');
Route::post('/register-user',[AuthController::class, 'register_user'])->name('register_user');
Route::post('/login-user',[AuthController::class, 'login_user'])->name('login_user');
// assertDoesNotMatchRegularExpression
