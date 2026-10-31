<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('about')->nullable();
            $table->jsonb('interests')->default(new Expression("'[]'::jsonb"));
            $table->jsonb('can_help_with')->default(new Expression("'[]'::jsonb"));
            $table->jsonb('needs_help_with')->default(new Expression("'[]'::jsonb"));
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['about', 'interests', 'can_help_with', 'needs_help_with', 'github_url', 'linkedin_url']);
        });
    }
};
