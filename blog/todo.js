const inputField = document.getElementById("input-post");
const button = document.getElementById("voegToe");
const posts = document.getElementById("posts");
const verwijderAlles = document.getElementById("allesVerwijderen");
const inputContent = document.getElementById("input-content");
const searchBut = document.getElementById("search")
const searchInput = document.getElementById("searchbar")
const sortBtn = document.getElementById("sort"); 


searchBut.addEventListener("click", function() {
    client
    .get("/posts")
    .then(data => {
       const filtered = data.filter(post => {
            const input = searchInput.value;
            return post.title.includes(input)
        
        })

        posts.innerHTML = ""

        filtered.forEach(filPost => {
            const rij = maakRij(filPost);
            posts.appendChild(rij)
        })

        

    })
    
})

function loadPosts() {
    client
    .get("/posts")
    .then(data => {
        data.forEach((post) => {

            const rij = maakRij(post)
            posts.appendChild(rij)

        
        })
    })
}


verwijderAlles.addEventListener("click", function() {
    posts.innerHTML = ""
})


button.addEventListener("click", function(event) {
    event.preventDefault()
    const input = inputField.value;
    const inputCon = inputContent.value;
    const niewePost = {
        title: input,
        content: inputCon
    }

    client
    .post("/posts", niewePost)
    .then(function(response) {
        const post = response
        console.log(post)

       const rij = maakRij(post)

       posts.appendChild(rij)
        inputField.value = ""

        

    })

    .catch(function(error) {
        console.error("er ging iets mis", error)
    })


})

function maakRij(post) {
    
    const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.innerText = post.id;

            const tdContent = document.createElement("td");
            tdContent.innerText = post.content;

            const tdTitle = document.createElement("td");
            tdTitle.innerText = post.title;

            const tdDelete = document.createElement("td");
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "verwijder";

            deleteBtn.addEventListener("click", function() {
                const id = post.id;
                client.delete("/posts", id);
                posts.removeChild(tr)
            })

            tdDelete.appendChild(deleteBtn);

            tr.appendChild(tdId);
            tr.appendChild(tdTitle);
            tr.appendChild(tdContent);
            tr.appendChild(tdDelete);
    
    
    return tr;
}

loadPosts()



