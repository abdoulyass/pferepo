<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Isavocat
{
    public function handle(Request $request, Closure $next)
    {
        // Vérifier si l'utilisateur est authentifié
        if (auth()->check()) {
            // Vérifier si l'utilisateur est un avocat
            if (auth()->user()->isAvocat()) {
                return $next($request);
            }
        }

        // Retourner une réponse non autorisée si l'utilisateur n'est pas un avocat
        return response('Non autorisé', 403);
    }
}
