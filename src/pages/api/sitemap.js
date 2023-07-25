// pages/api/sitemap.js
import { format } from 'date-fns';
import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY;

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

const createSitemap = (articles) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add your website's homepage to the sitemap
  xml += `
    <url>
      <loc>https://www.luisgonzalezdev.org/</loc>
      <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`;

  // Add articles to the sitemap
  articles.forEach((article) => {
    const slug = article.fields.slug;
    const updatedAt = article.sys.updatedAt;
    xml += `
    <url>
      <loc>https://www.luisgonzalezdev.org/articles/${slug}</loc>
      <lastmod>${format(new Date(updatedAt), 'yyyy-MM-dd')}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  });

  xml += `
  </urlset>`;

  return xml;
};

export default async function handler(req, res) {
  let articles = [];

  try {
    // Fetch all articles from Contentful
    const response = await client.getEntries({
      content_type: 'blogPost', // Replace 'blogPost' with your Contentful content type name for articles
      limit: 1000, // Adjust the limit based on your number of articles
    });

    articles = response.items;
  } catch (error) {
    console.error('Error fetching articles from Contentful:', error);
  }

  // Generate the sitemap XML
  const xml = createSitemap(articles);

  // Set the response content type to XML
  res.setHeader('Content-Type', 'text/xml');
  // Send the sitemap XML as the response
  res.write(xml);
  res.end();
}
