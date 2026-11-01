<?php

namespace App\Http\Resources;

use App\Models\Discipline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Discipline */
final class DisciplineResource extends JsonResource
{
    /** @return array{id: int, name: string, slug: string, semester: int, workload_hours: int, syllabus_url: string|null} */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'semester' => $this->semester,
            'workload_hours' => $this->workload_hours,
            'syllabus_url' => $this->syllabus_url,
        ];
    }
}
