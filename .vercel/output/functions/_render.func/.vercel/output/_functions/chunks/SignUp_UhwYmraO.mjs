import { m as createAstro, n as createComponent, o as renderTemplate, w as defineScriptVars, q as addAttribute, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
import { s as signInUrl } from "./chunk-HL5AUPGI__e4qPoPY.mjs";
import { customAlphabet, urlAlphabet } from "nanoid";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://skyfusion.dev");
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  const safeId = customAlphabet(urlAlphabet, 10)();
  ({
    ...Astro2.props,
    signInUrl: Astro2.props.signInUrl || signInUrl
  });
  return renderTemplate(_a || (_a = __template(["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const a = new Map();\n      a.set(id, props);\n      window.__astro_clerk_component_props.set(category, a);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "sign-up",\n    id: `clerk-sign-up-${safeId}`,\n    props,\n  });\n})();<\/script>'], ["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const a = new Map();\n      a.set(id, props);\n      window.__astro_clerk_component_props.set(category, a);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "sign-up",\n    id: \\`clerk-sign-up-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(`clerk-sign-up-${safeId}`, "id"), defineScriptVars({ props: Astro2.props, safeId }));
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/interactive/SignUp.astro", void 0);
export {
  $$SignUp as $
};
