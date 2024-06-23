import { n as createComponent, o as renderTemplate, t as renderComponent, F as Fragment, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection } from "./_astro_content_8estDstX.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$Sectionhead } from "./sectionhead_DkuU23Hs.mjs";
import { $ as $$TrainingCard } from "./TrainingCard_Dyf7FtrG.mjs";
import moment from "moment/moment.js";
const $$Training = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTrainingEntries = await getCollection("training", ({ data }) => {
    return !data.draft;
  });
  publishedTrainingEntries.sort(function(a, b) {
    return a.data.publishDate.valueOf() - b.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Training" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
Empowering professionals with cutting-edge tech skills for a future-ready workforce.
` })}`, "title": ($$result4) => renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center"> <h1 class="relative">Training Workshops
<svg xmlns="http://www.w3.org/2000/svg" width="31" height="14" viewBox="0 0 31 14" fill="none" class="z-[2] absolute top-0 right-1 dark:bg-gray-900 bg-gray-0 rounded-full"><rect width="31" height="14" x="0" y="0" fill="#26d97f" fill-opacity="0.1" rx="6.5"></rect><path fill="#26d97f" d="M11.433 4.182V10h-.937L7.754 6.037h-.048V10H6.652V4.182h.943l2.739 3.966h.05V4.182h1.05ZM12.582 10V4.182h3.784v.883h-2.73v1.58h2.534v.883h-2.534v1.588h2.753V10h-3.807Zm6.084 0-1.643-5.818h1.134l1.048 4.275h.054l1.12-4.275h1.03l1.123 4.278h.051l1.048-4.278h1.134L23.123 10h-1.04l-1.165-4.082h-.045L19.705 10h-1.04Z"></path></svg> </h1> </div>` })} <main class="mt-8 mb-16"> <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto px-4"> ${publishedTrainingEntries.map((trainingEntry) => renderTemplate`<li> ${renderComponent($$result3, "TrainingCard", $$TrainingCard, { "status": trainingEntry.data.status, "title": trainingEntry.data.title, "date": trainingEntry.data.publishDate, "imageUrl": trainingEntry.data.image.src, "link": `/training/${trainingEntry.slug}`, "modeOfWorkshop": trainingEntry.data.workshopDetails.modeOfWorkshop, "author": trainingEntry.data.author, "starting": moment(trainingEntry.data.workshopDetails.startDate).fromNow(), "price": `GHS${Math.floor(trainingEntry?.data?.actualPrice - trainingEntry?.data?.actualPrice * trainingEntry?.data?.discount / 100)} (${trainingEntry?.data?.discount}% off)` })} </li>`)} </ul> </main> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training.astro";
const $$url = "/training";
export {
  $$Training as default,
  $$file as file,
  $$url as url
};
