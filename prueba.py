import os


for n in os.listdir("source"):

    with open(f"source/{n}/horario.csv") as hor:
        hor = hor.read()
        print(hor)