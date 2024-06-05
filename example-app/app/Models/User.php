<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'password',
        'role',
        'numero_carte_nationale',
        'secteur_activite',
        'adresse',
        'etat',
    ];
   
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function problemesSoumis()
    {
        return $this->hasMany(Problem::class, 'user_id');
    }

   
    public function problemesResolus()
    {
        return $this->hasMany(Problem::class, 'resolveur_id');
    }
    public function contacts()
    {
        return $this->hasMany(Contact::class, 'contact_id');
    }

    public function user_type(){
         return $this->role;
    }
     public function Notifications()
    {
        return $this->hasMany( Notifications::class);
    }
    
    public function Avis()
    {
        return $this->hasMany( Avis::class);
    }
    
    public function isAvocat(){
        return $this->role=='avocat';
    }
    public function isAdmin(){
        return $this->role === 'admin';
    }
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

}
