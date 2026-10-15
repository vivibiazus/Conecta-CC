<?php

use Illuminate\Support\Facades\File;

it('serve a SPA nas rotas do front e não intercepta a API', function () {
    $hadBuild = File::exists(public_path('spa/index.html'));
    if (! $hadBuild) {
        File::ensureDirectoryExists(public_path('spa'));
        File::put(public_path('spa/index.html'), '<div id="root"></div>');
    }

    try {
        $this->get('/home')->assertOk()->assertSee('id="root"', false);
        $this->get('/')->assertOk()->assertSee('id="root"', false);
        $this->getJson('/api/v1/nao-existe')->assertNotFound()->assertHeader('Content-Type', 'application/json');
    } finally {
        if (! $hadBuild) {
            File::deleteDirectory(public_path('spa'));
        }
    }
});
