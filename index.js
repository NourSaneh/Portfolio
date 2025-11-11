    const copyBtn = document.getElementById("copy-btn");
    const tooltip = document.getElementById("copy-tooltip");
    const email = document.getElementById("email-text").innerText;
    let hideT;

    function showTooltip() {
        clearTimeout(hideT);
    tooltip.classList.remove("opacity-0", "translate-y-2");
    tooltip.classList.add("opacity-100", "translate-y-0");
    hideT = setTimeout(hideTooltip, 1200);
                }
    function hideTooltip() {
        tooltip.classList.add("opacity-0", "translate-y-2");
    tooltip.classList.remove("opacity-100", "translate-y-0");
                }

                copyBtn.addEventListener("click", async () => {
                    try {
        await navigator.clipboard.writeText(email);
                    } catch {
                        // Fallback for older browsers
                        const ta = document.createElement("textarea");
    ta.value = email; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); document.body.removeChild(ta);
                    }
    showTooltip();
                });

    copyBtn.addEventListener("mouseleave", hideTooltip);
    copyBtn.addEventListener("blur", hideTooltip);
                document.addEventListener("keydown", (e) => { if (e.key === "Escape") hideTooltip(); });

