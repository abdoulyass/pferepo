<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'broadcasting/auth'], // Ajoutez ici les chemins pour lesquels vous souhaitez activer CORS

    'allowed_methods' => ['*'], // Autoriser toutes les méthodes (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => ['http://localhost:3000'], // Autoriser les requêtes provenant de localhost:3000

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Autoriser tous les en-têtes

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Si vous utilisez des cookies ou des sessions
    

];
