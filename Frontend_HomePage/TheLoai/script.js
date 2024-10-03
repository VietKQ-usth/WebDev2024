const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelectorAll('.container, .movie-list-title, .sidebar, .navbar-container, .left-menu-icon, .toggle-ball');

// Kiểm tra trạng thái được lưu trong localStorage khi tải lại trang
window.addEventListener('load', () => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark-mode') {
        toggleBall.forEach(color_mode => {
            color_mode.classList.add('active');
        });
        toggle.classList.add('active');
    } else {
        toggleBall.forEach(color_mode => {
            color_mode.classList.remove('active');
        });
        toggle.classList.remove('active');
    }
});

// Xử lý chuyển đổi chế độ sáng/tối và lưu trạng thái vào localStorage
toggle.addEventListener('click', () => {
    toggleBall.forEach(color_mode => {
        color_mode.classList.toggle('active'); // Thay đổi chế độ sáng/tối bằng cách toggle class 'active'
    });

    toggle.classList.toggle('active'); // Thay đổi màu của toggle

    // Lưu trạng thái vào localStorage
    if (toggle.classList.contains('active')) {
        localStorage.setItem('mode', 'dark-mode');
    } else {
        localStorage.setItem('mode', 'light-mode');
    }
});