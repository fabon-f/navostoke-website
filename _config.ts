import lume from "lume/mod.ts";
import { Page } from "lume/core.ts"
import jsx from "lume/plugins/jsx.ts";
import date from "lume/plugins/date.ts";

const site = lume({
    src: "src",
    location: new URL("https://navostoke.fabon.info"),
});
site.use(jsx());
site.use(date());

for (const path of ["404.html", "_headers", "img", "style"]) {
    site.copy(path)
}

function addDoctype(page: Page) {
    if (typeof page.content === "string" && !page.content.trim().startsWith("<!DOCTYPE")) {
        page.content = `<!DOCTYPE html>${page.content}`;
    }
}

site.process([".html"], addDoctype);

site.ignore("404.html")

export default site;
