const headerTitle = document.querySelector("h1");
const container = document.querySelector("blog-card_content");

fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
    )
  .then((response) => {
    // console.log(response);
    return response.json();  // return an object of JSON in JS
  })
  .then((data) => {
     console.log(data);
    let template = data.map((item) => {
        return `<article class="blog-card">
        <div class="blog-card_content">
            <h4 class="blog-card_paragraph_text_blue">World</h4>
            <h2 class="blog-card_title">${data.tile}</h2>
            <p class="blog-card_date">Nov 12.</p>
            <p class="blog-card_content">
            ${data.body}
            </p>
        </div>
        <a class="blog-card_link" href="#">Continue reading</a>
    </article>`
    }).join(''); // convert to array
   headerTitle.innerHTML = template;
  }); // json is consumed from the previous promise