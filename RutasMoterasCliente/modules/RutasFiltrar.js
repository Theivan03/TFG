const Rutas={
    template:`
        <div class="col-md-6 text-center">
        <div :style="div2">
            <br>
            <p>Nombre: {{rutas.titulo}}</p>
            <p>Descripción: {{rutas.descripcion}}</p>
            <p>Usuario: {{rutas.username}}</p>
            <p>Comunidad: {{rutas.comunidad}}</p>
            <p>Tipo de moto: {{rutas.tipoMoto}}</p>
        </div>
        </div>
        <br>
        <br>
        <br>
        `,

        data(){
            return{
                nombreComunidad: "",
                nombreUsuario: "",
                tipoMoto: "",
                div2:{
                    "margin": "10px",
                    "padding": "10px",
                    "background-color": "#FCFCFC",
                    "border-radius": "100px",
                }
            }
        },

        props:["rutas"],

}

export default Rutas;