import { createClient } from 'microcms-js-sdk';

export type Recipe = {
    id: string;
    title: string;
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
});

export const getRecipes = async () => {
    const recipes = await client.getList<Recipe>({
        endpoint: "recipes"
    });
    return recipes;
}

export const getDetail = async (contentId: string) => {
    const recipe = await client.getListDetail<Recipe>({
        endpoint: "recipes",
        contentId,
    });
    return recipe;
};


