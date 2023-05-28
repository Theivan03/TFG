const Actualizar={
    template:`
          <div>
            <form :style="crearRutas">
              <fieldset :style="formGroup">
                <legend>Título y descripción</legend>
                <div>
                    <label :style="label" for="tituloId">Título:</label>
                    <input :style="[input, campoVacio('titulo') && mostrarCamposVacios ? campoVacioErrorStyle : '']" type="text" v-model="titulo" required>
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
  
              <button :style="actualizar" type="button" @click="mostrarCamposVacios = true" @click="Actualizar">Actualizar</button>
              <button :style="borrar" type="button" @click="Borrar">Borrar</button>
            </form>
          </div>
        `,
  
    props:["comunidades", "motos", "ruta"],
  
    data(){
        return{
            titulo: this.ruta.titulo,
            descripcion: this.ruta.descripcion,
            tipoMoto: 0,
            comunidadAutonoma: 0,
            usuario: parseInt(localStorage.getItem('id'), 10),
            mostrarCamposVacios: false,
            actualizar: {
                "margin-top": "1rem",
                "padding": "0.5rem 1rem",
                "background-color": "#007bff",
                "color": "white",
                "border": "none",
                "border-radius": "0.3rem",
                "cursor": "pointer",
                'margin-left': '10px',
            },
            borrar: {
                "margin-top": "1rem",
                "padding": "0.5rem 1rem",
                "background-color": "red",
                "color": "white",
                "border": "none",
                "border-radius": "0.3rem",
                "cursor": "pointer",
                'margin-left': '10px',
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
                "color": "red",
                'margin-left': '10px',
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
        Actualizar() {
            if (this.campoVacio('titulo') || this.campoVacio('descripcion')) {
                this.mostrarCamposVacios = true; // Mostrar campos vacíos si hay algún campo vacío
            } else {
            axios.put('http://127.0.0.1/api/rutas_detail/' + this.ruta.id + "/", {'id': this.ruta.id,
                                                                            'usuario': this.usuario, 
                                                                            'titulo': this.titulo, 
                                                                            'descripcion': this.descripcion, 
                                                                            'tipomoto': this.tipoMoto, 
                                                                            'comunidad': this.comunidadAutonoma})
                .then(response => {
                    this.$emit("DescargarRutas");
                    this.$emit("MostrarUsuario");
                })
            }
        },

        Borrar(){
            const borrar = prompt("Introduce la palabra 'Borrar' para borrar la ruta.");
            if(borrar === 'Borrar'){
                axios.delete('http://127.0.0.1/api/rutas_detail/' + this.ruta.id + '/')
                .then(response=>{
                    this.$emit("DescargarRutas");
                    this.$emit("MostrarUsuario");
                })
            }
        },
    },

    created(){
        const Moto = this.motos.filter(moto => moto.tipo === this.ruta.tipomoto);
        this.tipoMoto = Moto[0].id;
        const Comunidad = this.comunidades.filter(comunidad => comunidad.nombre === this.ruta.comunidad);
        this.comunidadAutonoma = Comunidad[0].id;
    }
}
  
export default Actualizar;