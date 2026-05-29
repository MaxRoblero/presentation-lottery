const button=
document.getElementById("generate-button");

console.log("JS LOADED")
button.addEventListener("click", async () => {

    const count = document.getElementById("team-count").value;

    console.log("CLICK DETECTADO")
    const response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            count: count
        })
    });

    const data = await response.json();

    console.log(data);
});

// ============================
//      Code by MaxRoblero
// ============================