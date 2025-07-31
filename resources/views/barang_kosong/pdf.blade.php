<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Laporan Barang Kosong</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            color: #333;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .header h2 {
            margin: 0;
            font-size: 18px;
        }

        .table {
            width: 100%;
            border-collapse: collapse;
        }

        .table th {
            background-color: #f3f4f6;
            color: #374151;
            padding: 8px;
            text-align: left;
            border: 1px solid #e5e7eb;
        }

        .table td {
            padding: 8px;
            border: 1px solid #e5e7eb;
        }

        .text-center {
            text-align: center;
        }

        .footer {
            margin-top: 30px;
            text-align: right;
            font-size: 11px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>Laporan Barang Kosong</h2>
        <br>
        <p>Berikut merupakan laporan barang kosong di Kantor Telkom Witel Jakarta Centrum.</p>
    </div>

    <table class="table">
        <thead>
            <tr>
                <th class="text-center">No</th>
                <th>Nama Barang</th>
                <th>Kode Barang</th>
                <th>Lokasi Simpan</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($items as $index => $item)
            <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ $item->nama_barang }}</td>
                <td>{{ $item->kode_barang }}</td>
                <td>{{ $item->lokasi_simpan }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        Dicetak {{ \Carbon\Carbon::now()->translatedFormat('d F Y') }}
    </div>
</body>
</html>
