<?php

use App\Models\User;

it('devolve 401 em /me sem sessão', function () {
    $this->getJson('/api/v1/me')->assertUnauthorized();
});

it('devolve o usuário logado em /me', function () {
    $user = User::factory()->moderator()->create(['display_name' => 'Marcelo Henrique Germiniani Panho']);

    $this->actingAs($user, 'web')
        ->getJson('/api/v1/me')
        ->assertOk()
        ->assertJson(['id' => $user->id, 'role' => 'MODERADOR', 'initials' => 'MP']);
});

it('encerra a sessão no logout', function () {
    $user = User::factory()->create();

    $this->actingAs($user, 'web')->postJson('/api/v1/logout')->assertNoContent();

    $this->assertGuest('web');
});
