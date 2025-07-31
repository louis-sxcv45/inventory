<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Unit;
use App\Models\Request as RequestModel;


class RequestController extends Controller
{
    public function index(Request $request)
    {

        $requests = RequestModel::with('unit')->orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('requests/index', [
            'requests' => $requests 
        ]);
    }

    public function create()
    {
        $units = Unit::all();
        return Inertia::render('requests/create', [
            'units' => $units
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            // 'atk_item_id' => 'nullable|exists:atk_items,id',
            'nama_barang' => 'nullable|string|max:255',
            'tanggal' => 'required|date',
            'penerima' => 'required|string|max:255',
            'unit_id' => 'required|integer|exists:units,id',
            // 'unit' => 'required|string|max:255',
            'qty' => 'required|integer|min:1',
            'satuan' => 'required|string|max:50',
            'pic' => 'required|string|max:255',
        ]);

        // Pastikan user mengisi salah satu: atk_item_id atau nama_barang_baru
        // if (!$request->atk_item_id && !$request->nama_barang_baru) {
        //     return back()->withErrors(['atk_item_id' => 'Pilih barang atau isi nama barang baru'])->withInput();
        // }

        RequestModel::create([
            // 'atk_item_id' => $request->atk_item_id,
            'nama_barang' => $request->nama_barang ?? 'null', // disimpan jika barang baru
            'tanggal' => $request->tanggal,
            'penerima' => $request->penerima,
            'unit_id' => $request->unit_id,
            'qty' => $request->qty,
            'satuan' => $request->satuan,
            'pic' =>  Auth::user()->name,
            'status' => 'pending',
        ]);

        return redirect()->route('requests.index')->with('success', 'Permintaan ATK berhasil dikirim!');
    }

    // (Opsional) Update status oleh admin
    public function updateStatus($id)
    {
        $request = RequestModel::findOrFail($id);
        $request->status = 'done';
        $request->save();

        return redirect()->back()->with('success', 'Status berhasil diperbarui.');
    }
}
