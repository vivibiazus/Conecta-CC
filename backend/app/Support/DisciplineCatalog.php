<?php

namespace App\Support;

use App\Models\Discipline;
use Illuminate\Support\Facades\File;

final class DisciplineCatalog
{
    public static function sync(string $path): void
    {
        /** @var list<array{name: string, semester: int, workload_hours: int, syllabus_url: string|null}> $rows */
        $rows = json_decode(File::get($path), true, flags: JSON_THROW_ON_ERROR);
        $now = now();

        Discipline::upsert(
            array_map(fn (array $row): array => [...$row, 'created_at' => $now, 'updated_at' => $now], $rows),
            ['name'],
            ['semester', 'workload_hours', 'syllabus_url', 'updated_at'],
        );
    }
}
