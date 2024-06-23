import { m as createAstro, n as createComponent, o as renderTemplate, p as maybeRenderHead, s as spreadAttributes, q as addAttribute, u as renderSlot } from "./astro/server_O8A7kLy3.mjs";
import "clsx";
const $$Astro = createAstro("https://skyfusion.dev");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-black hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/ui/button.astro", void 0);
export {
  $$Button as $
};
