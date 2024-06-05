<?php

namespace App\Http\Controllers;

use App\Models\Avis;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AvisController extends Controller
{
    public function index(): JsonResponse
    {
        $avis = Avis::with('user')->get();

        return response()->json([
            'status' => 'success',
            'data' => $avis
        ], 200);
    }
}
