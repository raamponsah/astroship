import { m as createAstro, n as createComponent, o as renderTemplate, w as defineScriptVars, q as addAttribute, p as maybeRenderHead, t as renderComponent } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$SignedIn, a as $$UserButton } from "./UserButton_3YDVigMJ.mjs";
import { $ as $$SignedOut } from "./SignedOut_XRWzCfo7.mjs";
import "clsx";
import { a as signUpUrl } from "./chunk-HL5AUPGI__e4qPoPY.mjs";
import { customAlphabet, urlAlphabet } from "nanoid";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://skyfusion.dev");
const $$SignIn$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignIn$1;
  const safeId = customAlphabet(urlAlphabet, 10)();
  ({
    ...Astro2.props,
    signUpUrl: Astro2.props.signUpUrl || signUpUrl
  });
  return renderTemplate(_a || (_a = __template(["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const a = new Map();\n      a.set(id, props);\n      window.__astro_clerk_component_props.set(category, a);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "sign-in",\n    id: `clerk-sign-in-${safeId}`,\n    props,\n  });\n})();<\/script>'], ["", "<div", "></div> <script>(function(){", '\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const a = new Map();\n      a.set(id, props);\n      window.__astro_clerk_component_props.set(category, a);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: "sign-in",\n    id: \\`clerk-sign-in-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>'])), maybeRenderHead(), addAttribute(`clerk-sign-in-${safeId}`, "id"), defineScriptVars({ props: Astro2.props, safeId }));
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/node_modules/astro-clerk-auth/components/interactive/SignIn.astro", void 0);
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-200 to-indigo-400 -mt-20"> <div class="max-w-md p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 space-y-8"> ${renderComponent($$result3, "SignedIn", $$SignedIn, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "UserButton", $$UserButton, {})} ` })} ${renderComponent($$result3, "SignedOut", $$SignedOut, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "SignIn", $$SignIn$1, { "routing": "hash" })} ` })} </div> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/sign-in.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/sign-in.astro";
const $$url = "/sign-in";
export {
  $$SignIn as default,
  $$file as file,
  $$url as url
};
