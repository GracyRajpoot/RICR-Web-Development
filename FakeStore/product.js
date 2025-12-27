 async function getProducts(){  
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const productList = document.getElementById("productrow");
        data.array.forEach(element => {
            const d =document.createElement("div");
            d.classList.add("col-4" ,'p-2');

            d.innerHTML =`
             <div class="col-4 p-2">
                <div class="card border border-dark round shadow p-3">
                  
                    <div class="h-50 border border-primary rounded-top-2">
                        <img src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg" alt="${element.title}" class="w-100 h-100 object-fit-contain">
                    </div>

                    <div class="h-50 border border-dark p-2">
                        <div class="fw-bold fs-4">${element.title}</div>
                        <div class="fw-semibold">${element.rating.rate}/5</div>
                         <div class="fw-semibold fs-4">${element.price*100}</div>
                          <div class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos laudantium deserunt a? </div>
                          <div >
                            <button class="btn  btn-outline-primaryr">Add to Cart</button>
                             <button class="btn btn-primary">Buy Now</button>
                          </div>
                    </div>
                </div>
            </div>
            `
            

        });

    }catch(error){
   console.log(error.message);
    }

}

getProducts();