import lume from "lume/mod.ts";
import { Page } from "lume/core.ts"
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import parcelCss from "lume/plugins/parcel_css.ts";

const site = lume({
    src: "src",
    location: new URL("https://navostoke.fabon.info"),
});
site.use(jsx());
site.use(date());
site.use(esbuild({
    options: {
        entryPoints: ["script/main.ts"],
        bundle: true,
        format: "iife",
        minify: true,
        platform: "browser",
        target: "esnext",
        incremental: true,
        treeShaking: true
    }
}));
site.use(parcelCss({
    options: {
        analyzeDependencies: true,
        minify: true
    }
}));

for (const path of ["_headers", "img", "favicon.ico", "archives"]) {
    site.copy(path)
}

function addDoctype(page: Page) {
    if (typeof page.content === "string" && !page.content.trim().startsWith("<!DOCTYPE")) {
        page.content = `<!DOCTYPE html>${page.content}`;
    }
}

site.process([".html"], addDoctype);

export default site;
