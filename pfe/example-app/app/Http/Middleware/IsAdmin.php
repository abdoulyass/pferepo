<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Vérifier si l'utilisateur est administrateur
        if (auth()->check() && auth()->user()->isAdmin()) {
            return $next($request);
        }

        // Retourner une réponse non autorisée si l'utilisateur n'est pas administrateur
        return response('Non autorisé', 403);
    }
}
