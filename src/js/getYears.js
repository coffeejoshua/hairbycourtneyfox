// Hopefully fixes race conditions so it is executed after the DOM is fully loaded.

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const yearsExp = new Date().getFullYear() - 2005;
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("yearsExp").textContent = yearsExp;
});
