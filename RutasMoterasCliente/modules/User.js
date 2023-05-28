const User={
    template: `
        <div class="row" :style="div">
            <p :style="p"><b>Estas son tus rutas user {{user}}</b></p>
            <p :style="p2"><b>Clica encima de una ruta para entrar en modo edición</b></p>
            <div class="col-md-6 text-center" v-for="(ruta, index) in rutasFiltradas" :key="index" @click="Actualizar(ruta), $emit('MostrarModificacion')">
                <div :style="div2" class="p-3 mb-4">
                    <h4>{{ruta.titulo}}</h4>
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
            user: localStorage.getItem("name"),
            div2: {
                "margin": "10px",
                "padding": "10px",
                "background-color": "#F8F9FA",
                "border": "1px solid #dee2e6",
                "border-radius": "0.3rem",
            },
            div: {
                "margin-bottom": "50px",
            },
            p: {
                marginLeft: "150px",
                marginTop: "50px",
                marginBottom: "10px",
                fontSize: "2rem",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            },
            p2: {
                marginLeft: "150px",
                marginTop: "0px",
                marginBottom: "30px",
                fontSize: "1rem",
                fontWeight: "",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            },
        }
    },

    computed: {
        // Sirve para filtrar las rutas por el usuario
        rutasFiltradas() {
            return this.rutas.filter(ruta => ruta.emailusuario === localStorage.getItem("email"));
        }
    },

    methods:{
        Actualizar(ruta){
            this.$emit("Actualizar", ruta);
        },

        limiteCaracteres(value) {
            if (value && value.length > 70) {
              return value.slice(0, 70) + " ...";
            }
            return value;
        },
    }
}

export default User;