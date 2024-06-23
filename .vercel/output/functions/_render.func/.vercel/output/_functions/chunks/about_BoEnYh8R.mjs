import { n as createComponent, o as renderTemplate, p as maybeRenderHead, t as renderComponent, F as Fragment } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import { g as getCollection } from "./_astro_content_8estDstX.mjs";
import { $ as $$Layout } from "./Layout_cF0dRkyU.mjs";
import { $ as $$Container } from "./container_DlK3dNHi.mjs";
import { $ as $$Sectionhead } from "./sectionhead_DkuU23Hs.mjs";
import "clsx";
const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-fuchsia-600 to-indigo-600 min-h-screen px-6 md:px-12 lg:px-20 py-12 lg:py-24 mt-20 grid gap-8 items-center text-white"> <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> <section> <h2 class="text-3xl md:text-4xl font-bold mb-4">Unlock Your Tech Potential with Skyfusion! 🚀</h2> <p class="text-lg md:text-xl mb-6">
Join our dynamic workshops and transform your skills with cutting-edge tech training. Whether you're a professional, student, or enthusiast, our hands-on sessions will empower you to excel in today's digital world. Our vibrant team is here to guide you every step of the way.
</p> <p class="text-xl font-semibold mb-4">Ready to dive into the future of technology?</p> <a href="/sign-up" class="inline-block bg-purple-800 ring-2 ring-white hover:bg-indigo-800 text-xl text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out">Join us today</a> </section> <div class="hidden lg:block"> <img src="/bg1.jpg" alt="Background Image" class="w-full h-auto rounded-lg shadow-lg"> </div> </div> </div> <div class="text-center flex-col space-y-2 flex justify-center items-center text-lg sm:text-xl md:text-2xl text-slate-500 px-6 md:px-12 lg:px-20 py-10 md:py-20"> <blockquote class="max-w-2xl">
By the end of each module, it was incredible to see how much I had progressed compared to where I started. There
    were definitely challenges along the way, but 'strength through struggle' truly accelerated my growth as a
    developer. Skyfusion provided the perfect environment for continuous learning and development
</blockquote> <span class="text-base sm:text-lg md:text-xl text-slate-400">
Asiedu, GIMPA.
    5-Day Workshop, 2022
</span> </div>`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/components/cta.astro", void 0);
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`// Assuming 'Fragment' is imported properly from React or another library
${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate and innovative team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })}${maybeRenderHead()}<div class="grid grid-cols-1 justify-center items-center lg:grid-cols-2 gap-12 px-4 lg:px-40 mt-12"><div class="flex flex-col gap-6"><h2 class="font-bold text-3xl text-gray-800">
Empowering Through Innovation
</h2><p class="text-lg leading-relaxed text-slate-500">
Skyfusion operates on a transformative model of practical, concise workshop sessions designed to drive
          meaningful change. As a pioneering tech education startup registered under Ghana Laws (registration number
          BN723620823), we specialize in demystifying complex technological concepts through hands-on learning
          experiences. Our workshops cater to a diverse audience, including corporate teams, individuals seeking career
          advancement, and students eager to bridge the gap between theory and application.
</p><p class="text-lg leading-relaxed text-slate-500">
Our vibrant, small team is dedicated to delivering impactful tech education. Led by our innovative and
          practical founder, <a href="https://raphaelamponsah.com/" class="underline text-indigo-500">Raphael Amponsah</a>, we are committed to fostering a deep understanding of technology's inner
          workings. Raphael's vision and expertise guide our efforts to create workshops that not only teach but also
          inspire and empower participants to apply their newfound skills in real-world scenarios.
</p><p class="text-lg leading-relaxed text-slate-500">
At Skyfusion, we believe in the power of focused, actionable learning. Our approach combines practical
          insights with theoretical foundations, ensuring that participants gain both immediate skills and a deep
          understanding of technological processes. Whether you're diving into coding, exploring digital marketing
          strategies, or mastering data analytics, our workshops are meticulously crafted to deliver impactful results
          in a short timeframe. Join us at Skyfusion and embark on a journey of rapid skill development and innovation
          in the ever-evolving tech landscape.
</p></div><div class="grid gap-6 "><img src="/aiding-coding.jpg" alt="Raphael Amponsah helping a student to code" title="Raphael Amponsah helping a student to code" class="w-4/6 rounded"><!--{--><!--  publishedTeamMembers.map((teamMemberEntry) => (--><!--    <div key={teamMemberEntry.id} class="group w-full">--><!--      <Picture--><!--        src={teamMemberEntry.data.avatar.src}--><!--        alt={teamMemberEntry.data.avatar.alt}--><!--        sizes="(min-width: 1000px) 400vw, 400px"--><!--        width={800}--><!--        height={800}--><!--        class="w-full rounded-md transition group-hover:-translate-y-1 group-hover:shadow-xl bg-white object-cover object-center"--><!--      />--><!--      {/* Uncomment below to display name and title */}--><!--      {/* <div class="mt-4 text-center">--><!--        <h2 class="text-lg text-gray-800">{teamMemberEntry.data.name}</h2>--><!--        <h3 class="text-sm text-slate-500">{teamMemberEntry.data.title}</h3>--><!--      </div> */}--><!--    </div>--><!--  ))--><!--}--></div></div>${renderComponent($$result3, "Cta", $$Cta, {})}` })}` })}`;
}, "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/about.astro", void 0);
const $$file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/pages/about.astro";
const $$url = "/about";
export {
  $$About as default,
  $$file as file,
  $$url as url
};
