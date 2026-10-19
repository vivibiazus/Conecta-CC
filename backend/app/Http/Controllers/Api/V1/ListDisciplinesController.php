<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Resources\DisciplineResource;
use App\Models\Discipline;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

final class ListDisciplinesController
{
    public function __invoke(): AnonymousResourceCollection
    {
        return DisciplineResource::collection(Discipline::orderBy('semester')->orderBy('name')->get());
    }
}
