export function renderPagination(
    totalProductos,
    funcion,
    categoria = ''
){

    const pagination =
        document.getElementById('pagination');

    pagination.innerHTML = '';

    const productosPorPagina = 30;

    const totalPaginas = Math.ceil(
        totalProductos / productosPorPagina
    );

    for(let i = 1; i <= totalPaginas; i++){

        pagination.innerHTML += `

        <button
            onclick="${funcion}(${i}${categoria ? `, '${categoria}'` : ''})"
            id="btn-${i}"
            class="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-xl">

            ${i}

        </button>

        `;
    }
}