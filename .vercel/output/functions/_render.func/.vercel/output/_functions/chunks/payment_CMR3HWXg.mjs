import { m as createAstro, n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead, q as addAttribute } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection, a as getEntry } from "./_astro_content_8estDstX.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import moment from "moment";
import $$TrainingDetails from "./training-details_7QLcPPjn.mjs";
const $$Astro = createAstro("https://skyfusion.dev");
async function getStaticPaths() {
  const trainingEntries = await getCollection("training");
  return trainingEntries.map((entry) => ({
    params: { slug: entry?.slug },
    props: { entry }
  }));
}
const $$Payment = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Payment;
  const { auth } = Astro2.locals;
  if (!auth().userId) {
    return Astro2.redirect("/sign-in");
  }
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("Slug is required");
  }
  const entry = await getEntry("training", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  await entry.render();
  moment(entry?.data?.workshopDetails?.startDate).fromNow(true);
  const discountPrice = Math.floor(entry?.data?.actualPrice - entry?.data?.actualPrice * entry?.data?.discount / 100);
  `${discountPrice} (${entry?.data?.discount}% OFF)`;
  const pageTitle = entry?.data?.title;
  const pageDescription = entry?.data?.teaser;
  const bannerImageUrl = entry?.data?.image?.src;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-2xl mx-auto mt-12 px-4 lg:px-5"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <div class="w-full"> <div class="rounded-lg relative overflow-hidden bg-white  mb-8"> <img${addAttribute(bannerImageUrl, "src")}${addAttribute(pageTitle, "alt")} class="w-full h-72 object-cover"> <div class=" mt-5"> <h3 class="text-sm font-bold uppercase">${entry?.data?.numberOfDays}-Day Training Workshop</h3> <h1 class="text-lg sm:text-sm md:text-lg text-indigo-500 lg:text-xl font-bold">${pageTitle}</h1> <p class="">${pageDescription}</p> <!-- <p class="text-xs sm:text-sm md:text-base mb-2 px-4 py-1 shadow-lg border border-dashed border-white bg-slate-500 rounded-full">
                Workshop training starts in {workshopStartDate}
              </p> --> </div> </div> <div> <h2 class="text-xl lg:text-2xl font-bold mb-2">Course Description</h2> <p class="text-gray-700">${entry?.data?.description}</p> </div> ${renderComponent($$result3, "TrainingDetails", $$TrainingDetails, { "entry": entry })} </div> <div class=""> ${renderComponent($$result3, "PaymentForm", null, { "entry": entry, "email": auth().sessionClaims?.email, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training/components/payment-form", "client:component-export": "default" })} </div> </div> </div> <div class="text-center mt-8 mb-5"> <a href="/training" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition inline-block">← Back to Workshops</a> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training/[slug]/payment.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training/[slug]/payment.astro";
const $$url = "/training/[slug]/payment";
export {
  $$Payment as default,
  $$file as file,
  getStaticPaths,
  $$url as url
};
