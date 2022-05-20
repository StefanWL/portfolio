<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [LoginController::class, 'login']);
Route::middleware('token')->post('/logout', [LoginController::class, 'logout']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();    
});

Route::get('/projects', [ProjectController::class, 'list']);
Route::get('/projects/{project:id}', [ProjectController::class, 'details']);
Route::middleware('token')->group(function () {
    Route::post('/projects/{project:id}', [ProjectController::class, 'edit']);
    Route::post('/projects', [ProjectController::class, 'add']);
    Route::delete('/projects/{project:id}', [ProjectController::class, 'delete']);
});

Route::get('/pages', [PageController::class, 'list']);
Route::get('/pages/{page:id}', [PageController::class, 'details']);
Route::middleware('token')->group(function () {     
    Route::post('/pages/{page:id}', [PageController::class, 'edit']);
    Route::post('/pages', [PageController::class, 'add']);
    Route::delete('/pages/{page:id}', [PageController::class, 'delete']);
});