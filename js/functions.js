<script>
            document.addEventListener("DOMContentLoaded", function () {
                var hamburgerMenu = document.querySelector(".hamburger-menu");
                var menu = document.querySelector(".menu");
        
                hamburgerMenu.addEventListener("click", function () {
                    menu.classList.toggle("active");
                });
            });
        </script>