<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data =
            [
                [
                    'name' => 'Test Admin',
                    'email' => 'admin@example.com',
                    'password' => Hash::make('123'),
                    'is_admin' => true
                ],
                [
                    'name' => 'Test User',
                    'email' => 'user@example.com',
                    'password' => Hash::make('123'),
                    'is_admin' => false
                ]
            ];


        foreach ($data as $object) {
            \App\Models\User::create($object);
        }
    }
}
