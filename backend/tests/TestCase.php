<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        // o Sanctum só inicia a sessão para requisições vindas de um domínio stateful
        $this->withHeader('Referer', 'http://localhost');
    }
}
