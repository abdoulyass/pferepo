<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class preinscption extends Controller
{
    public function update(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'contact' => 'required|string',
            'address1' => 'required|string',
            'sector' => 'required|string',
            'nationalID' => 'required|string',
            'professionalEmail' => 'required|email',
            'certificat' => 'nullable|mimes:pdf,doc,docx,png,jpg,jpeg|max:2048', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Retrieve the authenticated user
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        // Update user information
        $user->adresse = $request->address1;
        $user->secteur_activite = $request->sector;
        $user->numero_carte_nationale = $request->nationalID;
        // $user->email_professionnel = $request->professionalEmail;

        // Handle file upload if exists
        if ($request->hasFile('certificat')) {
            $file = $request->file('certificat');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads'), $fileName);
            $user->certificat = $fileName; // Update this line if you want to store the file name
        }

        // Save user data
        $user->save();

        return response()->json(['message' => 'User updated successfully'], 200);
    }
}
