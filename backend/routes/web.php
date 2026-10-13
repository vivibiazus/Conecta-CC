<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

// a SPA React cuida de todas as rotas que não são da API, do Sanctum, do healthcheck, do painel ou da documentação
Route::get('/{any?}', function () {
    $index = public_path('spa/index.html');
    abort_unless(is_file($index), 404);

    return response(File::get($index))->header('Cache-Control', 'no-cache');
})->where('any', '^(?!api|sanctum|up|admin|docs).*$');
