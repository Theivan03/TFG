const SingIn={
    template:`
        <form class="form-container" :style="div" @submit.prevent="singin">
            <p>Sing In</p>
            <input type="text" v-model="username" placeholder="Nombre de usuario">
            <input type="email" v-model="email" placeholder="Correo electrónico">
            <input type="password" v-model="password" placeholder="Contraseña">
            <button type="submit" :style="button">Iniciar sesión</button>
            <div class="error" v-if="error">{{ error }}</div>
            <p>Ya tienes una cuenta registrada? <a @click="$emit('login')">Iniciar sesión.</a></p>

        </form>
        `,

        props:["users"],

        data() {
            return {
                username: '',
                email: '',
                password: '',
                error: '',
                div:{
                    "padding-top": "150px",
                },
                button:{
                    "background-color": "#007bff",
                    "color": "white",
                    "border": "none",
                    "padding": "10px 20px",
                    "border-radius": "5px",
                    "cursor": "pointer",
                }
            }
        },

        methods:{
            // Sirve para crear el usuario en la API
            singin() {
                axios.post('http://127.0.0.1/api/usuarios_detail/', {   'username': this.username, 
                                                                        'email': this.email, 
                                                                        'password': this.password, 
                  })
                    .then(response => {
                        console.log(response)
                        console.log('El nuevo dato se creó correctamente');
                        this.error = '';
                        this.$emit("MostrarLogin");
                    })
                    .catch(error => {
                        console.log('Ocurrió un error al crear el nuevo dato: ', error);
                        this.error = 'Ocurrió algo inesperado, vuelve a intentarlo.'
                    });
            }
        },
}

export default SingIn;