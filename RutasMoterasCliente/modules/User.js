const User={
    template: `
            <div class="row" :style="div">
                <div class="col-md-6 text-center" v-for="(ruta, index) in rutasFiltradas" :key="index">
                    <div :style="div2" class="p-3 mb-4">
                        <h4>{{ruta.titulo}}</h4>
                        <p>{{ruta.descripcion}}</p>
                        <div class="d-flex justify-content-between">
                        <p>Usuario: {{ruta.usuario}}</p>
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
        }
    },
    computed: {
        rutasFiltradas() {
        return this.rutas.filter(ruta => ruta.email === this.user);
        }
    }
}

export default User;