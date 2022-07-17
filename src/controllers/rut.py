# from operator import len


def calcularVerificador(rut):
    rutList = [int(x) for x in str(rut)]
    rutList.reverse()
    serie = [2,3,4,5,6,7,2,3]
    # 8 caracteres tiene un rut
    n = 0
    valoresSumados = 0
    for i in rutList:
        # print("El numero del RUT es:" + str(i))
        # print("El numero de la serie es:" + str(serie[n]))
        valorDigito = i * serie[n]

        # print(f"El resultado es: {valorDigito} ")
        valoresSumados = valoresSumados + valorDigito

        # n es el iterador
        n = n + 1

    resto = valoresSumados // 11
    multiPen =  resto * 11
    final = 11 - abs(valoresSumados - multiPen)
    print(f"El digito verificador es: {final}")
    return final

print("Ingresa tu RUT por favor")
rut = int(input(">"))
calcularVerificador(rut)

def verificarRut(rut):
    print("Ingresa tu RUT sin puntos, con Guion y su digito verificador. Ej. XX.XXX.XXX-X")
    if len(rut) != 10 or "." in rut:
        print("Formato incorrecto")
    elif len(rut) == 10 and "-" in rut and not "." in rut:
        print("Formato correcto")
        print(f"RUT:{rut[0:8]} y Digito Verificador {rut[-1]}")
        if calcularVerificador(int(rut[0:8])) == rut[-1]:
            print("Rut Valido")
        else:
            print("Rut Invalido")
    else:
        print("Otro error, que no vale la pena especificar")
# verificarRut(input())