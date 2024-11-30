let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () => {
   menu.classList.toggle('active');
};

window.onscroll = () => {
   menu.classList.remove('active');
};

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images => {
   images.onclick = () => {
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   };
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings => {
   headings.onclick = () => {
      headings.parentElement.classList.toggle('active');
   };
});

document.getElementById("searchForm").addEventListener("submit", function(event) {
   event.preventDefault();  
   
   let searchQuery = document.getElementById("searchInput").value.trim();
   
   if (searchQuery) {
       window.location.href = `search_results.html?query=${encodeURIComponent(searchQuery)}`;
   } else {
       alert("Please enter a search term.");
   }
});

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

if (query) {
    document.getElementById('query').textContent = query;
} else {
    document.getElementById('query').textContent = 'No search term provided';
}
