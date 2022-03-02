// get value from search field
const searchPhone = () => {
    const searchField = document.getElementById('searchbox');
    const searchtarget = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchtarget}`;

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

