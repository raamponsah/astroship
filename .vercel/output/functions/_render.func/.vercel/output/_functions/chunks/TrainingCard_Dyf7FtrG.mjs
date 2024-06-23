import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
/* empty css                         */
const $$Astro = createAstro("https://skyfusion.dev");
const $$TrainingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrainingCard;
  const { title, description, imageUrl, date, author, category, link, status, starting, price, discount, modeOfWorkshop } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-rfumos3b> <div class="astro-card rounded-lg relative shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-[500px]" data-astro-cid-rfumos3b> <div class="flex justify-between items-center" data-astro-cid-rfumos3b> <span${addAttribute(`absolute p-1 top-0 z-10 right-0 m-4 rounded text-sm ${status === "Paid" ? "bg-amber-400" : "bg-lime-500"} text-white font-bold uppercase`, "class")} data-astro-cid-rfumos3b> ${status} </span> <span class="absolute backdrop-blur-lg p-1 top-0 z-10 left-0 m-4 rounded text-sm text-white font-bold uppercase" data-astro-cid-rfumos3b>
STARTS ${starting} </span> </div> <a${addAttribute(link, "href")} class="astro-card__link block relative" data-astro-cid-rfumos3b> <div class="astro-card__image relative" data-astro-cid-rfumos3b> <img class="w-full h-72 object-cover object-center rounded-t-lg"${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} data-astro-cid-rfumos3b> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" data-astro-cid-rfumos3b></div> <div class="absolute inset-0 flex items-end" data-astro-cid-rfumos3b> <div class="astro-card__content px-6 py-4 text-white" data-astro-cid-rfumos3b> <span class="astro-card__category text-sm font-medium uppercase tracking-wider" data-astro-cid-rfumos3b>${category}</span> <h2 class="astro-card__title text-xl font-medium leading-tight mt-2" data-astro-cid-rfumos3b>${title}</h2> <div class="astro-card__meta flex items-center gap-3 mt-3" data-astro-cid-rfumos3b> <span class="" data-astro-cid-rfumos3b> ${modeOfWorkshop} </span> <span class="astro-card__date text-sm" data-astro-cid-rfumos3b> <!--{moment().calendar()}--> </span> </div> <div class="flex justify-between mt-4 items-center" data-astro-cid-rfumos3b> <button class="astro-card__button bg-lime-600 hover:bg-lime-700 text-white text-xs md:text-sm lg:text-base xl:text-lg rounded-full inline-block uppercase tracking-wider font-semibold transition duration-300 px-2 py-1 md:px-6 md:py-2 lg:px-2 lg:py-2" data-astro-cid-rfumos3b>
Enroll
</button> ${discount ? renderTemplate`<div class="flex items-center" data-astro-cid-rfumos3b> <span class="text-white text-lg font-bold mr-2" data-astro-cid-rfumos3b>${price}</span> <span class="text-xs bg-amber-400 text-white px-1 py-1 rounded-full uppercase font-semibold" data-astro-cid-rfumos3b>${discount}% off</span> </div>` : renderTemplate`<span class="text-white text-lg md:text-lg font-bold" data-astro-cid-rfumos3b>${price}</span>`} </div> </div> </div> </div> </a> </div> </div> `;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/cards/TrainingCard.astro", void 0);
export {
  $$TrainingCard as $
};
