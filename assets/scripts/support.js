    // Functie om gegevens uit het formulier te halen
    function getFormData() {
        const naam = document.getElementById("naam").value;
        const email = document.getElementById("email").value;
        const vraag = document.getElementById("vraag").value;
        return { naam, email, vraag };
    }

    // Functie om gegevens naar Discord-webhook te verzenden
    function sendDataToDiscord(data) {
        const webhookURL = "https://discord.com/api/webhooks/1206205513407397948/8_eJg7d4JrA0jHMVIZy85T5d2xXwfk3PANjFShpVTd8LTcNR3tu1xMfIQep899_f37xg";

        const embedData = {
            color: 098255,
            title: "Nieuw bericht via het hulpformulier",
            fields: [
                { name: "Naam:", value: data.naam },
                { name: "E-mail:", value: data.email },
                { name: "Vraag:", value: data.vraag }
            ]
        };

        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ embeds: [embedData] }),
        }).then(response => {
            if (response.ok) {
                alert("Uw bericht is succesvol verzonden!");
            } else {
                alert("Er is een fout opgetreden bij het verzenden van uw bericht.");
            }
        }).catch(error => {
            console.error("Fout bij het verzenden van gegevens naar Discord:", error);
            alert("Er is een fout opgetreden bij het verzenden van uw bericht.");
        });
    }

    // Voeg een eventlistener toe aan de verzendknop
    document.getElementById("send-btn").addEventListener("click", function() {
        const formData = getFormData();
        sendDataToDiscord(formData);
    });
