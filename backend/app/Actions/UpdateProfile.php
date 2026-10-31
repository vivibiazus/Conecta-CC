<?php

namespace App\Actions;

use App\Models\User;
use Illuminate\Support\Facades\DB;

final class UpdateProfile
{
    /**
     * @param  array{display_name: string, discipline_ids: list<int>, about: ?string, interests: list<string>, can_help_with: list<string>, needs_help_with: list<string>, github_url: ?string, linkedin_url: ?string}  $data
     */
    public function handle(User $user, array $data): User
    {
        return DB::transaction(function () use ($user, $data): User {
            $user->fill([
                'display_name' => $data['display_name'],
                'about' => $data['about'] ?? null,
                'interests' => $data['interests'],
                'can_help_with' => $data['can_help_with'],
                'needs_help_with' => $data['needs_help_with'],
                'github_url' => $data['github_url'] ?? null,
                'linkedin_url' => $data['linkedin_url'] ?? null,
            ])->save();

            $user->disciplines()->sync($data['discipline_ids']);

            return $user;
        });
    }
}
