<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::truncate();
        Project::truncate();
        
        User::create([
            'name' => 'Stefan',
            'email' => 'stefan_whittaker-lee@alumni.brown.com',
            'password' => Hash::make('password'),
        ]);
    }
}
