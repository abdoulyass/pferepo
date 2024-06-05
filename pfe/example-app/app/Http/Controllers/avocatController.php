<?php

namespace App\Http\Controllers;
use App\models\user;
use Illuminate\Http\Request;

class avocatController extends Controller
{
    public function index()
{
    // Fetch all users with the role of avocat and etat 0
    $avocats = User::where('role', 'avocat')->where('etat', 0)->get();
    return response()->json(['data' => $avocats], 200);
}

    // Accept an avocat
    public function accept($id)
    {
        $avocat = User::find($id);
        if ($avocat && $avocat->role == 'avocat') {
            $avocat->etat = true; // Assume there's an etat field for status
            $avocat->save();
            return response()->json(['message' => 'Avocat accepted successfully'], 200);
        } else {
            return response()->json(['message' => 'Avocat not found or does not have the role'], 404);
        }
    }

    // Reject an avocat
    public function reject($id)
    {
        $avocat = User::find($id);
        if ($avocat && $avocat->role == 'avocat') {
            $avocat->etat = false; // Assume there's an etat field for status
            $avocat->save();
            return response()->json(['message' => 'Avocat accepted successfully'], 200);
        } else {
            return response()->json(['message' => 'Avocat not found or does not have the role'], 404);
        }
    }
}
