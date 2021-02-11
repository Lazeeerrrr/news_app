let modal = document.querySelector("#my_modal");
let btn = document.querySelector("button");
let span = document.querySelector(".close");
let column = document.querySelector('.news-col');
let submit = document.querySelector('.submit_button');
let row = document.querySelector('.container');
let title = document.querySelector('#title');
let about = document.querySelector('#about');
let content = document.querySelector('.content');
let error = document.querySelector('.error-text');

//modal window
btn.addEventListener('click', () => {
  modal.style.display = "block";
  error.style.display = 'none';

});

span.addEventListener('click', () => {
  modal.style.display = "none";
});


//news columns

submit.addEventListener('click', (e) => {
  e.preventDefault();


  const blog = document.createElement("DIV");
  const blogContainer = document.createElement("DIV");
  const aboutText = document.createElement("P");

  blogContainer.classList.add('text-container');
  aboutText.innerHTML = about.value;
  aboutText.classList.add('about-text');
  blog.classList.add('news-col');
  blog.innerHTML = title.value;
  blog.style.display = 'block';
  blog.style.margin = '10px';
  row.style.display = 'inline';


  if (about.value === "" || title.value === "") {
    error.style.display = "block";
  }
  else {
    row.prepend(blog);
  blog.append(blogContainer);
  blogContainer.append(aboutText);
  console.log('Объект создался');
  console.log(title.value);

  modal.style.display = "none";
  }
  // row.prepend(blog);
  // blog.append(blogContainer);
  // blogContainer.append(aboutText);
  // console.log('Объект создался');
  // console.log(title.value);

  // modal.style.display = "none";
});