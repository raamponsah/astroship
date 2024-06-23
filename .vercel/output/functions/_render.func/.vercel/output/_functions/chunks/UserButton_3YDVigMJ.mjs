import { n as createComponent, o as renderTemplate, u as renderSlot, m as createAstro, w as defineScriptVars, q as addAttribute, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
import { customAlphabet, urlAlphabet } from "nanoid";
const $$ClerkLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderSlot($$result, $$slots["default"])}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/control/ClerkLayout.astro", void 0);
const $$Astro$1 = createAstro("https://skyfusion.dev");
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/control/SignedIn.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://skyfusion.dev");
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UserButton;
  const safeId = customAlphabet(urlAlphabet, 10)();
  return renderTemplate(_a || (_a = __template(["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "user-button",\n    id: `clerk-user-button-${safeId}`,\n    props,\n  });\n})();<\/script>'], ["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "user-button",\n    id: \\`clerk-user-button-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(`clerk-user-button-${safeId}`, "id"), defineScriptVars({ props: Astro2.props, safeId }));
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/interactive/UserButton.astro", void 0);
export {
  $$SignedIn as $,
  $$UserButton as a,
  $$ClerkLayout as b
};
