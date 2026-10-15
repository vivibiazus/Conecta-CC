<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('terms_acceptances', function (Blueprint $table) {
            $table->id();
            // sem cascade: o registro do aceite não some junto com o usuário (política de exclusão ainda indefinida)
            $table->foreignId('user_id')->constrained();
            $table->string('version', 20);
            $table->timestampTz('accepted_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('terms_acceptances');
    }
};
