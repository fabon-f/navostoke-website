import React from "https://deno.land/x/react_deno@17.0.2/react.ts";
import { ExternalLink } from "../../../lib/components.tsx"
import { Data, Filters } from "../../types.ts"

function cssLinks(stylesheet?: string | string[]) {
    const cssUrl = (u: string) => u.startsWith("https://") ? u : `/style/${u}.css`
    if (stylesheet === undefined) {
        return undefined;
    } else if (typeof stylesheet === "string") {
        return <link rel="stylesheet" href={cssUrl(stylesheet)} />;
    } else {
        return stylesheet.map(f => <link rel="stylesheet" href={cssUrl(f)} />);
    }
}

function scriptTags(script?: string | string[]) {
    const jsUrl = (u: string) => u.startsWith("https://") ? u : `/script/${u}.js`
    if (script === undefined) {
        return undefined;
    } else if (typeof script === "string") {
        return <script src={jsUrl(script)}></script>;
    } else {
        return script.map(f => <script src={jsUrl(f)}></script>);
    }
}

export default (data: Data, filters: Filters) => {
    const siteName = "ナヴァストーケ";
    const { children, title, description, url, stylesheet, script, ogImage, twitterCardType } = data;
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
        { [16,32,48,64].map(s => <link rel="icon" href={`/img/favicon${s}.png`} sizes={`${s}x${s}`} />) }
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
                        <li><a href="/events/">イベント情報</a></li>
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
        {scriptTags(script)}
    </body>
</html>;
}
