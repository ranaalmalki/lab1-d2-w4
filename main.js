let url=`https://fakestoreapi.com/products`
fetch(url)
.then(res=> res.json())
.then(data=>{

    data.map(item=>{
        let container = document.getElementById("container")
        let div_content= document.createElement("div")
        div_content.setAttribute("class"," card  col-lg-3 col-md-4 rounded text-center align-items-center")

        let image=document.createElement("img")
        let title=document.createElement("h3")
        let price=document.createElement("p")

        image.src= item.image
        title.textContent= item.title
        price.textContent= `price: ${item.price}`

        console.log(item.title);
        console.log(item.price);
        console.log(item.image);
        
container.appendChild(div_content)
div_content.appendChild(image)
div_content.appendChild(title)
div_content.appendChild(price)

        
    })
})