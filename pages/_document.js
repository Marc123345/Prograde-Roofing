import { Html, Head, Main, NextScript } from "next/document"

// `js` turns on the template's reveal-hidden state before first paint (its
// CSS failsafe shows everything if the motion bundle never loads). The
// template's brand loader and dark mode are not used on this site.
export default function Document() {
    return (
        <Html lang="en" className="js no-loader">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/assets/css/motion-tokens.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/animations.css" />
                <link rel="stylesheet" href="/assets/css/premium.css" />
                <link rel="stylesheet" href="/assets/css/prograde.css" />
                <link rel="icon" href="/media/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/media/apple-touch-icon.png" />
                <meta name="theme-color" content="#0d0d0d" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
