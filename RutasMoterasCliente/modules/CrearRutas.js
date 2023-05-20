const CrearRutas={
  template:`
        <div>
          <form :style="crearLike">
            <fieldset :style="formGroup">
              <legend>Título y descripción</legend>
              <div>
                <label :style="label" for="tituloId">Título:</label>
                <input :style="[input, campoVacio('titulo') ? campoVacioStyle : '']" type="text" v-model="titulo" required>
                <span v-if="campoVacio('titulo')" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
              <div>
                <label :style="label" for="descripcionId">Descripción:</label>
                <input :style="[input, campoVacio('descripcion') ? campoVacioStyle : '']" type="text" v-model="descripcion" required>
                <span v-if="campoVacio('descripcion')" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
            </fieldset>

            <fieldset :style="formGroup">
              <legend>Tipo de moto y comunidad autónoma</legend>
              <div>
                <label :style="label" for="tipoMotoId">Tipo de moto:</label>
                <input :style="[input, campoVacio('tipoMoto') ? campoVacioStyle : '']" type="number" v-model="tipoMoto" required>
                <span v-if="campoVacio('tipoMoto')" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
              <div>
                <label :style="label" for="comunidadAutonomaId">Comunidad autónoma:</label>
                <input :style="[input, campoVacio('comunidadAutonoma') ? campoVacioStyle : '']" type="number" v-model="comunidadAutonoma" required>
                <span v-if="campoVacio('comunidadAutonoma')" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
            </fieldset>

            <button :style="button" type="button" @click="crearDato">Crear</button>
          </form>
        </div>
      `,

      

      data(){
          return{
                titulo: '',
                descripcion: '',
                tipoMoto: 0,
                comunidadAutonoma: 0,
                usuario: 1,
                button: {
                  "margin-top": "1rem",
                  "padding": "0.5rem 1rem",
                  "background-color": "#007bff",
                  "color": "white",
                  "border": "none",
                  "border-radius": "0.3rem",
                  "cursor": "pointer",
                },
                crearLike: {
                  "max-width": "500px",
                  "margin": "0 auto",
                },
                formGroup: {
                  "margin-top": "30px",
                },
                label: {
                  "display": "block",
                  "margin-bottom": "5px",
                  "font-weight": "bold",
                },
                input: {
                  "display": "block",
                  "width": "100%",
                  "padding": "10px",
                  "font-size": "16px",
                  "border-radius": "5px",
                  "border": "1px solid #ccc",
                },
                campoVacioStyle: {
                  "border": '1px solid red'
                },
                campoVacioLetras: {
                  "color": "red"
                },
              }
      },

      props:["rutas"],

      methods: {
        // Sirve para saber si hay algún campo vacio.
        campoVacio(campo) {
          return !this[campo];
        },
        // Sirve para crear la ruta en el servidor.
        crearDato() {
          if (this.campoVacio('titulo') || this.campoVacio('descripcion') || this.campoVacio('tipoMoto') || this.campoVacio('comunidadAutonoma')) {
            alert('Por favor, completa todos los campos obligatorios');
          } else {
          axios.post('http://127.0.0.1/api/rutas_detail/', {'titulo': this.titulo, 
                                                            'descripcion': this.descripcion, 
                                                            'tipomoto': this.tipoMoto, 
                                                            'usuario': this.usuario, 
                                                            'comunidad': this.comunidadAutonoma}, {
            })
              .then(response => {
                this.$emit("MostrarInicio");
                this.$emit("Rutas");
                this.titulo = '';
                this.descripcion = '';
                this.tipoMoto = 0;
                this.usuario = 0;
                this.comunidadAutonoma = 0;
              })
          }
        }
      }
}

export default CrearRutas;