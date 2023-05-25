const SingIn={
    template:`
        <form class="form-container" :style="div" @submit.prevent="singin">
            <p>Sing In</p>
            <input type="text" v-model="username" placeholder="Nombre de usuario">
            <input type="email" v-model="email" placeholder="Correo electrónico">
            <div class="error" v-if="erroremail">{{ erroremail }}</div>
            <input type="password" v-model="password" placeholder="Contraseña">
            <button type="submit" :style="button">Iniciar sesión</button>
            <div class="error" v-if="error">{{ error }}</div>
            <p>Ya tienes una cuenta registrada? <a @click="$emit('login')">Iniciar sesión.</a></p>
        </form>
    `,

    data() {
        return {
            username: '',
            email: '',
            password: '',
            error: '',
            erroremail: '',
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

    methods: {
        singin() {
            // if (!this.validateEmail(this.email)) {
            //     this.error = 'El correo electrónico no es válido.';
            //     return;
            // }
        
            axios.post('http://127.0.0.1/api/usuarios_detail/', { username: this.username,
                                                                email: this.email,
                                                                password: this.password,
            })
            .then(response => {
                this.error = '';
                this.$emit('MostrarLogin');
            })
            .catch(error => {
                this.error = error;
            });
        },
        
        validateEmail(email) {
          const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return emailRegex.test("Nombre de usuario ya utilizado, usa uno diferente.");
        },
      },
    
}

export default SingIn;