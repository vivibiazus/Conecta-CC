<?php

namespace App\Http\Resources;

use App\Models\Discipline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Discipline */
final class DisciplineResource extends JsonResource
{
    /** @return array{id: int, name: string, semester: int} */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'semester' => $this->semester,
        ];
    }
}
