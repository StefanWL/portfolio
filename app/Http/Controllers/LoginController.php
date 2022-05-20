<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'name' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials))
        {
            $user = Auth::user();
            $user->access_token = Str::random(40);
            $user->save();

            $response = response()->json([
                'user' => $user
            ]);
            $response->withCookie(cookie('access_token', $user->access_token, '20160'));

            return $response;
        }

        return response()->json([
            'errors' => [
                'name' => 'The provided credentials do not match our records.',
                ]
        ], 422);
    }

    public function logout(Request $request)
    {
        $user = User::where('access_token', $request->cookie('access_token'))->first();
        $user->access_token = '';
        $user->save();

        return response()->json('Successfully logged out');
    }
}

