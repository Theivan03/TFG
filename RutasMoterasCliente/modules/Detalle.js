const Detalle={
    template: `
      <div :style="div"></div>
        <div v-for="(ruta, index) in rutasFiltradas" :key="index" :style="detallecontainer">
            <h4 :style="h4">{{ruta.titulo}}</h4>
            <p :style="pdescripcion">{{ruta.descripcion}}</p>
            <p :style="p">Usuario: {{ruta.nombreusuario}}</p>
            <p :style="p">Comunidad: {{ruta.comunidad}}</p>
            <p :style="p">Tipo de moto: {{ruta.tipomoto}}</p>
        </div>
      </div>
    `,


    props:["ruta", "rutas"],

    data() {
        return {
            detallecontainer: {
                "margin": "200px",
                "max-width": "500px",
                "margin": "0 auto",
                "padding": "60px",
                "background-color": "white",
                "border": "1px solid white",
                "border-radius": "5px",
                "box-shadow": "0 200px 4px rgba(0, 0, 0, 0.1)",
                "max-width": "100%",
              },
              
              h4: {
                "font-size": "30px",
                "margin-bottom": "10px",
              },
              
              pdescripcion: {
                "font-size": "16px",
                "margin-bottom": "10px",
              },
              
              dflex: {
                "display": "flex",
                "justify-content": "space-between",
              },
              
              p: {
                "font-size": "14px",
                "font-weight": "bold",
              },

              div: {
                "margin-bottom": "40px",
              },
        }
    },

    computed: {
        // Sirve para hacer el filtrado y mostrar la ruta correcta.
        rutasFiltradas() {
            return this.rutas.filter(ruta => ruta.id === this.ruta);
        },
    }
}

export default Detalle;