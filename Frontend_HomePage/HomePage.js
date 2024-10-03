const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelectorAll('.container,.movie-list-title,.sidebar,.navbar-container,.left-menu-icon,.toggle-ball');
movieLists.forEach((movieList, i) => {
    const items = movieList.querySelectorAll(".movie-list-item");
    const itemWidth = movieList.querySelector(".movie-list-item").offsetWidth + 10;
    let clickCounter = 0;

    const maxClicks = items.length - Math.floor(movieList.parentElement.offsetWidth / itemWidth); // Tính toán số lần nhấn tối đa

    // Sự kiện cho mũi tên phải
    arrowsRight[i].addEventListener("click", () => {
        if (clickCounter < maxClicks) {
            clickCounter++;
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; // Di chuyển danh sách phim sang phải
        } else {
            movieList.style.transform = "translateX(0)"; // Reset về vị trí ban đầu
            clickCounter = 0;
        }
    });

    // Sự kiện cho mũi tên trái
    arrowsLeft[i].addEventListener("click", () => {
        if (clickCounter > 0) {
            clickCounter--;
            movieList.style.transform = `translateX(${-itemWidth * clickCounter}px)`; // Di chuyển danh sách phim sang trái
        } else {
            movieList.style.transform = `translateX(-${itemWidth * maxClicks}px)`; // Chuyển đến cuối danh sách
            clickCounter = maxClicks;
        }
    });

    // Xử lý bookmark cho từng item
    items.forEach((item) => {
        const bookmarkIcon = item.querySelector('.bookmark-icon');

        // Ẩn biểu tượng bookmark ban đầu
        bookmarkIcon.style.opacity = '0';

        // Hiển thị bookmark khi hover vào item
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('bookmarked')) {
                bookmarkIcon.style.opacity = '0.5'; // Hiển thị nhẹ khi chưa được bookmark
            }
        });

        // Ẩn bookmark khi không hover và chưa được bookmark
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('bookmarked')) {
                bookmarkIcon.style.opacity = '0'; // Ẩn đi khi rời chuột
            }
        });

        // Sự kiện khi bấm vào bookmark
        bookmarkIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Ngăn không cho sự kiện click ảnh hưởng đến item
            // Nếu chưa được bookmark, thêm class 'bookmarked'
            if (!item.classList.contains('bookmarked')) {
                item.classList.add('bookmarked');
                bookmarkIcon.style.opacity = '1'; // Hiển thị rõ sau khi bookmark
            } else {
                // Nếu đã bookmark, bấm lại để bỏ bookmark
                item.classList.remove('bookmarked');
                bookmarkIcon.style.opacity = '0.5'; // Làm mờ khi bỏ bookmark
            }
        });
    });

    

    toggle.addEventListener('click',() => {
    toggleBall.forEach(color_mode=>{
        color_mode.classList.toggle('active')
    });

    toggle.classList.toggle('active');

});

});
