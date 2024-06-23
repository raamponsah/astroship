import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
import moment from "moment";
const $$Astro = createAstro("https://skyfusion.dev");
const $$TrainingDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrainingDetails;
  const { entry } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen mt-12 px-4 lg:px-0"> <h2 class="text-xl text-amber-600 lg:text-2xl font-bold mb-4 flex gap-2"> <span>Workshop Details</span> </h2> <div class="overflow-hidden border border-amber-600 rounded-lg"> <table class="min-w-full divide-y divide-amber-600"> <tbody class="bg-white divide-y divide-amber-600"> <tr class="flex flex-wrap lg:table-row"> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Location</p> <p class="text-amber-600">${entry?.data?.workshopDetails?.location}</p> </td> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Start Date</p> <p class="text-amber-600"> ${moment(entry?.data?.workshopDetails?.startDate, "YYYY-MM-DD").isValid() ? moment(entry?.data?.workshopDetails?.startDate, "YYYY-MM-DD").format("MMMM D, YYYY") : "Date not available"} </p> </td> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">End Date</p> <p class="text-amber-600"> ${moment(entry?.data?.workshopDetails?.endDate, "YYYY-MM-DD").isValid() ? moment(entry?.data?.workshopDetails?.endDate, "YYYY-MM-DD").format("MMMM D, YYYY") : "Date not available"} </p> </td> </tr> <tr class="flex flex-wrap lg:table-row"> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Start Time</p> <p class="text-amber-600">${entry?.data.workshopDetails?.startTime}</p> </td> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Closing Time</p> <p class="text-amber-600">${entry?.data.workshopDetails?.closingTime}</p> </td> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Break Time</p> <p class="text-amber-600">${entry?.data.workshopDetails?.breakTime}</p> </td> </tr> <tr class="flex flex-wrap lg:table-row"> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto"> <p class="text-amber-700 font-bold">Targeted Audience</p> <p class="text-amber-600 text-wrap">${entry?.data.workshopDetails?.targetedAudience}</p> </td> <td class="px-3 py-2 whitespace-nowrap w-full lg:w-auto" colspan="2"> <p class="text-amber-700 font-bold">Other Details</p> <p class="text-amber-600 text-wrap">${entry?.data.workshopDetails?.otherDetails}</p> </td> </tr> </tbody> </table> </div> </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training/components/training-details.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/training/components/training-details.astro";
const $$url = "/training/components/training-details";
export {
  $$TrainingDetails as default,
  $$file as file,
  $$url as url
};
