const btn = document.getElementById("mybutton");

// Văn bản gốc và văn bản khi hover
const originalText = btn.textContent;
const hoverText = "bao gi cung lam a";

btn.addEventListener("mouseenter", () => {
    btn.textContent = hoverText; // thay chữ khi hover
});

btn.addEventListener("mouseleave", () => {
    btn.textContent = originalText; // trả về chữ gốc khi rời hover
});
