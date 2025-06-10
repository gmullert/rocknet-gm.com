document.addEventListener('DOMContentLoaded', () => {
    const callToActionButtons = document.querySelectorAll('.call-to-action');

    callToActionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const plan = event.target.dataset.plan;
            const whatsappNumber = '5588992675749'; // Substitua pelo seu número de WhatsApp com código do país (ex: 5521999998888)

            // Mensagem pré-preenchida para o WhatsApp
            const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o Plano ${plan} da Rocknet-GM.`);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            window.open(whatsappLink, '_blank');
        });
    });
});
