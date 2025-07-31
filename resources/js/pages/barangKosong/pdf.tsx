// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';
// import { Head, usePage } from '@inertiajs/react';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Laporan Barang Kosong',
//         href: '/barangKosong',
//     },
// ];

// interface BarangKosong {
//     id: number;
//     nama_barang: string;
//     kode_barang: string;
//     lokasi_simpan: string;
// }

// interface PageProps {
//     barangKosong: BarangKosong[];
//     [key: string]: any;
// }

// export default function LaporanBarangKosong() {
//     const { barangKosong } = usePage<PageProps>().props;

//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Laporan Barang Kosong" />
//             <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
//                 <div className="relative flex-1 rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg overflow-hidden bg-white">
//                     <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />

//                     <div className="relative z-10 p-6">
//                         {/* Header */}
//                         <div className="text-center mb-6">
//                             <h2 className="text-xl font-semibold text-gray-800">Laporan Barang Kosong</h2>
//                             <p className="text-gray-600 mt-2">
//                                 Berikut merupakan laporan barang kosong di Kantor Telkom Witel Jakarta Utara.
//                             </p>
//                         </div>

//                         {/* Table */}
//                         <div className="overflow-x-auto">
//                             <table className="w-full border-collapse border border-gray-200 text-sm">
//                                 <thead>
//                                     <tr className="bg-gray-50">
//                                         <th className="border border-gray-200 px-4 py-2 text-center">No</th>
//                                         <th className="border border-gray-200 px-4 py-2 text-left">Nama Barang</th>
//                                         <th className="border border-gray-200 px-4 py-2 text-left">Kode Barang</th>
//                                         <th className="border border-gray-200 px-4 py-2 text-left">Lokasi Simpan</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {barangKosong.length > 0 ? (
//                                         barangKosong.map((item, index) => (
//                                             <tr key={item.id} className="hover:bg-gray-50">
//                                                 <td className="border border-gray-200 px-4 py-2 text-center">{index + 1}</td>
//                                                 <td className="border border-gray-200 px-4 py-2">{item.nama_barang}</td>
//                                                 <td className="border border-gray-200 px-4 py-2">{item.kode_barang}</td>
//                                                 <td className="border border-gray-200 px-4 py-2">{item.lokasi_simpan}</td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan={4} className="text-center py-4 text-gray-500">
//                                                 Tidak ada data barang kosong
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Footer */}
//                         <div className="mt-6 text-right text-gray-500 text-sm">
//                             Dicetak {new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AppLayout>
//     );
// }
