import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
// import { useState } from 'react';
import { Head, usePage, router, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barang Kosong',
        href: '/barangKosong',
    },
];

interface BarangKosong {
    id: number;
    nama_barang: string;
    kode_barang: string;
    lokasi_simpan: string;

}

interface PageProps {
    barangKosong: {
        data: BarangKosong[];
        links: { url: string | null; label: string; active: boolean }[];
        total: number;
        per_page: number;
        from:number;
    };
    [key: string]: any;
}


export default function Index() {
    const page = usePage<PageProps>();
    // const { start_date } = page.props;
    // const { end_date } = page.props;
    const { barangKosong } = page.props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Barang Kosong" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg overflow-hidden">
                    <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />

                    <div className="p-4 sm:p-6 text-gray-900">
                        {/* Header Responsive */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                            <h2 className="font-semibold text-lg sm:text-2xl text-gray-800">
                                List Barang Kosong
                            </h2>
                            <Link
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(route('atkItems.exportPdf'), '_blank');
                                }}
                                className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-printer"
                                >
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
                                    <rect x="6" y="14" width="12" height="8" rx="1" />
                                </svg>
                                Print
                            </Link>
                        </div>

                        {/* Tabel Responsif */}
                        <div className="overflow-x-auto bg-white rounded-lg shadow">
                            <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                                <thead className="bg-gray-50 text-gray-600 font-medium">
                                    <tr>
                                        <th className="w-16 text-center px-4 sm:px-6 py-3 border-b">No</th>
                                        <th className="text-center px-6 py-3 border-b">Nama Barang</th>
                                        <th className="text-center px-6 py-3 border-b">Kode Barang</th>
                                        <th className="text-center px-6 py-3 border-b">Lokasi Simpan</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    {barangKosong?.data?.map((item: BarangKosong, index: number) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="w-16 text-center px-4 sm:px-6 py-3">{barangKosong.from + index}</td>
                                            <td className="text-center px-6 py-3">{item.nama_barang}</td>
                                            <td className="text-center px-6 py-3">{item.kode_barang}</td>
                                            <td className="text-center px-6 py-3">{item.lokasi_simpan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className="mt-4 flex justify-end"> 
                            {barangKosong.total > barangKosong.per_page && (
                                <div className="flex flex-wrap gap-2">
                                    {barangKosong.links.map((link, index) => (
                                        <button
                                            key={index}
                                            disabled={!link.url}
                                            onClick={() => link.url && router.visit(link.url, { preserveScroll: true })}
                                            className={`px-3 py-1 border rounded ${link.active
                                                ? 'bg-gray-500 text-white'
                                                : 'bg-white text-gray-700'
                                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''
                                                }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </div>
        </AppLayout>

    );
}

