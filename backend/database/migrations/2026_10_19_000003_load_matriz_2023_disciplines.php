<?php

use App\Support\DisciplineCatalog;
use Illuminate\Database\Migrations\Migration;

// migration de dados: assim o catálogo chega à produção sem depender dos seeders de desenvolvimento
return new class extends Migration
{
    public function up(): void
    {
        DisciplineCatalog::sync(resource_path('catalog/matriz-2023.json'));
    }

    public function down(): void
    {
        // nada a fazer: o down da 000001 apaga as tabelas
    }
};
