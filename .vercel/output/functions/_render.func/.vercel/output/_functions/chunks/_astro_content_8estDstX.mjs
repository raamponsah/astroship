import pLimit from "p-limit";
import { A as AstroError, Z as UnknownContentCollectionError, x as prependForwardSlash } from "./astro/assets-service_C9ni2zx6.mjs";
import { n as createComponent, x as renderUniqueStylesheet, y as renderScriptElement, z as createHeadAndContent, o as renderTemplate, t as renderComponent, v as unescapeHTML } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
function createCollectionToGlobResultMap({
  globResult,
  contentDir: contentDir2
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir2}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap: contentCollectionToEntryMap2,
  dataCollectionToEntryMap: dataCollectionToEntryMap2,
  getRenderEntryImport,
  cacheEntriesByCollection: cacheEntriesByCollection2
}) {
  return async function getCollection2(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap2) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap2) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap2[collection] : dataCollectionToEntryMap2[collection]
    );
    let entries = [];
    if (!Object.assign({ "PUBLIC_SUPABASE_URL": "https://gvcpyhkcnsqchooabnez.supabase.co", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Y3B5aGtjbnNxY2hvb2FibmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTc0MDksImV4cCI6MjAzMzM5MzQwOX0.5wgArzHHIsCnsf8dzroOjTLzIeMASUaTmyt5pHGvNGQ", "PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY": "pk_test_aW1tdW5lLWVsZXBoYW50LTc2LmNsZXJrLmFjY291bnRzLmRldiQ", "PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL": "/sign-in", "PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL": "/sign-up", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://skyfusion.dev", "ASSETS_PREFIX": void 0 }, { Path: process.env.Path })?.DEV && cacheEntriesByCollection2.has(collection)) {
      entries = cacheEntriesByCollection2.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection2.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry2(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
const contentDir = "/src/content/";
const contentEntryGlob = /* @__PURE__ */ Object.assign({ "/src/content/blog/essential-data-structures-algorithms.md": () => import("./essential-data-structures-algorithms_Bo9A7vcp.mjs"), "/src/content/blog/how-to-become-frontend-master.md": () => import("./how-to-become-frontend-master_B78PUwQF.mjs"), "/src/content/blog/kitchensink.mdx": () => import("./kitchensink_DJKZhdLe.mjs"), "/src/content/blog/mastering-peformance.md": () => import("./mastering-peformance_Dbk1Je4N.mjs"), "/src/content/team/raphael-amponsah.md": () => import("./raphael-amponsah_Boa6Tg5K.mjs"), "/src/content/training/advanced-nextjs-ai-integration-workshop.md": () => import("./advanced-nextjs-ai-integration-workshop_RaxO8QnL.mjs"), "/src/content/training/ai-web-development.md": () => import("./ai-web-development_CtmLzJiE.mjs"), "/src/content/training/pythonic-data-science.md": () => import("./pythonic-data-science_BDnu1ivw.mjs") });
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: contentEntryGlob,
  contentDir
});
const dataEntryGlob = /* @__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
  globResult: dataEntryGlob,
  contentDir
});
const collectionToEntryMap = createCollectionToGlobResultMap({
  globResult: { ...contentEntryGlob, ...dataEntryGlob },
  contentDir
});
let lookupMap = {};
lookupMap = { "blog": { "type": "content", "entries": { "how-to-become-frontend-master": "/src/content/blog/how-to-become-frontend-master.md", "mastering-peformance": "/src/content/blog/mastering-peformance.md", "essential-data-structures-algorithms": "/src/content/blog/essential-data-structures-algorithms.md", "kitchensink": "/src/content/blog/kitchensink.mdx" } }, "team": { "type": "content", "entries": { "raphael-amponsah": "/src/content/team/raphael-amponsah.md" } }, "training": { "type": "content", "entries": { "advanced-nextjs-ai-integration-workshop": "/src/content/training/advanced-nextjs-ai-integration-workshop.md", "pythonic-data-science": "/src/content/training/pythonic-data-science.md", "ai-web-development": "/src/content/training/ai-web-development.md" } } };
function createGlobLookup(glob) {
  return async (collection, lookupId) => {
    const filePath = lookupMap[collection]?.entries[lookupId];
    if (!filePath) return void 0;
    return glob[collection][filePath];
  };
}
const renderEntryGlob = /* @__PURE__ */ Object.assign({ "/src/content/blog/essential-data-structures-algorithms.md": () => import("./essential-data-structures-algorithms_CjGOkt4a.mjs"), "/src/content/blog/how-to-become-frontend-master.md": () => import("./how-to-become-frontend-master_B5L_-hDQ.mjs"), "/src/content/blog/kitchensink.mdx": () => import("./kitchensink_BXK6Pso0.mjs"), "/src/content/blog/mastering-peformance.md": () => import("./mastering-peformance_BV7j3PjY.mjs"), "/src/content/team/raphael-amponsah.md": () => import("./raphael-amponsah_XRQCKeTk.mjs"), "/src/content/training/advanced-nextjs-ai-integration-workshop.md": () => import("./advanced-nextjs-ai-integration-workshop_CdU7RCW4.mjs"), "/src/content/training/ai-web-development.md": () => import("./ai-web-development_DBqtmT93.mjs"), "/src/content/training/pythonic-data-science.md": () => import("./pythonic-data-science_B7EB-7U5.mjs") });
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
  globResult: renderEntryGlob,
  contentDir
});
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
const getCollection = createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
  cacheEntriesByCollection
});
const getEntry = createGetEntry({
  getEntryImport: createGlobLookup(collectionToEntryMap),
  getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap)
});
export {
  getEntry as a,
  getCollection as g
};
