import yaml from 'js-yaml';

export function parseFrontmatter(content) {
  const match = /^---\s*\n([\s\S]*?)\n?---\s*\n([\s\S]*)$/.exec(content);
  if (!match) {
    throw new Error('Invalid front-matter format');
  }
  const frontmatter = match[1];
  const body = match[2];
  const data = yaml.load(frontmatter);
  return {
    frontmatter: data,
    content: body.trim(),
  };
}

export async function fetchAndParseMarkdown(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`Failed to fetch Markdown file. Status: ${response.status} (${url})`);
    }
    const markdownContent = await response.text();
    const { frontmatter, content } = parseFrontmatter(markdownContent);
    return { frontmatter, content, url };
  } catch (error) {
    console.error('Error fetching or parsing Markdown file:', error);
  }
}
