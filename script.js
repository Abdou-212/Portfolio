const email = "abdou.anouar.pro@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("copyEmail").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await navigator.clipboard.writeText(email);
    const el = document.getElementById("copyEmail");
    const old = el.textContent;
    el.textContent = "Copié ✅";
    setTimeout(() => (el.textContent = old), 1200);
  } catch {
    alert("Copie impossible (autorisation navigateur).");
  }
});

