function mostrar(id) {
    document.querySelectorAll('.conteudo').forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

function copiar() {
    const texto = document.getElementById("mensagem");
    texto.select();
    document.execCommand("copy");
    alert("Mensagem copiada!");
}

function whatsapp() {
    const msg = encodeURIComponent("Olá, desejo agendar a minha viagem!");
    window.open("https://wa.me/5511947481028?text=" + msg, "_blank");
}
