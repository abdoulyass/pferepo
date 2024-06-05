<?php

namespace Database\Factories;

use App\Models\Avis;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class AvisFactory extends Factory
{
    protected $model = Avis::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(), // Assume you have a User factory
            'message' => $this->faker->paragraph,
        ];
    }
}
