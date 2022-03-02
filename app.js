const searchMobile = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
   
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data));
}
// Display Search Result 

const displaySearchResult = allPhones => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerText = ''
    const phones = allPhones.data.slice(0,20)
if(phones == false){
   
    document.getElementById('error-msg').style.display= 'block';
    
}
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
            <button onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-outline-secondary" type="button" >See More</button>
          </div>
        </div>
      </div>
      `;
        searchResult.appendChild(div);
    })
}

// Display phone details 
const loadPhoneDetail = phoneID => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneID}`
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayPhonedetails(data.data);
        })
}

const displayPhonedetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top w-50 mx-auto p-2 img-fluid" alt="Image">
                <div class="card-body">
                    <h5 class="card-title">${phone.name}</h5>
                    <h6 class="card-title">${phone.releaseDate}</h6>
                    <h6 class="card-title">Features</h6>
                    <p class="card-text">Brand: ${phone.brand}</p>
                    <p class="card-text">Product Code: ${phone.slug}</p>
                    <p class="card-text">Storage: ${phone.mainFeatures.storage}</p>
                    <p class="card-text">DisplaySize: ${phone.mainFeatures.displaySize}</p>
                    <p class="card-text">ChipSet: ${phone.mainFeatures.chipSet}</p>
                    <p class="card-text">Memory: ${phone.mainFeatures.memory}</p>
                    <p class="card-text">Sensors: ${phone.mainFeatures.sensors}</p>
                       
                </div>
                `;

    phoneDetails.appendChild(div);
    
}
