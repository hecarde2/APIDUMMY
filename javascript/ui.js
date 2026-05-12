export function renderProducts(
    contenedor,
    productos
){

    contenedor.innerHTML = '';

    for(let product of productos){

        const {
            title,
            thumbnail,
            price,
            rating
        } = product;

        contenedor.innerHTML += `

        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

            <div class="h-48 bg-zinc-800 flex items-center justify-center">

                <img
                    src="${thumbnail}"
                    alt="${title}"
                    class="h-full w-full object-cover"
                >

            </div>

            <div class="p-4">

                <div class="flex items-center justify-between">

                    <h3 class="font-semibold text-sm">
                        ${title}
                    </h3>

                    ${
                        rating
                        ?
                        `
                        <span class="text-yellow-400 text-sm">
                            ★ ${rating}
                        </span>
                        `
                        :
                        ''
                    }

                </div>

                <p class="text-blue-400 font-bold mt-2">
                    $${price}
                </p>

            </div>

        </div>

        `;
    }
}