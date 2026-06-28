function showPrank() {
    document.getElementById("message").innerText =
        "😂 Relax! It's just a prank!";
}

setInterval(() => {
    const colors = ["red", "yellow", "cyan", "lime", "orange"];
    document.body.style.color =
        colors[Math.floor(Math.random() * colors.length)];
}, 500);
