<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $fillable = ['nama_unit'];

    public function barangKeluar()
    {
        return $this->hasMany(BarangKeluar::class, 'unit_id');
    }

    public function requests()
    {
        return $this->hasMany(request::class, 'unit_id');
    }
}
