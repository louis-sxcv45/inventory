<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Unit;

class UnitController extends Controller
{
    public function index(Request $request)
    {

        return Inertia::render('manageUnit/index', [
            'units' => Unit::paginate(9)
        ]);
    }

    public function create()
    {
        return Inertia::render('manageUnit/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_unit' => 'required|string|max:255'
        ]);

        Unit::create([
            'nama_unit' => $request->nama_unit,
        ]);

        return redirect()->route('unit.index')
            ->with('success', 'Unit berhasil ditambahkan!');
    }
}
