import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
// import { useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Barang Kosong',
        href: '/atkItems/habis',
    },
];

interface BarangKeluar {
  id: number;
  atk_item?: {
    nama_barang: string;
    kode_barang: string;
  };
}

interface PageProps {

  [key: string]: any;
}


export default function Index() {
    // const page = usePage<PageProps>();
    // const { start_date } = page.props;
    // const { end_date } = page.props;
    // const { barangKeluar } = page.props;

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
                            {/* <Link
                                href={route('unit.create')}
                                className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                                Tambah Unit
                            </Link> */}
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
                                {/* <tbody className="divide-y divide-gray-100 text-gray-700">
                                    {units?.data?.map((item: ManageUnit, index: number) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="w-16 text-center px-4 sm:px-6 py-3">{index + 1}</td>
                                            <td className="text-center px-6 py-3">{item.nama_unit}</td>
                                        </tr>
                                    ))}
                                </tbody> */}
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </AppLayout>

    );
}

