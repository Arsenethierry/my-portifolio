import Link from 'next/link';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';
import SeoTags from '../shared/utils/seo-tags';

export default function NotFound() {
    return (
        <>
            <SeoTags title="Page not found — Arsene Thierry" description="This page does not exist." path="/404" noindex />
            <Navbar />
            <main id="main" className="container-page flex min-h-[70vh] flex-col items-start justify-center pb-24 pt-32">
                <p className="eyebrow">404</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    This page doesn’t exist.
                </h1>
                <p className="mt-4 max-w-lg text-lg">The link may be out of date. Everything lives on the homepage.</p>
                <Link href="/">
                    <a className="btn-primary mt-8">Back to the homepage</a>
                </Link>
            </main>
            <Footer />
        </>
    );
}
