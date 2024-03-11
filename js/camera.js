const btnAbrirCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const btnTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const btnEnviar = document.querySelector('[data-enviar]');

const imagemURL = ""

btnAbrirCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

    btnAbrirCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

btnTirarFoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas,width, canvas.height);

    imagemURL = canvas.toDataURL("imagem/jpeg");
    campoCamera.style.display = "none"
    mensagem.style.display = "block"
})

btnEnviar.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const convertRetorno = JSON.parse(receberDadosExistentes);

    convertRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(convertRetorno));

    window.location.href = ".abrir-conta-form-3.html"
})