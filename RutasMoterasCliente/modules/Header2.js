const Rutas={
    template:`
        <div :style="header">
            <br>
            <div :style="div1">
                <button :style="p" @click="$emit('crear')">Crear ruta +</button>
            </div>
            <div :style="div2">
                <label :style="label" for="filtro">Filtrado:</label>
                <select name="Filtrado" :style="select" @change="filtrar($event.target.value)">
                    <option>Seleciona una opción</option>
                    <option value="tipo">Tipo de moto</option>
                    <option value="comunidad">Comunidad Autonoma</option>
                </select>
                <button :style="button" @click="$emit('filtrar')">Borrar filtrado</button>
            </div>
        </div>
        <br>
        `,
        props:["rutas"],

        data(){
            return{
                header: {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    "padding-top": "20px",
                  },
                  p: {
                    textAlign: "right",
                    cursor: "pointer",
                    margin: 0,
                    "background-color": "#007bff",
                    "color": "white",
                    "border": "none",
                    "padding": "10px 20px",
                    "border-radius": "5px",
                    "cursor": "pointer",
                  },
                  label: {
                    textAlign: "right",
                    margin: "0 1rem 0 0"
                  },
                  select: {
                    textAlign: "center",
                    lineHeight: "1.5em",
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    appearance: "none",
                    background: "white",
                    cursor: "pointer",
                    outline: "none",
                    width: "12rem",
                  },
                  button: {
                    backgroundColor: "transparent",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    outline: "none",
                    textDecoration: "underline",
                    },
                  div1: {
                    "padding-right": "450px"
                  },
                  div2: {
                    "padding-right": "150px"
                  },
                rutasMostradas: this.rutas,
            }
        },

        methods: {
            filtrar(tipoFiltro) {
                if (tipoFiltro === 'tipo') {
                    const tipoMoto = prompt('Introduce el tipo de moto a filtrar:');
                    if (tipoMoto) {
                        this.rutasMostradas = this.rutas.filter(ruta => ruta.tipomoto === tipoMoto);
                    } else {
                        this.rutasMostradas = this.rutas;
                        tipoMoto = "";
                    }
                } else if (tipoFiltro === 'comunidad') {
                    const comunidad = prompt('Introduce la comunidad a filtrar:');
                    if (comunidad) {
                        this.rutasMostradas = this.rutas.filter(ruta => ruta.comunidad === comunidad);
                    } else {
                        this.rutasMostradas = this.rutas;
                        comunidad = "";
                    }
                }
                this.$emit("FiltrarRutas", this.rutasMostradas)
            }
        },

}

export default Rutas;