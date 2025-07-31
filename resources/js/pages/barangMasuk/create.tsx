import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent, useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Masukkan Barang',
        href: '/barangMasuk/create',
    },
];

interface AtkItem {
    id: number;
    nama_barang: string;
}

interface PageProps {
    atkItems: AtkItem[];
    auth: {user: { name: string;};};
    [key: string]: any;
}

export default function Index() {
    const { atkItems, auth } = usePage<PageProps>().props;

    const { data, setData, post, reset } = useForm({
        atk_item_id: '',
        nama_barang_baru: '',
        kode_barang_baru: '',
        lokasi_simpan_baru: '',
        tanggal: '',
        qty: '',
        satuan: '',
        pic: auth.user.name || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('barangMasuk.store'));
         // pastikan route ini sesuai
    };

    // toggle input logic seperti di blade
    useEffect(() => {
        if (data.atk_item_id !== '') {
            setData((prev) => ({
                ...prev,
                nama_barang_baru: '',
                kode_barang_baru: '',
                lokasi_simpan_baru: '',
            }));
        }
    }, [data.atk_item_id]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Barang Masuk" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    
                    <form onSubmit={handleSubmit} className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Tambah Barang Masuk</h2>

                        {/* Pilih Barang yang Sudah Ada */}
                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Barang</label>
                            <select
                                name="atk_item_id"
                                value={data.atk_item_id}
                                onChange={(e) => setData('atk_item_id', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                            >
                                <option value="">-- Pilih Barang --</option>
                                {atkItems.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.nama_barang}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <hr />

                        <p className="text-sm font-semibold text-gray-700">Atau isi jika barang belum ada:</p>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Nama Barang Baru</label>
                            <input
                                type="text"
                                name="nama_barang_baru"
                                value={data.nama_barang_baru}
                                onChange={(e) => setData('nama_barang_baru', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                disabled={!!data.atk_item_id}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Kode Barang Baru</label>
                            <input
                                type="text"
                                name="kode_barang_baru"
                                value={data.kode_barang_baru}
                                onChange={(e) => setData('kode_barang_baru', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                disabled={!!data.atk_item_id}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Lokasi Simpan</label>
                            <input
                                type="text"
                                name="lokasi_simpan_baru"
                                value={data.lokasi_simpan_baru}
                                onChange={(e) => setData('lokasi_simpan_baru', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                disabled={!!data.atk_item_id}
                            />
                        </div>

                        <hr />

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Tanggal Masuk</label>
                            <input
                                type="date"
                                name="tanggal"
                                value={data.tanggal}
                                onChange={(e) => setData('tanggal', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Jumlah</label>
                            <input
                                type="number"
                                name="qty"
                                value={data.qty}
                                onChange={(e) => setData('qty', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Satuan</label>
                            <input
                                type="text"
                                name="satuan"
                                value={data.satuan}
                                onChange={(e) => setData('satuan', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">PIC</label>
                            <input
                                type="text"
                                name="pic"
                                value={data.pic}
                                readOnly
                                className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-gray-700"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-gray-500 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-full transition duration-200 inline-flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 448 512">
                                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                                Simpan
                            </button>
                        </div>
                    </form>
    
                </div>
            </div>
        </AppLayout>
    );
}
