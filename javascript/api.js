const URL = 'https://dummyjson.com/products';

export async function searchProductsApi(text){

    const response = await fetch(
        `${URL}/search?q=${text}`
    );

    return await response.json();
}

export async function getCatalogApi(limit, skip){

    const response = await fetch(
        `${URL}?limit=${limit}&skip=${skip}`
    );

    return await response.json();
}

export async function getCategoryApi(
    categoria,
    limit,
    skip
){

    const response = await fetch(
        `${URL}/category/${categoria}?limit=${limit}&skip=${skip}`
    );

    return await response.json();
}