<?php


namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $request->validate([
                'nom' => ['required', 'string', 'max:255'],
                'prenom' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
                'password' => ['required','confirmed',Rules\Password::defaults()],
            ]);

            $user = User::create([
                'nom' => $request->nom,
                'prenom'=>$request->prenom,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            event(new Registered($user));

            Auth::login($user);

            $token = $user->createToken('API Token')->plainTextToken;

            return response()->json([
                'status' => 'success',
                'message' => 'User registered successfully',
                'token'=> $token,
                'user'=> $user

            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
                
            ], $e->status);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}