<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('disciplines', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150)->unique();
            $table->unsignedSmallInteger('semester');
            $table->unsignedSmallInteger('workload_hours');
            // referência à ementa oficial no site do IFSul; o PDF não é copiado (spec §3)
            $table->string('syllabus_url', 500)->nullable();
            $table->timestamps();
        });

        DB::statement('ALTER TABLE disciplines ADD CONSTRAINT disciplines_semester_check CHECK (semester BETWEEN 1 AND 8)');

        Schema::create('discipline_user', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('discipline_id')->constrained()->restrictOnDelete();
            $table->primary(['user_id', 'discipline_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('discipline_user');
        Schema::dropIfExists('disciplines');
    }
};
