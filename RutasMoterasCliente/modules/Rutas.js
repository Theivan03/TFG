const Rutas={
    template: `
        <!-- Se hace un bucle para sacar todas las rutas que se le pasa al componente. -->
        <div class="row" :style="div">
            <p :style="p"><b>Clica una de las rutas para verla en detalle.</b></p>
            <div class="col-md-6 text-center" v-for="(ruta, index) in rutas" :key="index" @click="Detalle(ruta.id), $emit('MostrarDetalle')">
                <div :style="div2" class="p-3 mb-4">
                    <h4 :style="h4">{{ruta.titulo}}</h4>
                    <p>{{limiteCaracteres(ruta.descripcion)}}</p>
                    <div class="d-flex justify-content-between">
                        <p>Usuario: {{ruta.nombreusuario}}</p>
                        <p>Comunidad: {{ruta.comunidad}}</p>
                        <p>Tipo de moto: {{ruta.tipomoto}}</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    props:["rutas"],

    data() {
        return {
            div2: {
                "margin": "10px",
                "padding": "10px",
                "background-color": "white",
                "border": "1px solid #dee2e6",
                "border-radius": "1rem",
            },

            div: {
                "margin-bottom": "50px",
            },

            h4: {
                "font-size": "30px",
            },

            p: {
                "marginLeft": "200px",
                "marginTop": "10px",
                "marginBottom": "30px",
                "fontSize": "1.5rem",
                "fontWeight": "",
                "textShadow": "2px 2px 4px rgba(0, 0, 0, 0.3)",
            },
        }
    },

    methods:{
        // Sirve para sacar el detalle de las rutas.
        Detalle(ruta){
            this.$emit("DetalleRuta", ruta)
        },

        // Sirve para saber la cantidad de caracteres que se tienen que sacar en la descripción de cada ruta en la página principal.
        limiteCaracteres(value) {
            if (value && value.length > 70) {
              return value.slice(0, 70) + " ...";
            }
            return value;
        },
    },
}

export default Rutas;