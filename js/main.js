// async function get() {
//     const response = await fetch("https://www.breakingbadapi.com/api/characters/1");
//     const data = await response.json();
//     console.log(data);

//     let name = $('.name');
//     name.text(data[0].name);

//     let option = document.createElement('option');
//     let t = document.getElementById('options').appendChild(option);

//     t.innerHTML = data[0].name;

// }

// get()

////...............................................................................................................
// async function get() {
//   const response = await fetch("https://www.breakingbadapi.com/api/characters");
//   const data = await response.json();
//     printData(data);

// ===========================================

//  data.forEach(block => {
//      let select =  $('#options');
//      let name = document.createElement('option');
//      select.append(name);
//      name.innerHTML = block.name;

//  });

//  =====================================

//  for (i = 0; i < data.length; i++){
//     let select =  $('#options');
//     let name = document.createElement('option');
//     select.append(name);
//      name.innerHTML = data[i].name;

//  }

//  =======================

// let select =  $('#options');

//  data.map(function (actor) {
//     let name = document.createElement('option');
//      select.append(name);
//      name.innerHTML = actor.name;
//      //.................
//      select.click(function () {
//          document.getElementById('img').src = actor.img;
//     })
//  })

//    =====================

// }
//................................................................................
// function printData(data) {
//     const header = $('#header');
//     const content = $('#content');

//     content.html(`<select class="text-center form-control my-3" onchange="getCharachter(this.value)"> <option>
//     actors </option>
//     ${data.map(m=> `<option>${m.name}  </option>`)}
//     </select>`)

// }

// async function getCharachter(e) {
//     const response = await fetch('https://www.breakingbadapi.com/api/characters?name=' + e);
//     const data = await response.json();
//     const content = document.querySelector('#content')

//     const image = $('#img');
//     image.attr('src', data[0].img)
//     console.log(data);
//     //=========
//     let details = $('#list');
//     details.html('<li>' + data[0].char_id + '</li>' + '<li>'+ data[0].nickname + '</li>'  + '<li>'+ data[0].occupation + '<li>' + data[0].portrayed + '</li>' + '<li>'+ data[0].status + '</li>');
// }

// get();
//......................................................

const api = "https://www.breakingbadapi.com/api/characters";

if (zone.getAttribute("data-value") == 'false') {
  zone.style.display = 'none';
}

// fucntin to fill out the select box
async function getData() {
  const response = await fetch(api);
  const data = await response.json();

  printData(data);

  // we need to use map to read all object elements in one var like (n) -> loop through obect

  function printData(data) {
    const print = data.map(
      (n) => `<option class="form-control">  ${n.name} </option> `); // n is any element in data
    // console.log(printData);

    document.getElementById('characters').innerHTML += print;
    // create fucntoin to get character 
   
  }
}

// fucntion to get all the data and use int 
async function getCharacter(e) {
  
    const response = await fetch(api + '?name=' + e);
    const data = await response.json();

  console.log(data[0]);

  let img = document.getElementById('image');
  let details = document.getElementById('details');
  let zone = document.getElementById('zone');

  zone.style.display = 'block';
  img.setAttribute('src', data[0].img);  

  details.innerHTML = `
  
  <tr>
  <td>ID</td>
  <td>${data[0].char_id}</td>

</tr>

<tr>
  <td>Name</td>
  <td>${data[0].name}</td>

</tr>
<tr>
  <td>Nickname</td>
  <td>${data[0].nickname}</td>

</tr>

<tr>
  <td>Birthday</td>
  <td>${data[0].birthday}</td>

</tr>
<tr>
  <td>Occupation</td>
  <td>${data[0].occupation}</td>

</tr>

<tr>
  <td>portrayed</td>
  <td>${data[0].portrayed}</td>

</tr>
<tr>
  <td>status</td>
  <td>${data[0].status}</td>

</tr>
  `;

  //..............
  
  let dataZone = $('.data-zone').height('');

let table = $('#details').height(dataZone.height());

  

}

getData();

// let img = document.getElementById('image');

// if (img.getAttribute('src') == '') {
//   img.style.display = 'none';
// }




// console.log(tableHeight);

// $('#details').height($('.data-zone').height());

// console.log($('.data-zone').height('400px'))



