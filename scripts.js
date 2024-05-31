document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const cartToggle = document.getElementById('cartToggle');
    const cartSidebar = document.getElementById('cartSidebar');
    const profileName = document.getElementById('profileName');
    const profileImage = document.getElementById('profileImage');

    let loggedIn = false;

    menuToggle.addEventListener('click', function () {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px';
        } else {
            sidebar
