import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { props } = usePage<{ auth: { user: { name: string } } }>();
    const user = props.auth.user;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Bienvenida */}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    👋 ¡Bienvenido, {user?.name}!
                </h2>

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Aquí van tus placeholders */}
                    <div className="border dark:border-gray-700 relative aspect-video overflow-hidden rounded-xl">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    {/* Más items si deseas */}
                </div>

                <div className="border dark:border-gray-700 relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
