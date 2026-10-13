<?php

namespace App\Http\Controllers\Api\V1;

use App\Actions\AuthenticateUser;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;

final class LoginController
{
    public function __invoke(LoginRequest $request, AuthenticateUser $authenticate): UserResource
    {
        $user = $authenticate->handle($request->validated('email'), $request->validated('password'));

        $request->session()->regenerate(); // evita fixação de sessão

        return new UserResource($user);
    }
}
