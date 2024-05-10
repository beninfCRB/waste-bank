<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WasteTypeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('admin')->group(function () {
        Route::get('/waste-type', [WasteTypeController::class, 'index'])->name('waste-type');
        Route::post('/waste-type', [WasteTypeController::class, 'store']);
        Route::put('/waste-type/{id}/edit', [WasteTypeController::class, 'update']);
        Route::delete('/waste-type/{id}/delete', [WasteTypeController::class, 'destroy']);
    });
});

require __DIR__ . '/auth.php';
