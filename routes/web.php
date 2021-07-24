<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/anasayfa', function () {
    return view('anasayfa');
})->name("anasayfa");

Route::get('/hakkimizda', function () {
    return view('hakkimizda');
})->name("hakkimizda");

Route::get('/urunlerimiz', function () {
    return view('urunlerimiz');
})->name("urunlerimiz");

Route::get('/iletisim', function () {
    return view('iletisim');
})->name("iletisim");

