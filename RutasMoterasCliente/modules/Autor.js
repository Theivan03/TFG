const Autor={
    template:`
        <div :style="div">
            <br>
            <h1 :style="title">Sobre mí</h1>
            <br>
            <p :style="info">¡Hola a todos! Mi nombre es Ivan Cabrera y soy un estudiante apasionado de segundo año del ciclo superior DAW. Desde siempre, he sentido una gran fascinación por las motos y la increíble sensación de libertad y aventura que nos brindan. Me encanta explorar nuevas rutas en moto y vivir experiencias únicas.</p>
            <br>
            <p :style="info">RutasMoteras es mucho más que una plataforma, es un espacio creado exclusivamente para aquellos amantes de las motos que buscan descubrir emocionantes rutas y compartir sus experiencias con una comunidad apasionada. Aquí encontrarás un amplio catálogo de rutas, podrás planificar tus propios viajes y experimentar lo mismo que ya han sentido tus compañeros de aventura.</p>
            <br>
            <p :style="info">No importa si eres un novato en el mundo de las motos o un veterano experimentado, en RutasMoteras todos son bienvenidos. Únete a nosotros y embárcate en una aventura llena de emoción, camaradería y descubrimiento. ¡Prepárate para explorar el mundo sobre dos ruedas!</p>
            <!-- Licencia de la web -->
            <div :style="div2">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img :style="img" alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
            </div>
        </div>
        `,

    data(){
        return{
            div:{
                "text-align": "center",
                "padding-top": "70px",
            },
            div2: {
                "text-align": "center",
                "padding-top": "60px", 
            },
            title: {
                "font-family": "Sedgwick Ave Display",
                "font-size": "2.5rem",
                "font-weight": "bold",
                "margin-bottom": "2rem",
            },
            info: {

                "max-width": "800px",
                "margin": "0 auto",
                "line-height": "1.5",
            },
            img:{
                "margin-bottom": "20px",
            },
        }
    },  
}

export default Autor;