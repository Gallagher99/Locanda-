document.querySelectorAll('.chiodo').forEach(chiodo => {
    chiodo.addEventListener('keydown', (e) => {
        let top = parseFloat(chiodo.style.top);
        let left = parseFloat(chiodo.style.left);
        const step = 0.5; // Precisione dello spostamento

        if (e.key === "ArrowUp" || e.key === "w") top -= step;
        if (e.key === "ArrowDown" || e.key === "s") top += step;
        if (e.key === "ArrowLeft" || e.key === "a") left -= step;
        if (e.key === "ArrowRight" || e.key === "d") left += step;

        chiodo.style.top = top + "%";
        chiodo.style.left = left + "%";

        // Mostra le coordinate nel box per poterle salvare
        console.log(`Punto: ${chiodo.innerText.trim()} -> top: ${top}%, left: ${left}%`);
    });
});
