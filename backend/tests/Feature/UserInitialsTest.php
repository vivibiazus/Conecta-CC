<?php

use App\Models\User;

it('gera as iniciais pelo primeiro e último nome de exibição', function (string $displayName, string $initials) {
    expect((new User(['display_name' => $displayName]))->initials())->toBe($initials);
})->with([
    ['Viviane Biazus Aneris', 'VA'],
    ['Marcelo Henrique Germiniani Panho', 'MP'],
    ['Ana Silva', 'AS'],
    ['ana silva', 'AS'],
    ['Ana', 'A'],
    ['  Érica   Ômega  ', 'ÉÔ'],
]);
