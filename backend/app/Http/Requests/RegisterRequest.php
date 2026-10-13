<?php

namespace App\Http\Requests;

use App\Rules\InstitutionalEmail;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

final class RegisterRequest extends FormRequest
{
    public const EMAIL_TAKEN = 'Não foi possível criar uma conta com este e-mail. Se você já possui cadastro, entre.';

    private const TERMS_OUTDATED = 'Os Termos de participação foram atualizados. Leia e aceite novamente.';

    protected function prepareForValidation(): void
    {
        $this->merge(['email' => Str::lower(trim((string) $this->input('email')))]);
    }

    /** @return array<string, mixed> */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'email' => ['bail', 'required', 'email', new InstitutionalEmail, 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
            'password_confirmation' => ['required', 'same:password'],
            'terms_version' => ['required', 'string', Rule::in([config('conectacc.terms_version')])],
        ];
    }

    /** @return array<string, string> */
    public function messages(): array
    {
        return [
            'name.required' => 'Informe seu nome completo.',
            'name.max' => 'Use no máximo 120 caracteres.',
            'email.required' => 'Informe um endereço de e-mail válido.',
            'email.email' => 'Informe um endereço de e-mail válido.',
            'email.unique' => self::EMAIL_TAKEN,
            'password.required' => 'Use pelo menos 8 caracteres.',
            'password.min' => 'Use pelo menos 8 caracteres.',
            'password_confirmation.required' => 'As senhas informadas não coincidem.',
            'password_confirmation.same' => 'As senhas informadas não coincidem.',
            'terms_version.required' => self::TERMS_OUTDATED,
            'terms_version.in' => self::TERMS_OUTDATED,
        ];
    }
}
