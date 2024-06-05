<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class userController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'contact' => 'required|string',
            'address1' => 'required|string',
        ]);

        $user = new User();
        $user->nom = $request->input('firstName');
        $user->prenom= $request->input('lastName');
        $user->email = $request->input('email');
        $user->adresse = $request->input('address1');
        $user->role="avocat";
        $user->etat=1;
        $user->numero_carte_nationale= $request->input('nationalID');
        $user->password = bcrypt('password');
     
        $user->save();

        return response()->json($user, 201);
    }
}
