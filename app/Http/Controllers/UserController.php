<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
   public function index()
    {
        $users = User::where('role', '!=', 'admin')
            ->paginate(10);
        return inertia::render('manageUser/index', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('manageUser/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // event(new Registered($user));

        // Auth::login($user);

        return redirect()->route('manageUser.index')->with('success', 'User berhasil ditambahkan!');
    }

}
