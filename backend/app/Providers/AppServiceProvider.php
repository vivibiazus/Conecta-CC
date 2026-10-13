<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('access-moderation', fn (User $user): bool => $user->role->canModerate());

        RateLimiter::for('register', fn (Request $request) => Limit::perMinute(5)
            ->by((string) $request->ip())
            ->response(fn (Request $request, array $headers) => self::tooManyAttempts($headers)));
    }

    /** @param array<string, string|int> $headers */
    private static function tooManyAttempts(array $headers): JsonResponse
    {
        return response()->json(
            ['message' => "Muitas tentativas. Tente novamente em {$headers['Retry-After']} segundos."],
            429,
            $headers,
        );
    }
}
