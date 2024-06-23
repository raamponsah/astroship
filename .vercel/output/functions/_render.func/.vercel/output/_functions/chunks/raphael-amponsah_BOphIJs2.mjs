import { n as createComponent, o as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
const html = "";
const frontmatter = { "draft": false, "name": "Raphael Amponsah", "title": "Founder", "avatar": { "src": "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "alt": "Raphael Amponsah" }, "publishDate": "2022-11-08 15:39" };
const file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/content/team/raphael-amponsah.md";
const url = void 0;
function rawContent() {
  return "";
}
function compiledContent() {
  return html;
}
function getHeadings() {
  return [];
}
const Content = createComponent((result, _props, slots) => {
  const { layout, ...content } = frontmatter;
  content.file = file;
  content.url = url;
  return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
});
export {
  Content,
  compiledContent,
  Content as default,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
};
