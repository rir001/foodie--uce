import os

add = ""

for shop in os.listdir("source"):
    for producto in os.listdir(f"source/{shop}/productos"):
        add += f'''
                <div class = " item ">
                    <img src = " source/{shop}/productos/{producto} ">
                    <d> {producto.split(".")[0]} </d>
                </div>'''


with open("load.html", "r") as html:
    html = html.read().replace("<h1> NO LOADS </h1>", add)

with open("index.html", "w") as index:
    index.write(html)

