/**
 * news object contains:
 *  id
 *  cover image
 *  news title
 *  news description
 *  categories
 *  author
 *  published_date
 */
// list of news object
const news1 = {
    id: 1,
    coverImage: '/assets/news_img/market_hit.jpg',
    newsTitle: 'Breaking News: Market Hits Record High',
    newsDescription: 'The stock market reached an all-time high today with major indices showing significant gains.',
    categories: ['Finance', 'Economy'],
    author: 'Jane Doe',
    publishedDate: '10-01-2024'
};

const news2 = {
    id: 2,
    coverImage: '/assets/news_img/tech_innovation.jpg',
    newsTitle: 'New Tech Innovations Announced at Conference',
    newsDescription: 'Several new technology products were unveiled at the annual tech conference today.',
    categories: ['Technology', 'Innovation'],
    author: 'John Smith',
    publishedDate: '30-09-2024'
};

const news3 = {
    id: 3,
    coverImage: '/assets/news_img/support_win.jpg',
    newsTitle: 'Local Sports Team Wins Championship',
    newsDescription: 'The local sports team clinched the championship in a thrilling final match.',
    categories: ['Sports', 'Local News'],
    author: 'Alex Johnson',
    publishedDate: '29-09-2024'
};

const news4 = {
    id: 4,
    coverImage: '/assets/news_img/tect_industry.jpg',
    newsTitle: 'New Tech Innovation Revolutionizes Industry',
    newsDescription: 'A groundbreaking innovation in technology is set to revolutionize the industry.',
    categories: ['Technology', 'Business'],
    author: 'Samantha Lee',
    publishedDate: '10-01-2024'
};

const news5 = {
    id: 5,
    coverImage: '/assets/news_img/city_council.jpg',
    newsTitle: 'City Council Approves New Park Development',
    newsDescription: 'The city council has approved the development of a new park in the downtown area.',
    categories: ['Local News', 'Community'],
    author: 'Michael Smith',
    publishedDate: '25-09-2024'
};

const news6 = {
    id: 6,
    coverImage: '/assets/news_img/health_official.jpg',
    newsTitle: 'Health Officials Announce Vaccination Drive',
    newsDescription: 'Health officials have announced a new vaccination drive to curb the spread of the virus.',
    categories: ['Health', 'Local News'],
    author: 'Emma Davis',
    publishedDate: '30-09-2024'
};

const news7 = {
    id: 7,
    coverImage: '/assets/news_img/robotics.jpg',
    newsTitle: 'Local School Wins Robotics Competition',
    newsDescription: 'A local school has won a national robotics competition, showcasing their innovation and skill.',
    categories: ['Education', 'Local News'],
    author: 'James Brown',
    publishedDate: '28-09-2024'
};

const news8 = {
    id: 8,
    coverImage: '/assets/news_img/restaurant_downtown.jpg',
    newsTitle: 'New Restaurant Opens Downtown',
    newsDescription: 'A new restaurant featuring international cuisine has opened in the downtown area.',
    categories: ['Food', 'Local News'],
    author: 'Linda Johnson',
    publishedDate: '27-09-2024'
};

const news9 = {
    id: 9,
    coverImage: '/assets/news_img/environment_group.jpg',
    newsTitle: 'Environmental Group Hosts Cleanup Event',
    newsDescription: 'An environmental group is hosting a community cleanup event to promote sustainability.',
    categories: ['Environment', 'Local News'],
    author: 'Robert Miller',
    publishedDate: '26-09-2024'
};


// Array to hold the news objects
const newsList = [news1, news2, news3, news4, news5, news6, news7, news8, news9];

// Function to search news
function searchNews() {
    const searchTitle = document.getElementById('search-news').value.toLowerCase();
    const searchCategory = document.getElementById('search-category').value.toLowerCase();

    const filteredNews = newsList.filter(news => {
        const titleMatch = news.newsTitle.toLowerCase().includes(searchTitle);
        const categoryMatch = searchCategory === '' || news.categories.some(category => category.toLowerCase() === searchCategory);
        return titleMatch && categoryMatch;
    });

    displayNews(filteredNews);
}

// Function to display news
function displayNews(newsArray) {
    const newsBody = document.getElementById('body');
    newsBody.innerHTML = ''; // Clear the existing content before adding new

    newsArray.forEach(news => {
        const newsRow = document.createElement('tr');

        newsRow.innerHTML = `
            <td>${news.id}</td>
            <td><img src="${news.coverImage}" alt="${news.newsTitle}" width="100" height="100"></td>
            <td>${news.newsTitle}</td>
            <td>${news.newsDescription}</td>
            <td>${news.categories.join(', ')}</td>
            <td>${news.author}</td>
            <td>${news.publishedDate}</td>
            <td></td>
        `;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.style.display = 'flex';
        buttonsDiv.style.flexDirection = 'column';

        const editButton = document.createElement('button');
        editButton.className = 'modify_button';
        editButton.id = 'edit_button';
        const edit_icon = document.createElement('i');
        edit_icon.className = 'fa-regular fa-pen-to-square';
        edit_icon.id = 'edit-icon';
        editButton.appendChild(document.createTextNode('Edit '));
        editButton.appendChild(edit_icon);
        editButton.onclick = function() {
            openEditBox(news);
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete <i class="fa-solid fa-trash"></i>';
        deleteButton.className = 'modify_button';
        deleteButton.id = 'delete_button';
        deleteButton.onclick = function() {
            let del_confirm_mess = document.getElementById('del-confirm-mess');
            delTitle.innerHTML = news.newsTitle;
            del_confirm_mess.appendChild(delTitle);
            openDeleteBox();
        };

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);
        newsRow.cells[7].appendChild(buttonsDiv);

        newsBody.appendChild(newsRow);
    });
}

// Initial display of all news
displayNews(newsList);

// edit modal box
let editBox = document.getElementById('edit-box');
// find news title
let newsTitle = document.getElementById('news-title');
// find cover images
let cover_img = document.getElementById('edit-img');
// find category
let categories = document.getElementById('category');
// find author
let author = document.getElementById('author');
// find published date
let published_date = document.getElementById('published-date');
//find news description
let newsDescription = document.getElementById('news-description');

function openEditBox(news){
    editBox.classList.add('open-box');
    let box_container = document.querySelector('.box-container');
    box_container.style.visibility = 'visible';
    // add details
    cover_img.src = news.coverImage;
    newsTitle.value += news.newsTitle;
    newsDescription.value += news.newsDescription;
    categories.value += news.categories;
    author.value += news.author;
    published_date.value += news.publishedDate;
    // disable scroll
    document.body.style.overflow = 'hidden';

}

// delete modal box
let deleteBox = document.getElementById('delete-box');
function openDeleteBox(){
    deleteBox.classList.add('open-box');
    let box_container = document.querySelector('.box-container');
    box_container.style.visibility = 'visible';
    // disable scroll
    document.body.style.overflow = 'hidden';
}
// find table
let table = document.getElementById('body');

// close button
function onEditButtonClose(){
    editBox.classList.remove('open-box');
    // delete details
    newsTitle.value = null;
    newsDescription.value = null;
    cover_img.src = null;
    categories.value = null;
    author.value = null;
    published_date.value = null;
    //
    let box_container = document.querySelector('.box-container');
    box_container.style.visibility = 'hidden';
    // enable scroll
    document.body.style.overflow = 'visible';
}
const delTitle = document.createElement('h4');
function onDeleteButtonClose(){
    deleteBox.classList.remove('open-box');
    let box_container = document.querySelector('.box-container');
    box_container.style.visibility = 'hidden';
    delTitle.innerText = null;
    // enable scroll
    document.body.style.overflow = 'visible';
}

for(let i = 0; i < newsList.length; i++){
    // insert row
    let row = table.insertRow(i);
    // insert cell
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    let cell5 = row.insertCell(5);
    let cell6 = row.insertCell(6);
    let cell7 = row.insertCell(7);
    // insert value
    cell0.innerHTML = newsList[i].id;
    // Create an image element for coverImage
    let img = document.createElement('img');
    img.src = newsList[i].coverImage;
    img.alt = newsList[i].newsTitle;
    img.style.width = '100px'; // Adjust the size as needed
    cell1.appendChild(img);
    //
    cell2.innerHTML = newsList[i].newsTitle;
    cell3.innerHTML = newsList[i].newsDescription;
    cell4.innerHTML = newsList[i].categories;
    cell5.innerHTML = newsList[i].author;
    cell6.innerHTML = newsList[i].publishedDate;

    // create and insert button
    let buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.flexDirection = 'column';

    // edit button
    let editButton = document.createElement('button');
    editButton.className = 'modify_button';
    editButton.id = 'edit_button';
    // edit icon element
    let edit_icon = document.createElement('i');
    edit_icon.className = 'fa-regular fa-pen-to-square';
    edit_icon.id = 'edit-icon';
    editButton.appendChild(document.createTextNode('Edit '));
    editButton.appendChild(edit_icon);
    editButton.onclick = function() {
        // open edit box
        openEditBox(newsList[i]);
    };

    // delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete <i class="fa-solid fa-trash"></i>';
    deleteButton.className = 'modify_button';
    deleteButton.id = 'delete_button';
    deleteButton.onclick = function() {
        let del_confirm_mess = document.getElementById('del-confirm-mess');
        delTitle.innerHTML = newsList[i].newsTitle;
        del_confirm_mess.appendChild(delTitle);
        openDeleteBox();
    };

    // Append buttons to the div
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    // Append the div to the cell
    cell7.appendChild(buttonsDiv);
}

// remove pop-up window when click
// window.addEventListener(
//     "click",
//     function (event) {
//         console.log(event);
//         if (event.target.classList.contains("edit-box")) {
//             editBox.classList.remove(
//                 "open-box"
//             );
//         } else if(isDeleteBoxOpen) {
//             deleteBox.classList.remove("open-box");
//         }
//     }
// );

// Define the initial sort direction of each column
let sortDirection = {newsId:"asc", published_date:"asc"};

// get sorting icon
let idSortIc = document.getElementById('news_id').getElementsByTagName('i')[0];
let dateSortIc = document.getElementById('published_date').getElementsByTagName('i')[0];
