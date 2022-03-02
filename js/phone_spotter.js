// get value from search field
const searchPhone = () => {
    const searchField = document.getElementById('searchbox');
    const searchtarget = searchField.value;
    searchField.value = '';
    const searchResult = document.getElementById('searchresult');
    searchResult.innerHTML = '';
    const serror = document.getElementById('error');
    serror.innerHTML = '';
    const showbtn = document.getElementById('showmorebtn');
    showbtn.innerHTML = '';
    const itemDiv = document.getElementById('item_details');
    itemDiv.innerHTML = ``;

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
        div1.innerHTML = `<button id="smore" class="btn btn-warning me-md-2 text-white" type="button">Show More</button>`;
        showmore.appendChild(div1);
        for (var i = 0; i < 20; i++) {
            const div = document.createElement('div');
            div.classList.add('col',);
            div.innerHTML = `<div class="card h-100 shadow p-3  bg-body rounded">
            <img src="${phones[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold ">${phones[i].phone_name}</h5>
                <p class="card-text ">${phones[i].brand}</p>

                <button onclick="loadDetailsByName('${phones[i].slug}')" class="btn btn-warning me-md-2 text-white" type="button">View Details</button>
            </div >
        </div > `;
            searchResult.appendChild(div);
        }
        document.getElementById('smore').addEventListener('click', function () {
            for (var i = 20; i < phones.length; i++) {

                const div = document.createElement('div');
                div.classList.add('col',);
                div.innerHTML = `<div class="card h-100 shadow p-3  bg-body rounded">
            <img src="${phones[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold ">${phones[i].phone_name}</h5>
                <p class="card-text ">${phones[i].brand}</p>

                <button onclick="loadDetailsByName('${phones[i].slug}')" class="btn btn-warning me-md-2 text-white" type="button">View Details</button>
            </div >
        </div > `;
                searchResult.appendChild(div);


                div1.innerHTML = ``;
                showmore.appendChild(div1);
            }
        })



    }
    else if (phones.length < 20) {
        for (var i = 0; i < phones.length; i++) {
            const div = document.createElement('div');
            div.classList.add('col',);
            div.innerHTML = `<div class="card h-100 shadow p-3  bg-body rounded">
            <img src="${phones[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold ">${phones[i].phone_name}</h5>
                <p class="card-text ">${phones[i].brand}</p>

                <button onclick="loadDetailsByName('${phones[i].slug}')" class="btn btn-warning me-md-2 text-white" type="button">View Details</button>
            </div >
        </div > `;
            searchResult.appendChild(div);
        }
    }

}

const loadDetailsByName = name => {
    const url = `https://openapi.programming-hero.com/api/phone/${name}`;
    console.log(name);
    fetch(url)
        .then(res => res.json())
        .then(data => displayinfo(data.data));

}

const displayinfo = info => {
    const itemDiv = document.getElementById('item_details');
    itemDiv.innerHTML = `
    <div class="card mx-auto pt-3 shadow p-3  bg-body rounded" style="width: 35rem;">
    <h2 class="text-center fw-bold py-3">Product Details</h2>
  <img src="${info.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title fw-bold">${info.name}</h4>
    <p class="card-text fw-bold">${info.brand}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Release Dtae: ${info.releaseDate}</li>
    <li class="list-group-item">Storage: ${info.mainFeatures.storage}</li>
    <li class="list-group-item">Display Size: ${info.mainFeatures.displaySize}</li>
    <li class="list-group-item">ChipSet: ${info.mainFeatures.chipSet}</li>
    <li class="list-group-item">Memory: ${info.mainFeatures.memory}</li>
    <li class="list-group-item">Sensors: ${info.mainFeatures.sensors}</li>
    <li class="list-group-item">WLAN: ${info.others.WLAN}</li>
    <li class="list-group-item">Bluetooth: ${info.others.Bluetooth}</li>
    <li class="list-group-item">GPS: ${info.others.GPS}</li>
    <li class="list-group-item">NFC: ${info.others.NFC}</li>
    <li class="list-group-item">Radio: ${info.others.Radio}</li>
    <li class="list-group-item">USB: ${info.others.USB}</li>
  </ul>
  
</div>`
        ;

}

