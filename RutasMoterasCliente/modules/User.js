const User={
    template: `
        <div class="row" :style="div">
            <div class="col-md-6 text-center" v-for="(ruta, index) in rutasFiltradas" :key="index">
                <div :style="div2" class="p-3 mb-4">
                    <h4>{{ruta.titulo}}</h4>
                    <p>{{ruta.descripcion}}</p>
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
                "background-color": "#F8F9FA",
                "border": "1px solid #dee2e6",
                "border-radius": "0.3rem",
            },
            div: {
                "margin-bottom": "50px",
            },
            user: localStorage.getItem("email"),
        }
    },
    computed: {
        // Sirve para filtrar las ruitas por el usuario
        rutasFiltradas() {
        return this.rutas.filter(ruta => ruta.emailusuario === this.user);
        }
    }
}

export default User;