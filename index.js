const SEARCH_TOAST_TEXT =
  "Данный сайт является макетом! Свяжитесь со мной и мы реализуем любую вашу идею.";

const ensureToastContainer = () => {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    container.setAttribute("aria-live", "polite");
    container.setAttribute("role", "status");
    document.body.appendChild(container);
  }
  return container;
};

const showToast = (message, { duration = 2500 } = {}) => {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  window.setTimeout(() => {
    toast.classList.add("is-hiding");
    window.setTimeout(() => {
      toast.remove();
      if (!container.querySelector(".toast")) {
        container.remove();
      }
    }, 260);
  }, duration);
};

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showToast(SEARCH_TOAST_TEXT);
    });
  });
});
