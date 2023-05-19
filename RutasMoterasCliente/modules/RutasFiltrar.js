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

        mounted(){
            //   FUNCIONA
            //  fetch("http://127.0.0.1/api/comunidades_detail/"+this.rutas.comunidad+"/")
            //     .then(response=>response.json())
            //     .then(datos=>{
            //         this.nombreComunidad=datos.nombre;
            //     })
            //  fetch("http://127.0.0.1/api/usuarios_detail/"+this.rutas.usuario+"/")
            //     .then(response=>response.json())
            //     .then(datos=>{
            //         this.nombreUsuario=datos.username;
            //     })
            //    fetch("http://127.0.0.1/api/motos_detail/"+this.rutas.tipomoto+"/")
            //     .then(response=>response.json())
            //     .then(datos=>{
            //         this.tipoMoto=datos.tipo;
            //     })
        },

}

export default Rutas;