<?php

use App\Models\Discipline;
use App\Models\User;
use App\Support\DisciplineCatalog;

it('carrega as 49 disciplinas obrigatórias da Matriz 2023', function () {
    expect(Discipline::count())->toBe(49)
        ->and(Discipline::where('semester', 8)->pluck('name')->all())
        ->toEqualCanonicalizing(['Gestão Empresarial e Empreendedorismo', 'Trabalho de Conclusão II'])
        ->and(Discipline::where('name', 'like', '%Empreededorismo%')->exists())->toBeFalse()
        ->and(Discipline::where('name', 'Computação Quântica')->exists())->toBeFalse() // eletiva
        ->and(Discipline::where('name', 'Algoritmos I')->sole()->syllabus_url)
        ->toBe('https://inf.passofundo.ifsul.edu.br/assets/docs/bcc/ementas/primeiro_semestre/PF_CC_1_Algoritmos_I.pdf');
});

it('não duplica ao sincronizar de novo', function () {
    DisciplineCatalog::sync(resource_path('catalog/matriz-2023.json'));

    expect(Discipline::count())->toBe(49);
});

it('lista o catálogo ordenado por semestre e nome', function () {
    $this->actingAs(User::factory()->create())
        ->getJson('/api/v1/disciplines')
        ->assertOk()
        ->assertJsonCount(49)
        ->assertJsonPath('0', ['id' => Discipline::where('name', 'Algoritmos I')->value('id'), 'name' => 'Algoritmos I', 'semester' => 1]);
});

it('exige login para ver o catálogo', function () {
    $this->getJson('/api/v1/disciplines')->assertUnauthorized();
});
