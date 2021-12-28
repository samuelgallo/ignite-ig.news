import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_URL_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_TOKEN,
  });

  return prismic;
}
