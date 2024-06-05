<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Avis;
use App\Models\User;

class AvisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Assurez-vous d'avoir des utilisateurs existants ou créez-en des factices
        User::factory(10)->create(); // Si vous avez une factory pour User

        // Créez des avis de test
        Avis::factory()->count(10)->create();
    }
}
