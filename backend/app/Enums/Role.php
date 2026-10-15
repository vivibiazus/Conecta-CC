<?php

namespace App\Enums;

enum Role: string
{
    case Aluno = 'ALUNO';
    case Moderador = 'MODERADOR';
    case Administrador = 'ADMINISTRADOR';

    // sem herança automática entre papéis: cada permissão é explícita (requisitos.md §1)
    public function canModerate(): bool
    {
        return match ($this) {
            self::Moderador, self::Administrador => true,
            self::Aluno => false,
        };
    }
}
