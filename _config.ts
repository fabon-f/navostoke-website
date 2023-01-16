import lume from "lume/mod.ts";
import preact from "lume/plugins/jsx_preact.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume({
    src: "src",
    location: new URL("https://navostoke.fabon.info"),
});
site.use(preact());
site.use(date());
site.use(esbuild({
    options: {
        entryPoints: ["script/main.ts", "script/download.ts"],
        bundle: true,
        format: "iife",
        minify: true,
        platform: "browser",
        target: "esnext",
        incremental: true,
        treeShaking: true
    }
}));
site.use(lightningCss({
    options: {
        analyzeDependencies: true,
        minify: true
    }
}));

for (const path of ["_headers", "img", "favicon.ico", "archives"]) {
    site.copy(path)
}

export default site;
