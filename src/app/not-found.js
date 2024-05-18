import GoBackButton from '@/components/ui/GoBackButton'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <section className='header-space'>
                <div className='section-wrapper'>
                    <div className='mx-auto w-full md:w-1/2 text-center grid place-items-center'>
                        <h1 className='text-destructive'>404</h1>
                        <h2 className='mt-base'>Oops! Page Not Found</h2>
                        <p className='-mt-5'>The page you&apos;re looking for doesn&apos;t exist.</p>

                        <div className='mt-base flex gap-2'>
                            <GoBackButton />
                            <Link className={`${buttonVariants({ variant: "outline" })} `} href="/">Return Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}