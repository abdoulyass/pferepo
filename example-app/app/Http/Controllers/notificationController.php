<?php

namespace App\Http\Controllers;
use App\models\Notification;
use Illuminate\Http\Request;

class notificationController extends Controller
{
     public function usernotif($id){
          $notifications = Notification::where('user_id', $id)->get();
          return response()->json([
            'status' => 'success',
            'data' => $notifications
        ], 200);
     }
   
}
