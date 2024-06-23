import { m as createAstro, n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead, q as addAttribute } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { s as supabase } from "./supabase_BM11cvQ4.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_d0garHoe.mjs";
import { f as fetchAndParseMarkdown } from "./util_haaY9vRq.mjs";
const $$Astro = createAstro("https://skyfusion.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { auth } = Astro2.locals;
  const learnerLedgerResponse = await supabase.from("learner_ledger").select().eq("email", auth().sessionClaims?.email);
  const learnerLedger = learnerLedgerResponse.data || [];
  const { data, error } = await supabase.storage.from("mbukit").list() || [];
  if (error) {
    console.error("Error fetching workshop files:", error);
  }
  const markedRemoteFileLinks = data.map((f) => `https://gvcpyhkcnsqchooabnez.supabase.co/storage/v1/object/public/mbukit/${f.name}`);
  const fileUrls = markedRemoteFileLinks || [];
  let parsedFiles = [];
  if (fileUrls.length > 0) {
    parsedFiles = await Promise.all(fileUrls.map(async (url) => {
      try {
        return await fetchAndParseMarkdown(url);
      } catch (error2) {
        console.error(`Error fetching or parsing ${url}:`, error2);
        return null;
      }
    }));
  } else {
    console.log("No files found in the bucket.");
  }
  const flattenedResults = parsedFiles.flat() || [];
  const filteredResults = flattenedResults.filter((x) => {
    return learnerLedger.some((y) => {
      return y?.workshop_code === x?.frontmatter?.workshopSecurityCode;
    });
  }) || [];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"> <div class="bg-indigo-100 p-4 rounded text-indigo-800"> <h3 class="text-lg font-medium">Total Workshops</h3> <p class="text-2xl font-bold">${data.length}</p> </div> <div class="bg-indigo-100 p-4 rounded text-indigo-800"> <h3 class="text-lg font-medium">Completed Workshops</h3> <p class="text-2xl font-bold">0</p> </div> <div class="bg-indigo-100 p-4 rounded text-indigo-800"> <h3 class="text-lg font-medium">Upcoming Workshops</h3> <p class="text-2xl font-bold">2</p> </div> </section>   <section> <h3 class="text-xl font-semibold mb-4">Registered Workshops</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${filteredResults?.length > 0 ? filteredResults?.map((workshop) => renderTemplate`<div class="bg-white border border-indigo-200 p-4 rounded shadow hover:shadow-lg transition-shadow"> <h4 class="text-lg font-semibold mb-2">${workshop?.frontmatter?.title}</h4> <p class="text-gray-600 mb-4">${workshop?.frontmatter?.teaser}</p> <a${addAttribute(`/dashboard/learn/${workshop?.url.split("/")[8].toLowerCase()}`, "href")} class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">View Details</a> </div>`) : renderTemplate`<h3>You've not registered any workshop yet. <span><a href="/training" class="text-indigo-600 underline font-bold">Workshop Marketplace</a></span> </h3>`} </div> </section> ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/dashboard/index.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/dashboard/index.astro";
const $$url = "/dashboard";
export {
  $$Index as default,
  $$file as file,
  $$url as url
};
