<?php

use App\Http\Controllers\AtkItemController;
use App\Http\Controllers\BarangKeluarController;
use App\Http\Controllers\BarangMasukController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');

//     Route::get('/atkItems', [AtkItemController::class, 'index'])->name('atkItems.index');
//     Route::get('/atkItems', [AtkItemController::class, 'index'])->name('atkItems.index');
//     // Route::get('/atkItems/create', [AtkItemController::class, 'create'])->name('atkItems.create');
//     // Route::get('/atkItems/habis', [AtkItemController::class, 'habis'])->name('atkItems.habis');
//     Route::get('/atkItems/export-pdf', [AtkItemController::class, 'exportPdf'])->name('atkItems.exportPdf');
//     Route::post('/atkItems/store', [AtkItemController::class, 'store'])->name('atkItems.store');
//     Route::get('/atkItems/{id}/edit', [AtkItemController::class, 'edit'])->name('atkItems.edit');
//     Route::patch('/atkItems/{id}', [AtkItemController::class, 'update'])->name('atkItems.update');

//     Route::get('/barangMasuk', [BarangMasukController::class, 'index'])->name('barangMasuk.index');
//     Route::get('/barangMasuk/create', [BarangMasukController::class, 'create'])->name('barangMasuk.create');
//     Route::post('/barangMasuk/store', [BarangMasukController::class, 'store'])->name('barangMasuk.store');

//     Route::get('/barangKeluar', [BarangKeluarController::class, 'index'])->name('barangKeluar.index');
//     Route::get('/barangKeluar/create', [BarangKeluarController::class, 'create'])->name('barangKeluar.create');
//     Route::post('/barangKeluar/store', [BarangKeluarController::class, 'store'])->name('barangKeluar.store');

//     Route::get('/barangKosong', [AtkItemController::class, 'habis'])->name('barangKosong.index');

//     Route::get('/requests', [RequestController::class, 'index'])->name('requests.index');
//     Route::get('/requests/create', [RequestController::class, 'create'])->name('requests.create');
//     Route::post('/requests/store', [RequestController::class, 'store'])->name('requests.store');
//     Route::patch('/requests/{id}/done', [RequestController::class, 'updateStatus'])->name('requests.updateStatus');

//     Route::get('/units', [UnitController::class, 'index'])->name('unit.index');
//     Route::get('/units/create', [UnitController::class, 'create'])->name('unit.create');
//     Route::post('/units/store', [UnitController::class, 'store'])->name('unit.store');

//     // Route::get('users', [RegisteredUserController::class, 'index'])->name('register.index');
//     // Route::get('users', [RegisteredUserController::class, 'create'])->name('register.create');
//     // // Route::post('users', [RegisteredUserController::class, 'store'])->name('register.store');

//     Route::get('manageUser', [\App\Http\Controllers\UserController::class, 'index'])->name('manageUser.index');
//     Route::get('manageUser/create', [\App\Http\Controllers\UserController::class, 'create'])->name('manageUser.create');
//     Route::post('manageUser/store', [\App\Http\Controllers\UserController::class, 'store'])->name('manageUser.store');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/atkItems', [AtkItemController::class, 'index'])->name('atkItems.index');
    Route::post('/atkItems/store', [AtkItemController::class, 'store'])->name('atkItems.store');
    Route::get('/atkItems/export-pdf', [AtkItemController::class, 'exportPdf'])->name('atkItems.exportPdf');
    
    Route::get('/barangMasuk', [BarangMasukController::class, 'index'])->name('barangMasuk.index');
    Route::get('/barangMasuk/create', [BarangMasukController::class, 'create'])->name('barangMasuk.create');
    Route::post('/barangMasuk/store', [BarangMasukController::class, 'store'])->name('barangMasuk.store');

    Route::get('/barangKeluar', [BarangKeluarController::class, 'index'])->name('barangKeluar.index');
    Route::get('/barangKeluar/create', [BarangKeluarController::class, 'create'])->name('barangKeluar.create');
    Route::post('/barangKeluar/store', [BarangKeluarController::class, 'store'])->name('barangKeluar.store');

    Route::get('/requests', [RequestController::class, 'index'])->name('requests.index');
    Route::get('/requests/create', [RequestController::class, 'create'])->name('requests.create');
    Route::post('/requests/store', [RequestController::class, 'store'])->name('requests.store');
    Route::patch('/requests/{id}/done', [RequestController::class, 'updateStatus'])->name('requests.updateStatus');

    Route::get('/barangKosong', [AtkItemController::class, 'habis'])->name('barangKosong.index');
});

// Route khusus admin
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/manageUser', [UserController::class, 'index'])->name('manageUser.index');
    Route::get('/manageUser/create', [UserController::class, 'create'])->name('manageUser.create');
    Route::post('/manageUser/store', [UserController::class, 'store'])->name('manageUser.store');
    
    Route::get('/units', [UnitController::class, 'index'])->name('unit.index');
    Route::get('/units/create', [UnitController::class, 'create'])->name('unit.create');
    Route::post('/units/store', [UnitController::class, 'store'])->name('unit.store');
    
    // Route edit ATK (hanya admin)
    Route::get('/atkItems/{id}/edit', [AtkItemController::class, 'edit'])->name('atkItems.edit');
    Route::patch('/atkItems/{id}', [AtkItemController::class, 'update'])->name('atkItems.update');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
