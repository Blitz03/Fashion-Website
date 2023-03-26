import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "v0gkaxwj",
  dataset: "production",
  useCdn: true,
  token:
    "skguqjd8N1lhVjdkMvwXOzSaKlVmFLKfZ8TIW5vvgsnLfbggYaDCRi0u3Fko6UUdCVdAkRceyAKJ75xNaPSSNaiBtRJBRw8Cp49h2PpHpWgJmafmqu3dCHa9P6gtJhbHD21reW8L2LJvcTU0uOTHAZWnNXQk45NNcw2XjrO7ugSNXbWlQmsq",
});

export async function fetchProducts() {
  const query = `*[_type == 'product']`;
  const products = await client.fetch(query);
  return products;
}

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
