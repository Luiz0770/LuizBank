export default function verifiarIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validarData(dataNascimento)) {
        campo.setCustomValidity('O usuario nao e maior de idade')
    }

    console.log(validarData(dataNascimento))
}

function validarData(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18;
}