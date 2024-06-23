import { n as createComponent, o as renderTemplate, t as renderComponent, p as maybeRenderHead } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$SignedIn, a as $$UserButton } from "./UserButton_3YDVigMJ.mjs";
import { $ as $$SignedOut } from "./SignedOut_XRWzCfo7.mjs";
import { $ as $$SignUp$1 } from "./SignUp_UhwYmraO.mjs";
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-200 to-indigo-400 -mt-20"> <div class="max-w-md w-full p-8 "> ${renderComponent($$result3, "SignedIn", $$SignedIn, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "UserButton", $$UserButton, {})} ` })} ${renderComponent($$result3, "SignedOut", $$SignedOut, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "SignUp", $$SignUp$1, { "routing": "hash" })} ` })} </div> </div> ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/sign-up.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/sign-up.astro";
const $$url = "/sign-up";
export {
  $$SignUp as default,
  $$file as file,
  $$url as url
};
