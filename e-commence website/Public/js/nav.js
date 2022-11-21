const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.jpg" class="brand logo" alt="" width="80px">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>                    
                    <a href="index.html" id="user"><img src="img/user.png"  alt=""></a>
                    <a href="cart.html" id="cart"><img src="img/cart.png" alt=""></a>
                </div>
                
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="cart.html" class="link">Cart</a></li>
            <li class="link-item"><a href="contact.html" class="link">Contact Us</a></li>
        </ul>
    `;   
}

createNav();