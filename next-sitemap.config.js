/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://skyspirit-drones.com.ar",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
