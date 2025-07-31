import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Username</Label>
                        <Input
                            id="email"
                            type="text"
                            required
                            tabIndex={2}
                            autoComplete="email : username"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="username123"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}


// import AppLayout from '@/layouts/app-layout';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import { Head, useForm } from '@inertiajs/react';
// import { FormEventHandler } from 'react';
// import { LoaderCircle } from 'lucide-react';

// import InputError from '@/components/input-error';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const breadcrumbs = [
//   {
//     title: 'Manage User',
//     href: '/auth/register',
//   },
// ];

// type RegisterForm = {
//   name: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
// };

// export default function Register() {
//   const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   });

//   const submit: FormEventHandler = (e) => {
//     e.preventDefault();
//     post(route('register'), {
//       onFinish: () => reset('password', 'password_confirmation'),
//     });
//   };

//   return (
//     <AppLayout breadcrumbs={breadcrumbs}>
//       <Head title="Tambah User" />
//       <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
//         <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border shadow-lg">
//           <PlaceholderPattern className="absolute inset-0 size-0 stroke-neutral-900/20 dark:stroke-neutral-100/20" />

//           <div className="relative z-10 p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-6">Form Tambah User</h2>

//             <form onSubmit={submit} className="flex flex-col gap-6">
//               {/* Name */}
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   required
//                   autoFocus
//                   value={data.name}
//                   onChange={(e) => setData('name', e.target.value)}
//                   disabled={processing}
//                   placeholder="Enter full name"
//                 />
//                 <InputError message={errors.name} className="mt-2" />
//               </div>

//               {/* Username */}
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Username</Label>
//                 <Input
//                   id="email"
//                   type="text"
//                   required
//                   value={data.email}
//                   onChange={(e) => setData('email', e.target.value)}
//                   disabled={processing}
//                   placeholder="username123"
//                 />
//                 <InputError message={errors.email} />
//               </div>

//               {/* Password */}
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   required
//                   value={data.password}
//                   onChange={(e) => setData('password', e.target.value)}
//                   disabled={processing}
//                   placeholder="Enter password"
//                 />
//                 <InputError message={errors.password} />
//               </div>

//               {/* Confirm Password */}
//               <div className="grid gap-2">
//                 <Label htmlFor="password_confirmation">Confirm Password</Label>
//                 <Input
//                   id="password_confirmation"
//                   type="password"
//                   required
//                   value={data.password_confirmation}
//                   onChange={(e) => setData('password_confirmation', e.target.value)}
//                   disabled={processing}
//                   placeholder="Confirm password"
//                 />
//                 <InputError message={errors.password_confirmation} />
//               </div>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 className="mt-4 w-full bg-gray-500 hover:bg-gray-900 text-white"
//                 disabled={processing}
//               >
//                 {processing && <LoaderCircle className="h-4 w-4 animate-spin mr-2" />}
//                 Create Account
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }
