import { n as createComponent, o as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
const html = "";
const frontmatter = { "draft": false, "title": "AI Web Development Bootcamp: Build Intelligent Web Apps", "teaser": "Step into the future of web development with AI-driven applications in this hands-on bootcamp!", "snippet": "Create intelligent, dynamic web applications with AI in just three days.", "description": "Join our immersive 3-day AI Web Development Bootcamp and transform your web development skills. This intensive workshop will teach you how to integrate AI into your web projects, from foundational concepts to advanced deployment strategies. Experience hands-on learning with real-world projects, and walk away with the expertise to create cutting-edge AI-powered web applications.", "numberOfDays": 3, "duration": 24, "image": { "src": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "alt": "AI Web Development Bootcamp" }, "publishDate": "2024-07-01T00:00:00.000Z", "author": "Skyfusion", "authorLink": "", "deadline": "2024-09-03T00:00:00.000Z", "category": "Web Development", "tags": ["AI", "Web Development", "Machine Learning", "JavaScript"], "status": "Paid", "content": [{ "title": "Day 1: AI Fundamentals and Web Integration", "description": "Kick off with the basics of AI and its integration into web development. Set up your environment and explore key tools and libraries." }, { "title": "Day 2: Building Intelligent Web Applications", "description": "Get hands-on experience creating web applications with AI features. Work on exciting projects using popular frameworks and libraries." }, { "title": "Day 3: Advanced AI Techniques and Deployment", "description": "Learn advanced AI techniques and deploy your AI-powered web applications. Focus on scalability, security, and performance optimization." }], "workshopSecurityCode": "AIWEBDEV2024", "capstoneProjects": 2, "actualPrice": 1860, "discount": 15, "instructorBio": "Alex Johnson is a pioneering AI developer with over a decade of experience. Known for his innovative approach to AI and web technologies, Alex has led numerous workshops and is passionate about teaching the next generation of developers.", "instructorImage": "/images/alex-johnson.jpg", "learn": ["Master AI fundamentals and their web applications", "Integrate intelligent features into web applications using top frameworks", "Deploy AI-powered web apps that are scalable, secure, and high-performing"], "requirements": ["Basic programming knowledge (JavaScript preferred)", "Laptop with Node.js installed"], "workshopDetails": { "startDate": "2024-09-04T00:00:00.000Z", "endDate": "2024-09-06T00:00:00.000Z", "location": "To Be Determined", "startTime": "10:00 AM", "breakTime": "12:00 PM", "closingTime": "04:00 PM", "targetedAudience": "Web Developers, AI Enthusiasts", "otherDetails": "Lunch and refreshments will be provided. The exact location will be communicated closer to the start date." } };
const file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/content/training/ai-web-development.md";
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
