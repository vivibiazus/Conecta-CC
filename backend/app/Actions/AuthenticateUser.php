<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

final class AuthenticateUser
{
    public const INVALID_CREDENTIALS = 'E-mail ou senha incorretos.';

    public function handle(string $email, string $password): User
    {
        // RF-07: a mesma mensagem para e-mail inexistente e senha errada
        if (! Auth::guard('web')->attempt(['email' => $email, 'password' => $password])) {
            throw ValidationException::withMessages(['credentials' => self::INVALID_CREDENTIALS]);
        }

        /** @var User */
        return Auth::guard('web')->user();
    }
}
