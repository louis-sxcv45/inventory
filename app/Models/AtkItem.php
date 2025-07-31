<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AtkItem extends Model
{
    protected $table = 'atk_items'; 

    protected $fillable = [
        'nama_barang',
        'kode_barang',
        'qty',
        'satuan',
        'lokasi_simpan',
    ];

    public function barangMasuk()
    {
        return $this->hasMany(BarangMasuk::class, 'atk_item_id');
    }

    public function barangKeluar()
    {
        return $this->hasMany(BarangKeluar::class, 'atk_item_id');
    }

    public function requests()
    {
        return $this->hasMany(Request::class, 'atk_item_id');
    }
}
