<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\RegisterUser;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\JsonResponse;

final class RegisterController
{
    public function __invoke(RegisterRequest $request, RegisterUser $registerUser): JsonResponse
    {
        $registerUser->handle(
            $request->validated('name'),
            $request->validated('email'),
            $request->validated('password'),
            $request->validated('terms_version'),
        );

        return response()->json(['message' => 'Conta criada.'], 201);
    }
}
