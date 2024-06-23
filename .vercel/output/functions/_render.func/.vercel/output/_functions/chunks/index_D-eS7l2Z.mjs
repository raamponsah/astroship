import { n as createComponent, o as renderTemplate, p as maybeRenderHead, t as renderComponent, m as createAstro } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection } from "./_astro_content_8estDstX.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$Icon } from "./Icon_Bo1Yt0FH.mjs";
import { $ as $$Link } from "./link_DaEma65G.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$TrainingCard } from "./TrainingCard_Dyf7FtrG.mjs";
import moment from "moment";
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "AI & Machine Learning Workshops",
      description: "Dive deep into AI and machine learning with our hands-on workshops. Learn to build intelligent systems and apply ML models effectively.",
      icon: "bx:bxs-brain"
    },
    {
      title: "Web/Mobile Development Bootcamps",
      description: "Master the art of web development. Create responsive, high-performance websites and web applications from scratch.",
      icon: "bx:bxs-brain"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Transform raw data into meaningful insights. Learn the tools and techniques for effective data analysis and visualization.",
      icon: "bx:bxs-bar-chart-alt-2"
    },
    {
      title: "Corporate Training Programs",
      description: "Upskill your team with customized training programs designed to address specific industry challenges and enhance productivity.",
      icon: "bx:bxs-chalkboard"
    },
    {
      title: "Tech for Students",
      description: "Empower students with practical tech skills. Our workshops bridge the gap between academic knowledge and real-world applications.",
      icon: "bx:bxs-graduation"
    },
    {
      title: "Customized Tech Solutions",
      description: "Receive tailored tech solutions for your unique needs. From software development to AI integration, we provide bespoke services.",
      icon: "bx:bxs-wrench"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0 px-4 md:px-12 lg:px-20 flex justify-center items-center flex-col py-10 text-center"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light lg:tracking-tight text-indigo-500">
Empowering the Future through Education, Innovation, and AI
</h2> <p class="text-base sm:text-lg lg:text-xl w-full max-w-3xl mt-4 text-slate-600">
Skyfusion specializes in cutting-edge education and training solutions, custom software engineering,
<wbr> and advanced AI integration to drive your business forward.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-12 lg:px-20"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-blue-500 rounded-full p-2 w-12 h-12 flex items-center justify-center shrink-0 hover:text-slate-900"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-slate-700 hover:text-slate-900 text-lg lg:text-xl">${item.title}</h3> <p class="text-slate-600 mt-2 leading-relaxed hover:text-slate-900 text-base lg:text-lg">${item.description}</p> </div> </div>`)} </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/features.astro", void 0);
const $$Astro = createAstro("https://skyfusion.dev");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 -mt-36 place-items-center p-6 md:p-12 lg:p-24 bg-slate-500 bg-[url(/un8.jpg)] bg-center bg-blend-multiply min-h-[80vh] bg-cover text-white"> <div class="py-6 md:order-1 hidden md:block"> <!-- 
    <Picture
      src={heroImage}
      alt="Astronaut in the air"
      widths={[200, 400, 600]}
      sizes="(max-width: 800px) 100vw, 620px"
      loading="eager"
      format="avif"
    /> 
    --> </div> <div> <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter">
Educate, Integrate, Innovate
</h1> <p class="text-lg sm:text-xl mt-4 max-w-xl text-white">
Skyfusion pioneers advanced education, bespoke software engineering, and cutting-edge AI integration solutions,<wbr> empowering diverse individuals and organizations to thrive in the evolving tech landscape.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "/sign-up", "class": "flex gap-1 items-center justify-center font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xl sm:text-base", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` 
Get started free &rarr;
` })} </div> </div> </main>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/hero.astro", void 0);
const $$Logos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="my-24"> <h2 class="text-center text-2xl">Technologies we teach</h2> <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:react" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:javascript" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:astro" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-16", "name": "simple-icons:tailwindcss" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-16", "name": "simple-icons:docker" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:rust" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:laravel" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:nextdotjs" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:csharp" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:python" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "simple-icons:php" })} </div> </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/logos.astro", void 0);
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTrainingEntries = await getCollection("training", ({ data }) => !data.draft);
  const latestTrainingEntries = publishedTrainingEntries.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${maybeRenderHead()}<div class="mt-8 my-24"> <h2 class="flex justify-center my-6 items-center text-3xl">
Trending Workshops
</h2> <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto px-4"> ${latestTrainingEntries.map((trainingEntry) => renderTemplate`<li> ${renderComponent($$result3, "TrainingCard", $$TrainingCard, { "status": trainingEntry.data.status, "title": trainingEntry.data.title, "date": trainingEntry.data.publishDate, "imageUrl": trainingEntry.data.image.src, "link": `/training/${trainingEntry.slug}`, "author": trainingEntry.data.author, "modeOfWorkshop": trainingEntry.data.workshopDetails.modeOfWorkshop, "starting": moment(trainingEntry?.data?.workshopDetails?.startDate).fromNow(), "price": `GHS${Math.floor(trainingEntry?.data?.actualPrice - trainingEntry?.data?.actualPrice * trainingEntry?.data?.discount / 100)} (${trainingEntry?.data?.discount}% off)` })} </li>`)} </ul> </div> ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ` })} ` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/index.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/index.astro";
const $$url = "";
export {
  $$Index as default,
  $$file as file,
  $$url as url
};
