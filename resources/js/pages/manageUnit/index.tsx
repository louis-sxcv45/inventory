import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Unit',
        href: '/manageUnit',
    },
];

interface ManageUnit {
    id: number;
    nama_unit: string;
}

interface PageProps {
    units: {
        data: ManageUnit[];
        links: { url: string | null; label: string; active: boolean }[];
        per_page: number;
        total: number;
        from: number;
    };
    [key: string]: any; // This should be at the root level
}

export default function Index() {
    const { units } = usePage<PageProps>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Unit" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border shadow-lg">
                    <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />

                    <div className="p-4 sm:p-6 text-gray-900">
                        {/* Header Responsive */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                            <h2 className="font-semibold text-lg sm:text-2xl text-gray-800">
                                List Unit
                            </h2>
                            <Link
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
                            </Link>
                        </div>

                        {/* Tabel Responsif */}
                        <div className="overflow-x-auto bg-white rounded-lg shadow">
                            <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                                <thead className="bg-gray-50 text-gray-600 font-medium">
                                    <tr>
                                        <th className="w-16 text-center px-4 sm:px-6 py-3 border-b">No</th>
                                        <th className="text-center px-6 py-3 border-b">Nama Unit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    {units?.data?.map((item: ManageUnit, index: number) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="w-16 text-center px-4 sm:px-6 py-3">{units.from + index}</td>
                                            <td className="text-center px-6 py-3">{item.nama_unit}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className="mt-4 flex justify-end">
                            {units.total > units.per_page && (
                                <div className="flex flex-wrap gap-2">
                                    {units.links.map((link, index) => (
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
