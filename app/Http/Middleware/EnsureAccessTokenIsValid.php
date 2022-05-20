<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use App\Models\User;

class EnsureAccessTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    public function handle(Request $request, Closure $next)
    {
        $access_token = $request->cookie('access_token');
        if ($access_token and $access_token != '' and
            User::where('access_token', $access_token)->exists()) 
        {
            return $next($request);
        }
        return response()->json([
            'errors' => [
                'name' => 'Unauthorized',
                ]
        ], 401);
    }
}
