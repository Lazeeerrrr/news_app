let modal = document.querySelector("#my_modal");
let btn = document.querySelector("button");
let span = document.querySelector(".close");
let column = document.querySelector('.news-col');
let submit = document.querySelector('.submit_button');
let row = document.querySelector('.container');
let title = document.querySelector('#title');
let about = document.querySelector('#about');


//modal window
btn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});


//news columns

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const blog = document.createElement("DIV");
  const blogContainer = document.createElement("DIV");
  // const titleText = document.createElement("P");
  const aboutText = document.createElement("P");
  // titleText.innerHTML = title.value;
  // titleText.classList.add('title-text');
  blogContainer.classList.add('text-container');
  aboutText.innerHTML = about.value;
  aboutText.classList.add('about-text');
  blog.classList.add('news-col');
  blog.innerHTML = title.value;
  blog.style.display = 'block';
  blog.style.margin = '10px';
  row.style.display = 'inline';

  row.prepend(blog);
  blog.append(blogContainer);
  blogContainer.append(aboutText);
  console.log('Объект создался');
  console.log(title.value);
  
  // const blog = document.createElement('DIV');
  // blog.classList.add('news-col');
  // blog.textContent = "Lorem ipsum dolor sit amet";
  // blog.style.display = 'block';
  // row.style.display = 'block';
  // row.style.margin = '10px';
  // row.prepend(blog);
  // row.removeChild(some);
  // console.log('Объект создался');
});

// let button = document.querySelector('button');
// let list = document.querySelector('ul');
// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = prompt('Введите название нового ToDo');
//     list.append(li);
// });

// list.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })

// let button = document.querySelector('button');
// let div = document.querySelector('.container');


// button.addEventListener('click', () => {
//   const li = document.createElement('li');
//   li.textContent = 'Введите название нового ToDo';
//   div.prepend(li);
// });