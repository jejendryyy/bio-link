/**
 * Copy Link
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

    actionLink.forEach((action) => {
        action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

/**
 * Toaster Notification
 */

        document.getElementById("toast").innerHTML = `
            <div class="toast-container">
                <p>✅ Link <strong> ${action.parentElement.innerText} </strong> Berhasil Disalin</p>
            </div>
        `;

        setTimeout(() => {
            document.querySelector("#toast .toast-container").classList.add("toast-gone")
        }, 300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000);
    })
});

/**
 * Hover Fill Icon
 */

document.querySelectorAll(".icon-sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill")
    })

    sosmed.addEventListener("mouseleave", (e) => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph")
    })
})

/**
 * Animation Scroll
 */

document.addEventListener("scroll", (e) => {

    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`
})