import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink } from "../../../lib/components.tsx"
import { Data, Filters } from "../../types.ts"

function cssLinks(stylesheet?: string | string[]) {
    if (stylesheet === undefined) {
        return undefined;
    } else if (typeof stylesheet === "string") {
        return <link rel="stylesheet" href={`/style/${stylesheet}.css`} />;
    } else {
        return stylesheet.map(f => <link rel="stylesheet" href={`/style/${f}.css`} />);
    }
}

export default (data: Data, filters: Filters) => {
    const siteName = "ナヴァストーケ";
    const { children, title, description, url, stylesheet, ogImage, twitterCardType } = data;
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = "サークル「ナヴァストーケ」の公式サイト";
    return <html lang="ja">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={description || defaultDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:image" content={filters.url(ogImage || "/img/logo.png", true)} />
        <meta property="og:url" content={filters.url(url, true)} />
        <meta name="twitter:card" content={twitterCardType || "summary"} />
        <meta name="twitter:site" content="@syobon_hinata" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {cssLinks(stylesheet)}
        <title>{fullTitle}</title>
    </head>
    <body>
        <header className="header_nav">
            <div className="header_nav_inner">
                <a href="/"><img src="/img/logotype.svg" alt="ナヴァストーケ トップページ" height="60" width="160" /></a>
                <nav>
                    <ul className="header_nav_links">
                        <li><a href="/works/">作品</a></li>
                        <li><a href="/about/">サークル概要</a></li>
                        <li><a href="/contact/">連絡先・リンク</a></li>
                        <li><ExternalLink href="https://navostoke.booth.pm" icon={false}>通販・DL販売</ExternalLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        {children}
        <footer>
            <p><ExternalLink href="https://www.fabon.info">ふぁぼんのホームページ</ExternalLink></p>
            <div id="footer">
                <p>© 2021-{new Date().getFullYear()} ナヴァストーケ «на востоке»</p>
            </div>
        </footer>
    </body>
</html>;
}
