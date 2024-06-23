import { n as createComponent, o as renderTemplate, p as maybeRenderHead, v as unescapeHTML } from "./astro/server_O8A7kLy3.mjs";
import "kleur/colors";
import "clsx";
const html = "";
const frontmatter = { "draft": false, "title": "Pythonic Data Science: Mastering Analytics with Python", "teaser": "Unlock the power of Python for Data Science in this intensive, hands-on workshop!", "snippet": "From data manipulation to advanced analytics, elevate your skills with Python.", "description": "Join us for a dynamic 3-day workshop focusing on practical applications of Python in Data Science. Learn essential techniques, algorithms, and tools necessary for data manipulation, visualization, and machine learning. This workshop is designed to equip you with practical skills through live coding sessions and real-world case studies.", "numberOfDays": 3, "duration": 24, "image": { "src": "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "alt": "Python Data Science Workshop" }, "publishDate": "2024-07-01T00:00:00.000Z", "author": "Skyfusion", "deadline": "2024-08-02T00:00:00.000Z", "category": "Data Science", "tags": ["Python", "Data Science", "Machine Learning", "Analytics"], "status": "Paid", "content": [{ "title": "Day 1: Foundations of Python for Data Science", "description": "Master the basics of Python programming tailored for data analysis and manipulation. Explore libraries like NumPy and Pandas for efficient data handling." }, { "title": "Day 2: Advanced Data Analysis and Visualization", "description": "Dive into advanced data analysis techniques using Pandas and Matplotlib. Learn to derive insights from complex datasets through hands-on exercises." }, { "title": "Day 3: Machine Learning with Python", "description": "Discover the fundamentals of machine learning with Python. Build predictive models using scikit-learn and understand the essentials of model evaluation and deployment." }], "workshopSecurityCode": "PYTHONDS2024", "capstoneProjects": 2, "actualPrice": 1860, "discount": 15, "instructorBio": "", "instructorImage": "/images/john-smith.jpg", "learn": ["Use Python for data manipulation, analysis, and visualization", "Apply machine learning algorithms to solve real-world problems", "Gain practical experience through live coding sessions and case studies"], "requirements": ["Basic programming knowledge (Python preferred)", "Laptop with Anaconda installed"], "workshopDetails": { "startDate": "2024-08-07T00:00:00.000Z", "endDate": "2024-08-09T00:00:00.000Z", "location": "GIMPA, Accra, Ghana", "startTime": "10:00 AM", "breakTime": "12:00 PM", "closingTime": "04:00 PM", "otherDetails": "Breakfast and lunch will be provided. This workshop will be held at GIMPA, not online. Participants will receive access details prior to the start date." } };
const file = "C:/Users/GATEWAY/DeveloperConsole/astroship/src/content/training/pythonic-data-science.md";
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
