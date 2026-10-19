import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#061328" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/images/logo-light.svg" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* Next.js inlines this stylesheet at build time (font optimization) */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                {/* Enables scroll-reveal styles only when JS runs; content stays visible otherwise */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
