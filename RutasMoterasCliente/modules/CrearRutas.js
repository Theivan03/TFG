const CrearRutas={
  template:`
        <div>
          <form :style="crearRutas">
            <fieldset :style="formGroup">
              <legend>Título y descripción</legend>
              <div>
                <label :style="label" for="tituloId">Título:</label>
                <input :style="[input, campoVacio('titulo') && mostrarCamposVacios ? campoVacioErrorStyle : '']" type="text" v-model="titulo" required placeholder="Ej: Silent Route">
                <span v-if="campoVacio('titulo') && mostrarCamposVacios" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
              <div>
                <label :style="label" for="descripcionId">Descripción:</label>
                <textarea :style="[input, campoVacio('descripcion') && mostrarCamposVacios ? campoVacioErrorStyle : '', { 'max-width': '500px', 'height': '150px', 'margin-left': '10px' }]" v-model="descripcion" maxlength="1024" required placeholder="Descripción..."></textarea>
                <span v-if="campoVacio('descripcion') && mostrarCamposVacios" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
            </fieldset>

            <fieldset :style="formGroup">
              <legend>Tipo de moto y comunidad autónoma</legend>
              <div>
                <label :style="label" for="tipoMotoId">Tipo de moto:</label>
                <select :style="[input, campoVacio('tipoMoto') && mostrarCamposVacios ? campoVacioErrorStyle : '', fondo]" v-model="tipoMoto" required>
                  <option v-for="moto in motos" :key="moto.id" :value="moto.id" @change="onTipoMotoChange(moto.id)">{{ moto.tipo }}</option>
                </select>
                <span v-if="campoVacio('tipoMoto') && mostrarCamposVacios" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
              <div>
                <label :style="label" for="comunidadAutonomaId">Comunidad autónoma:</label>
                <select :style="[input, campoVacio('comunidadAutonoma') && mostrarCamposVacios ? campoVacioErrorStyle : '', fondo]" v-model="comunidadAutonoma" required>
                  <option v-for="comunidad in comunidades" :key="comunidad.id" :value="comunidad.id"  @change="onComunidadAutonomaChange(comunidad.id)">{{ comunidad.nombre }}</option>
                </select>
                <span v-if="campoVacio('comunidadAutonoma') && mostrarCamposVacios" :style="campoVacioLetras">Campo obligatorio</span>
              </div>
            </fieldset>

            <button :style="button" type="button" @click="mostrarCamposVacios = true" @click="crearDato">Crear</button>
          </form>
        </div>
      `,

  props:["comunidades", "motos"],

  data(){
      return{
            titulo: '',
            descripcion: '',
            tipoMoto: 0,
            comunidadAutonoma: 0,
            usuario: localStorage.getItem('id'),
            mostrarCamposVacios: false,
            button: {
              "margin-top": "1rem",
              "padding": "0.5rem 1rem",
              "background-color": "#007bff",
              "color": "white",
              "border": "none",
              "border-radius": "0.3rem",
              "cursor": "pointer",
            },
            crearRutas: {
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
            campoVacioLetras: {
              "color": "red"
            },
            fondo: {
              "background-color": 'white',
              'margin-left': '10px',
            }
          }
  },

  methods: {
    // Sirve para saber si hay algún campo vacio.
    campoVacio(campo) {
      return !this[campo];
    },

    onTipoMotoChange(id) {
      // Actualizar la variable tipoMoto con el ID seleccionado
      this.tipoMoto = id;
    },

    onComunidadAutonomaChange(id) {
      // Actualizar la variable comunidadAutonoma con el ID seleccionado
      this.comunidadAutonoma = id;
    },

    // Sirve para crear la ruta en el servidor.
    crearDato() {
      if (this.campoVacio('titulo') || this.campoVacio('descripcion')) {
        this.mostrarCamposVacios = true; // Mostrar campos vacíos si hay algún campo vacío
      } else {
      axios.post('http://127.0.0.1/api/rutas_detail/', {'titulo': this.titulo, 
                                                        'descripcion': this.descripcion, 
                                                        'tipomoto': this.tipoMoto, 
                                                        'usuario': this.usuario, 
                                                        'comunidad': this.comunidadAutonoma})
          .then(response => {
            this.$emit("MostrarInicio");
            this.$emit("Rutas");
            this.titulo = '';
            this.descripcion = '';
            this.tipoMoto = 0;
            this.usuario = 0;
            this.comunidadAutonoma = 0;
          })
          .catch(error => {
            console.log(this.usuario);
        });
      }
    }
  }
}

export default CrearRutas;