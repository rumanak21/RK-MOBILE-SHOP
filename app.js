const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
}

const displaySearchResult = allPhones => {
    const searchResult = document.getElementById('search-result');
    const phones = allPhones.data

    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="${phone.image}" class="card-img-top w-50" alt="${phone.phone_name}">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h5 class="brand-name">Brand: ${phone.brand}</h5>
            <button onclick="showPhoneDetail()" class="btn btn-outline-secondary" type="button" >See More</button>
          </div>
        </div>
      </div>
      `;
      searchResult.appendChild(div);
    })
}

