import { n as createComponent, o as renderTemplate, t as renderComponent, F as Fragment, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection } from "./_astro_content_8estDstX.mjs";
import { $ as $$Picture } from "./_astro_assets_bBPcrMvN.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$Sectionhead } from "./sectionhead_DkuU23Hs.mjs";
import { b as $$ClerkLayout } from "./UserButton_3YDVigMJ.mjs";
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "ClerkLayout", $$ClerkLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, { "title": "About" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result6) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result5) => renderTemplate`${renderComponent($$result5, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result6) => renderTemplate`Services` })}` })} ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16"> <h2 class="font-bold text-3xl text-gray-800 text-center">
Rebuilding Strong Strategies with Cutting-Edge Technologies
</h2> <p class="text-lg leading-relaxed text-slate-500 text-center">
At Skyfusion, we're dedicated to transforming the future of work through innovation, education, and technology. Our mission is to create smarter, more sustainable, and fulfilling ways of working by integrating cutting-edge software engineering, comprehensive training programs, and advanced AI solutions. We envision a world where people and companies collaborate seamlessly to achieve their highest potential.

        Skyfusion was founded with a passion for empowering individuals and organizations to excel in the digital age. We believe that by fostering an environment of creativity, learning, and collaboration, we can unlock unprecedented opportunities and drive meaningful progress. Whether you're looking to enhance your skills, integrate AI into your business, or develop custom software solutions, Skyfusion is here to guide you every step of the way.
</p> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12"> ${publishedTeamMembers.map((teamMemberEntry) => renderTemplate`<div class="group"> <div class="w-full aspect-square"> ${renderComponent($$result4, "Picture", $$Picture, { "src": teamMemberEntry.data.avatar.src, "alt": teamMemberEntry.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "width": 400, "height": 400, "class": "w-full rounded-md rounded transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center aspect-square" })} </div> <div class="mt-4 text-center"> <h2 class="text-lg text-gray-800">${teamMemberEntry.data.name}</h2> <h3 class="text-sm text-slate-500"> ${teamMemberEntry.data.title} </h3> </div> </div>`)} </div> ` })} ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/services.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/services.astro";
const $$url = "/services";
export {
  $$Services as default,
  $$file as file,
  $$url as url
};
