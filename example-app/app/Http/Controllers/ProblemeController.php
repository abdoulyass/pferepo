<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Models\Problem;
use App\Models\Notification;
use Illuminate\Http\Request;
use App\Events\NotificationEvent;
use Illuminate\Support\Facades\Auth;

class ProblemeController extends Controller
{
    public function index()
{
    try {
        $problemes = Problem::with('user', 'avocat')->get();
        $problemes->each(function ($probleme) {
            $probleme->setAttribute('user_nom', $probleme->user ? $probleme->user->nom : 'Utilisateur inconnu');
            $probleme->setAttribute('avocat_nom', $probleme->avocat ? $probleme->avocat->nom : 'Avocat inconnu');
        });

        if ($problemes->isNotEmpty()) {
            return response()->json(['data' => $problemes], 200);
        } else {
            return response()->json(['message' => 'Aucun problème disponible'], 404);
        }
    } catch (\Exception $e) {
        return response()->json(['message' => 'Erreur lors de la récupération des problèmes', 'error' => $e->getMessage()], 500);
    }
}

    

public function delete($id)
{
    try {
        $problem = Problem::find($id);
        if ($problem) {
            $problem->delete(); // Supprimer le problème
            return response()->json(['message' => 'Problème supprimé avec succès'], 200);
        } else {
            return response()->json(['message' => 'Problème non trouvé'], 404);
        }
    } catch (\Exception $e) {
        return response()->json(['message' => 'Erreur lors de la suppression du problème', 'error' => $e->getMessage()], 500);
    }
}



    public function create(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'description' => 'required|string|max:255',
                'type' => 'required|string|max:255',
                'parties' => 'required|string|max:255',
                'document' => 'required|file|max:10240', // Taille maximale de 10 Mo pour le fichier
            ]);
    
            $documentPath = $request->file('document')->store('uploads'); // Stocker le fichier dans un répertoire "uploads"
    
            Problem::create([
                'description' => $request->description,
                'type' => $request->type,
                'parts' => $documentPath
               
            ]);
    
            return response()->json([
                'status' => 'success',
                'message' =>  $documentPath
            ]);
    
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'La validation a échoué',
                'errors' => $e->validator->getMessageBag()->toArray()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Une erreur est survenue'
            ], 500);
        }
    }
    

     
    public function demanderavocat(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'description' => 'required|string|max:255',
                'parts' => 'required|string|max:255',
                'selectedLawyer' => 'required|integer',
                'document' => 'required|file|max:10240', // Taille maximale de 10 Mo pour le fichier
            ]);
            $documentPath = $request->file('document')->store('uploads'); // Stocker le fichier dans un répertoire "uploads"
            Problem::create([
                'description' => $request->description,
                'parts' =>  $request->parts,
                'resolveur_id'=>16
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Request added successfully'
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
    
    public function afficherdemande()
    {
        $avocat_id = Auth::id();
        $relative_problems = Problem::where('resolveur_id', $avocat_id)->get();
        if ($relative_problems->isNotEmpty()) {
            return response()->json([
                'status' => 'success',
                'data' => $relative_problems,
            ]);
        } else {
            return response()->json([
                'status' => 'failed',
                'message' => 'There are no problems related to this lawyer'
            ]);
        }
    }
    public function demandertravail($id,request $req){
        $probleme =Problem::find($id);
        $probleme->resolveur_id=$req->userId;
        $probleme->save();
        
        if( $probleme){
            return response()->json(['message' => 'La demande de travail a été traitée avec succès'], 200);
        }
     
    }
    public function send(Request $request)
    {
       
        $notification = new Notification();
        $notification->message = 'This is a test notification';
        $notification->user_id = 2;// Remplacer par l'ID de l'utilisateur approprié
        $notification->save();
        event(new NotificationEvent($notification));

        return response()->json(['message' => 'Notification envoyée avec succès']);
    }
    public function accepter(Request $request){
    
    $probleme = Problem::find($request->probleme_id);
    $probleme->update(['etat' => 'Accepté']);
    return response()->json(['message' => 'Le problème a été accepté avec succès']);
    }

    public function refuser(Request $request){
    
        $probleme =Problem::find($request->probleme_id);
        $probleme->update(['etat' => 'refuser']);
        return response()->json(['message' => 'Le problème a été accepté avec succès']);
        }

    public function avocatproblemes(Request $request){
   
        $problemes = Problem::with('user')->where('resolveur_id', 2)
        ->whereNull('etat')
        ->get();

        return response()->json(['problemes' => $problemes]);   
    }
    public function getCasDetails($id)
    {
        $cas = Problem::find($id); // Récupérer les détails du cas avec l'identifiant spécifié
        if (!$cas) {
            return response()->json(['error' => 'Cas not found'], 404);
        }
        return response()->json($cas);
    } 
  
}
