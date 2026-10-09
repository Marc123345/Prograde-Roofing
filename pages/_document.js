import { Html, Head, Main, NextScript } from "next/document"

// `js` turns on the template's reveal-hidden state before first paint (its
// CSS failsafe shows everything if the motion bundle never loads). The
// template's brand loader and dark mode are not used on this site.
// Stylesheets and fonts are bundled from pages/_app.js.
export default function Document() {
    return (
        <Html lang="en" className="js no-loader">
            <Head>
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
