<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\UpdateProfile;
use App\Http\Requests\UpdateProfileRequest;
use App\Http\Resources\ProfileResource;

final class UpdateProfileController
{
    public function __invoke(UpdateProfileRequest $request, UpdateProfile $updateProfile): ProfileResource
    {
        return new ProfileResource($updateProfile->handle($request->user(), $request->profileData())->load('disciplines'));
    }
}
