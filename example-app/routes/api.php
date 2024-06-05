<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProblemeController;
use App\Http\Controllers\preinscption;
use App\Http\Controllers\chatController;
use App\Http\Controllers\AvisController;
use App\Http\Controllers\notificationController;
use App\Http\Controllers\userController;
use App\Http\Controllers\avocatController;
use Illuminate\Support\Facades\Broadcast;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Broadcast::routes(['middleware' => ['auth:api']]);
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');


Route::middleware(['auth:sanctum'])->post('/preinscription',[preinscption::class,'update']);
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');
                Route::post('/pusher/auth', function (Request $request) {
                    if (auth()->check()) {
                        return Broadcast::auth($request);
                    }
                    abort(403);
                });
Route::post('/demanderAvocaat', [ProblemeController::class, 'demanderavocat']);
Route::post('/postNewprblm',[ProblemeController::class,'create']);
Route::get('/problmes',[ProblemeController::class,'index']);
Route::post('/problem/{id}/delete', [ProblemeController::class, 'delete']);
Route::post('/demanderAvocaat', [ProblemeController::class, 'demanderavocat']);
Route::post('/postNewprblm',[ProblemeController::class,'create']);
Route::get('/problmes',[ProblemeController::class,'index']);
Route::middleware(['auth:sanctum'])->group(function () {
Route::post('/refuser', [ProblemeController::class, 'refuser']);
Route::get('/avocatproblemes', [ProblemeController::class, 'avocatproblemes']);

});
Route::post('/sendnotif',[ProblemeController::class,'send']);
Route::get('/usernotifcation/{id}', [notificationController::class, 'usernotif']);
Route::post('/accepter', [ProblemeController::class, 'accepter']);
Route::get('/allavis',[AvisController::class,'index']);
Route::get('/avocats', [AvocatController::class, 'index']);
Route::post('/avocat/accepter/{id}', [AvocatController::class, 'accept']);
Route::post('/avocat/refuser/{id}', [AvocatController::class, 'reject']);

Route::get('cas/{id}', [ProblemeController::class, 'getCasDetails']);
Route::put('/problemes/{id}/demandertravail', [ProblemeController::class, 'demandertravail']);
Route::post('/addNewavocat',[userController::class, 'store']);