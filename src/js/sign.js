let allowed = false;
const btn = document.getElementById("fingerprint-btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    if (!allowed)
        allowed = window.confirm("Permitir o uso da sua localização como um dos meios de validação da sua assinatura?")

    if (allowed)
    {
        const img = document.getElementById("fingerprint");

        document.getElementById("pdf").src = "../assets/signed-doc.pdf";
        img.src = "../assets/signed-fingerprint.png"

        img.style.transform = "scale(1.3)";

        btn.disabled = true;
    }
})