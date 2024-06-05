<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class problem extends Model
{
    use HasFactory;

    protected $fillable = [
        'description','user_id','resolveur_id','parts','etat'
    ];
   


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Obtenez l'avocat qui a résolu ce problème.
     */
    public function avocat()
    {
        return $this->belongsTo(User::class, 'resolveur_id');
    }
}
