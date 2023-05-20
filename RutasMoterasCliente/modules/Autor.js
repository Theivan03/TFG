const Autor={
    template:`
        <div :style="div">
            <br>
            <h1 :style="title">Datos del Autor</h1>
            <br>
            <p :style="info">Soy Ivan Cabrera, estoy estudiando el segundo año del ciclo superior DAW.</p>
            <p :style="info">He creado esta pagina web para que todas las personas que les gusten las motos y salir con ellas de ruta, puedan compartir sus rutas y/o consumir las rutas que han publicado otras personas. </p>
            <!-- Comentario perrassss -->
            <div :style="div2">
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
            </div>
        </div>
        `,

        data(){
            return{
                div:{
                    "text-align": "center",
                    "padding-top": "150px",
                },
                div2: {
                    "text-align": "center",
                    "padding-top": "350px", 
                },
                title: {
                    "font-size": "2.5rem",
                    "font-weight": "bold",
                    "margin-bottom": "2rem",
                },
                info: {
                    "max-width": "800px",
                    "margin": "0 auto",
                    "line-height": "1.5",
                },
            }
        },  
}

export default Autor;