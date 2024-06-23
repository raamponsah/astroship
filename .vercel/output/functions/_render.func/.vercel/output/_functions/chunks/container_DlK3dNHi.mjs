import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, q as addAttribute, u as renderSlot } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
const $$Astro = createAstro("https://skyfusion.dev");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["min-w-screen-xl mx-auto", className], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/container.astro", void 0);
export {
  $$Container as $
};
