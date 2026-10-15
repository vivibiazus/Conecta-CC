<?php

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

it('libera a Moderação só para MODERADOR e ADMINISTRADOR', function (Role $role, bool $allowed) {
    $user = User::factory()->create(['role' => $role]);

    expect(Gate::forUser($user)->allows('access-moderation'))->toBe($allowed);
})->with([
    'ALUNO' => [Role::Aluno, false],
    'MODERADOR' => [Role::Moderador, true],
    'ADMINISTRADOR' => [Role::Administrador, true],
]);

it('cria usuário como ALUNO por padrão', function () {
    expect(User::factory()->create()->fresh()->role)->toBe(Role::Aluno);
});

it('o banco recusa papel fora da lista', function () {
    $user = User::factory()->create();

    expect(fn () => DB::table('users')->where('id', $user->id)->update(['role' => 'SUPERADMIN']))
        ->toThrow(QueryException::class);
});

it('o banco recusa e-mail com maiúsculas', function () {
    expect(fn () => User::factory()->create(['email' => 'Ana@academico.ifsul.edu.br']))
        ->toThrow(QueryException::class);
});
