import { productService } from "@/services/product.service";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await productService.getAll();

  const productEntries: MetadataRoute.Sitemap = products.map((product) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/catalog/${product.slug}`,
    };
  });

  return [
    {
      url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/catalog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...productEntries,
  ];
}
