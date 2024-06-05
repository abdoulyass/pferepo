<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\message;
class chatController extends Controller
{
public function index(request $req){
    event(new message($req->nom) );

}


public function demanderavocat(Request $req)
{
    try {
        $validatedData = $req->validate([
            'description' => 'required|string|max:255',
            'parts' => 'required|string|max:255',
            'selectedLawyer' => 'required|integer', // Assurez-vous que c'est un entier
        ]);

        Problem::create([
            'description' => $req->description,
            'parts' => $req->parts,
            'resolveur_id' => $req->selectedLawyer, // Utilisez selectedLawyer au lieu de avocat_id
            'user_id' => 1
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'request added successfully'
        ]);

    } catch (ValidationException $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Validation failed',
            'errors' => $e->validator->getMessageBag()->toArray()
        ], 422);

    } catch (\Exception $e) {
        return response()->json([
            'status' => 'error',
            'message' => 'Something went wrong'
        ], 500);
    }
}
}
