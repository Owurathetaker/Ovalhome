import { MetadataRoute } from "next";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ovalhome.vercel.app/",
      lastModified: new Date(),
    },
  ];
}