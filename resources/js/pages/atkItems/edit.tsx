import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit ATK',
        href: '/atkItems',
    },
];

interface PageProps {
    item: {
        id: number;
        nama_barang: string;
        kode_barang: string;
        qty: number;
        satuan: string;
        lokasi_simpan: string;
    };
    [key: string]: any;
}

export default function EditATK() {
    const { item } = usePage<PageProps>().props;

    const { data, setData, patch, processing, errors } = useForm({
        nama_barang: item.nama_barang || '',
        kode_barang: item.kode_barang || '',
        qty: item.qty || 0,
        satuan: item.satuan || '',
        lokasi_simpan: item.lokasi_simpan || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        patch(route('atkItems.update', item.id)); // pastikan route benar
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit ATK" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg overflow-hidden">
                    <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />

                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit ATK</h2>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Nama Barang</label>
                            <input
                                type="text"
                                value={data.nama_barang}
                                onChange={(e) => setData('nama_barang', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.nama_barang && <span className="text-red-500 text-sm">{errors.nama_barang}</span>}
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Kode Barang</label>
                            <input
                                type="text"
                                value={data.kode_barang}
                                onChange={(e) => setData('kode_barang', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.kode_barang && <span className="text-red-500 text-sm">{errors.kode_barang}</span>}
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Jumlah</label>
                            <input
                                type="number"
                                value={data.qty}
                                onChange={(e) => setData('qty', Number(e.target.value))}
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.qty && <span className="text-red-500 text-sm">{errors.qty}</span>}
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Satuan</label>
                            <input
                                type="text"
                                value={data.satuan}
                                onChange={(e) => setData('satuan', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.satuan && <span className="text-red-500 text-sm">{errors.satuan}</span>}
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="w-40 text-sm font-medium text-gray-700">Lokasi Simpan</label>
                            <input
                                type="text"
                                value={data.lokasi_simpan}
                                onChange={(e) => setData('lokasi_simpan', e.target.value)}
                                className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.lokasi_simpan && (
                                <span className="text-red-500 text-sm">{errors.lokasi_simpan}</span>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-gray-500 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-full transition duration-200 inline-flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5 mr-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
