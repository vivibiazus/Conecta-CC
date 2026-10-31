<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Resources\ProfileResource;
use Illuminate\Http\Request;

final class ShowProfileController
{
    public function __invoke(Request $request): ProfileResource
    {
        return new ProfileResource($request->user()->load('disciplines'));
    }
}
