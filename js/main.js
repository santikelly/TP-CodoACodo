let meta=`<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Patitas Sanas</title>
<link rel="stylesheet" href="./css/Estilos.css"><!--Hoja de Estilo-->
<link rel="icon" href="./img/favicon2.ico"><!--Favicon-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/><!--https://animate.style/-->
<link rel="preconnect" href="https://fonts.googleapis.com"><!--fuente de googlefont-->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https: //fonts.googleapis.com/css2?family=Radio+Canada+Big:ital,wght@0,400..700;1,400..700&display=swap"
rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`

document.querySelector("head").innerHTML=meta

let navegacion=`
<div class="logo">
<a href="./Index.html"><img src="./img/logo_patitas_sanas.svg" alt="logo de la veterniaria" ></a> 
</div>
<nav>
 <ul class="nav-link">
     <li><a href="./productos.html">Productos</a></li>
     <li><a href="./servicios.html">Servicios</a></li>
     <li><a href="./sucursales.html">Sucursales</a></li>
     <li><a href="./nosotros.html">Nosotros</a></li>
 </ul>
</nav>
<a href="./registro.html" class="btn"><button>Contactenos</button></a>
`
document.querySelector("header").innerHTML=navegacion

let pie=`
<p>Sitio desarrollado en codo a codo</p>
        <a href="https://www.facebook.com/naturallifepet"><img src="./img/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/natural_life_pet/"><img src="./img/instagram.png" alt=""></a>
        <a href="https://api.whatsapp.com/send?phone=5491167026320"><img src="./img/whatsapp.png" alt=""></a>
        <p>Autores: Lucas Velasco - Santiago Kelly - Juan Parnás - Marcos Gimenez</p>
`

document.querySelector("footer").innerHTML=pie