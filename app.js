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
// Display Search Result 

const displaySearchResult = allPhones => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerText=''
    const phones = allPhones.data
    
    phones.forEach(phone => {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
        <div class="card text-center p-2 m-2">
          <img src="${phone.image}" class="card-img-top w-50 mx-auto p-2" alt="${phone.phone_name}">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <h5 class="brand-name">Brand: ${phone.brand}</h5>
            <button onclick="showPhoneDetail('${phone.slug}')" class="btn btn-outline-secondary" type="button" >See More</button>
          </div>
        </div>
      </div>
      `;
      searchResult.appendChild(div);
    })
}

// Display phone details 
const showPhoneDetail = phoneID => {
    
    const url = `https://openapi.programming-hero.com/api/phone/'${phoneID}'`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => {
        // delete data.status;
        const dataArray = Object.entries(data);
        console.log((dataArray[1])[1]);
    })
}


