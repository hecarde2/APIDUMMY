import {
    searchProductsApi,
    getCatalogApi,
    getCategoryApi
}
from './api.js';

import {
    renderProducts
}
from './ui.js';

import {
    renderPagination
}
from './pagination.js';

const formSearch =
    document.getElementById('frm-search');

formSearch.addEventListener(
    'submit',
    async function(event){

        event.preventDefault();

        const searchText =
            this.querySelector('input').value;

        if(searchText.trim().length === 0){
            return;
        }

        const data =
            await searchProductsApi(searchText);

        const searchResults =
            document.getElementById('search-results');

        document.getElementById('quantity')
            .textContent = data.total;

        renderProducts(
            searchResults,
            data.products
        );

        this.querySelector('input').value = '';
    }
);

// CATALOGO
async function getCatalog(pagina = 1){

    const limit = 30;

    const skip = (pagina - 1) * limit;

    const data =
        await getCatalogApi(limit, skip);

    const catalog =
        document.getElementById('catalog');

    renderProducts(
        catalog,
        data.products
    );

    renderPagination(
        data.total,
        'getCatalog'
    );
}

// CATEGORIAS
async function getByCategory(
    categoria,
    pagina = 1
){

    const limit = 30;

    const skip = (pagina - 1) * limit;

    const data =
        await getCategoryApi(
            categoria,
            limit,
            skip
        );

    const catalog =
        document.getElementById('catalog');

    renderProducts(
        catalog,
        data.products
    );

    renderPagination(
        data.total,
        'getByCategory',
        categoria
    );
}

// VER TODO
function showAllProducts(){

    document.getElementById(
        'select-categoria'
    ).value = '';

    getCatalog(1);
}

// GLOBAL
window.getCatalog = getCatalog;
window.getByCategory = getByCategory;
window.showAllProducts = showAllProducts;

// INICIO
getCatalog(1);