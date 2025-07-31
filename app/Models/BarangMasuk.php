<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BarangMasuk extends Model
{
    protected $table = 'barang_masuks'; 

    protected $fillable = [
        'atk_item_id',
        'tanggal',
        'qty',
        'satuan', 
        'pic',
    ];

    public function atkItem()
    {
        return $this->belongsTo(AtkItem::class, 'atk_item_id');
    }
}
