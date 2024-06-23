import { n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Success" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex space-y-4 -mt-20 justify-center items-center min-h-screen bg-gray-200 flex-col"> <h1 class="text-4xl text-green-500">Thank you</h1> <h2 class="text-purple-600 font-medium text-2xl">Your transaction was success</h2> <p>Kindly check your email for further details.</p> <a href="/signin" class="bg-purple-500 px-4  py-1 rounded text-white">Sign in &rarr;</a> </div> ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/success.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/success.astro";
const $$url = "/success";
export {
  $$Success as default,
  $$file as file,
  $$url as url
};
