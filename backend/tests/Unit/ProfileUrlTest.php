<?php

use App\Support\ProfileUrl;

it('normaliza perfis do GitHub', function (string $input) {
    expect(ProfileUrl::github($input))->toBe('https://github.com/ana-silva');
})->with([
    'github.com/ana-silva',
    'https://github.com/ana-silva',
    'http://www.github.com/ana-silva/',
    'HTTPS://GitHub.com/ana-silva',
    'https://github.com/ana-silva?tab=repositories',
    'https://github.com/ana-silva#readme',
    '  github.com/ana-silva  ',
]);

it('recusa o que não é perfil do GitHub', function (string $input) {
    expect(ProfileUrl::github($input))->toBeNull();
})->with([
    'meu github',
    'https://github.com/ana-silva/repo',
    'https://github.com/',
    'https://evilgithub.com/ana',
    'https://github.com.evil.com/ana',
    'https://github.com:8080/ana',
    'https://user@github.com/ana',
    'ftp://github.com/ana',
    'javascript:alert(1)',
    'https://github.com/-ana',
    'https://github.com/ana-',
    'https://github.com/'.str_repeat('a', 40),
    'https://gist.github.com/ana',
]);

it('normaliza perfis do LinkedIn', function (string $input) {
    expect(ProfileUrl::linkedin($input))->toBe('https://www.linkedin.com/in/ana_silva-1');
})->with([
    'linkedin.com/in/ana_silva-1',
    'https://www.linkedin.com/in/ana_silva-1/',
    'http://br.linkedin.com/in/ana_silva-1',
    'https://pt.linkedin.com/in/ana_silva-1?utm_source=share&utm_medium=member_android',
    'https://www.linkedin.com/in/ana_silva-1#about',
    'HTTPS://WWW.LinkedIn.com/in/ana_silva-1',
]);

it('recusa o que não é perfil do LinkedIn', function (string $input) {
    expect(ProfileUrl::linkedin($input))->toBeNull();
})->with([
    'https://www.linkedin.com/company/ifsul',
    'https://www.linkedin.com/in/',
    'https://www.linkedin.com/in/ana/detalhes',
    'https://www.linkedin.com/posts/ana_123',
    'https://evil.com/in/ana',
    'https://linkedin.com.evil.com/in/ana',
    'https://abc.linkedin.com/in/ana',
    'https://www.linkedin.com:444/in/ana',
    'ftp://linkedin.com/in/ana',
]);
