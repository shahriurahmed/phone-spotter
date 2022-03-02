// get value from search field
const searchPhone = () => {
    const searchField = document.getElementById('searchbox');
    const searchtarget = searchField.value;
    searchField.value = '';
    const searchResult = document.getElementById('searchresult');
    const serror = document.getElementById('error');
    serror.innerHTML = '';
    const showbtn = document.getElementById('showmorebtn');
    showbtn.innerHTML = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchtarget}`;


    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data));
}

const displayPhones = phones => {

    const searchResult = document.getElementById('searchresult');
    const showmore = document.getElementById('showmorebtn');
    const err = document.getElementById('error');
    if (phones.length == 0) {
        const h4 = document.createElement('h4');
        h4.classList.add('text-center', 'text-danger', 'fw-bold');
        h4.innerText = `No item Found.....`;
        err.appendChild(h4);

    }
    else if (phones.length > 20) {
        const div1 = document.createElement('div');
        div1.classList.add('d-grid', 'gap-2', 'd-md-flex', 'justify-content-md-end');
        div1.innerHTML = `<button id="smore" class="btn btn-warning me-md-2 text-white" type="button">Button</button>`;
        showmore.appendChild(div1);
        for (var i = 0; i < 20; i++) {
            console.log(phones[i]);

            const div = document.createElement('div');
            div.classList.add('col',);
            div.innerHTML = `<div class="card h-100 shadow p-3 mb-5 bg-body rounded">
            <img src="${phones[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                     additional content. This content is a little bit longer.</p>
            </div>
        </div>`;
            searchResult.appendChild(div);
        }
        document.getElementById('smore').addEventListener('click', function () {
            console.log('Button is ok');
        })



    }
    else if (phones.length < 20) {
        for (var i = 0; i < phones.length; i++) {
            console.log(phones[i]);

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div class="card h-100 shadow p-3 mb-5 bg-body rounded">
            <img src="${phones[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                     additional content. This content is a little bit longer.</p>
            </div>
        </div>`;
            searchResult.appendChild(div);
        }
    }





}

