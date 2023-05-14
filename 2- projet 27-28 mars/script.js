<script>
        const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
</script>
<li><a href="#">Biographie</a></li>
<li><a href="#">Diplomes</a></li>
<li><a href="#">Portefolio</a></li>
<li><a href="#">Expérience</a></li>
<li><button class="btn">Github</button></li>
<li><button class="btn btn-secondary">Linkedin</button></li>