import { m as createAstro, n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead, q as addAttribute } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection, a as getEntry } from "./_astro_content_8estDstX.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
const $$Astro = createAstro("https://skyfusion.dev");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class=""> <img${addAttribute(`${entry.data.image.src}`, "src")} class="w-full -mt-20"> </div> <div class="mx-auto max-w-4xl mt-14"> <span class="text-blue-400 uppercase tracking-wider text-sm font-medium"> ${entry.data.category} </span> <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight"> ${entry.data.title} </h1> <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap"> <span class="text-gray-400"> ${entry.data.author} </span> <span class="text-gray-400">•</span> <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}> ${entry.data.publishDate.toDateString()} </time> <span class="text-gray-400 hidden md:block">•</span> <div class="w-full md:w-auto flex flex-wrap gap-3"> ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)} </div> </div> </div> <div class="mx-auto prose prose-lg text-lg mt-6 max-w-4xl"> ${renderComponent($$result3, "Content", Content, {})} </div> <div class="text-center mt-8"> <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/blog/[slug].astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";
export {
  $$slug as default,
  $$file as file,
  getStaticPaths,
  $$url as url
};
