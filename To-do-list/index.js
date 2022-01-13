// document.body.style.backgroundColor='rgb(5, 5, 46)';
const showData = () => {
    if (localStorage.getItem('notes') != null) {
        let data = JSON.parse(localStorage.getItem('notes'));
        let display = document.getElementById('display');
        let str = '';
        data.forEach((element, index) => {
            str += ` <div class="card mx-3 my-3" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-center">${element.title}</h5>
              <p class="card-text">${element.main}</p>
              <a id="${index}" onClick=(deleteNote(this.id)) class="btn btn-primary"><i class="fas fa-trash-alt">Delete</i></a>
            </div>
          </div>`
        })
        display.innerHTML = str;
    }

}


let myBtn = document.getElementById('myBtn');
let myArray = [];
let myObj = {};
showData();
myBtn.addEventListener('click', () => {
    let titleText = document.getElementById('titleText');
    let mainText = document.getElementById('mainText');

    if ((titleText.value.length > 2) && (mainText.value.length >= 2)) {
        if (localStorage.getItem('notes')!=null) {
            myArray=JSON.parse(localStorage.getItem('notes'));
        }
        else{
            myArray=[];
        }
        myObj = {
            title: titleText.value,
            main: mainText.value
        }
        myArray.push(myObj);
        localStorage.setItem('notes', JSON.stringify(myArray));
        titleText.value = "";
        mainText.value = "";
        showData();
    }
    else {
        alert('Enter Valid Text')
    }


});


const deleteNote = (index) => {
    if (localStorage.getItem('notes') != null) {
        let data = JSON.parse(localStorage.getItem('notes'));
        data.splice(index, 1);
        console.log(data);

        localStorage.setItem('notes', JSON.stringify(data));
        showData();
    }
    else {
        alert('NO ELEMENT FOUND!');
    }
}


