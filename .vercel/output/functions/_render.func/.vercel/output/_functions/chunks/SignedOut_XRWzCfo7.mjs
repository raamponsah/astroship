import { m as createAstro, n as createComponent, o as renderTemplate, u as renderSlot } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
const $$Astro = createAstro("https://skyfusion.dev");
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/control/SignedOut.astro", void 0);
export {
  $$SignedOut as $
};
