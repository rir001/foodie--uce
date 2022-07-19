function load()
{
    for (const tienda in tiendas)
    {
        for (const producto in tiendas[tienda]["Productos"])
        {
            if (tienda != "Tienda")
            {
                document.getElementById("galery").innerHTML +=
                `
                <a class = "item" href = "">
                    <img src="source/${tienda}/productos/${producto}.jpg">
                    <label> ${producto} </label>
                </a>
                `;
            }
        }
    }
}