<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property int $semester
 * @property int $workload_hours
 * @property string|null $syllabus_url
 */
class Discipline extends Model
{
    protected function casts(): array
    {
        return [
            'semester' => 'integer',
            'workload_hours' => 'integer',
        ];
    }
}
