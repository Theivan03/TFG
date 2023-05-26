const Login={
    template:`
        <form class="form-container" :style="div" @submit.prevent="login">
            <p>Iniciar Sesión</p>
            <input type="email" v-model="email" placeholder="Correo electrónico">
            <input type="password" v-model="password" placeholder="Contraseña">
            <button type="submit" :style="button">Iniciar sesión</button>
            <div class="error" v-if="error">{{ error }}</div>
            <p>Completa el login para acceder a todas las posibilidades de la web. <a @click="$emit('Singin')">Aún no tienes usuario?</a></p>
        </form>
        `,

    data() {
        return {
            usuarios: [],
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
        // Sirve para hecer el login y crear el almacenamiento local.
        login() {
            axios.post('http://127.0.0.1/api/auth/jwt/create/', {   'email': this.email,
                                                                    'password': this.password,
                })
                .then(response => {
                    this.error = '';
                    this.$emit("FuncionUsuario", this.email);
                    this.$emit("MostrarInicio");
                    localStorage.setItem("email", this.email);
                    fetch("http://127.0.0.1/api/usuarios_list/")
                    .then(response=>response.json())
                    .then(datos=>{
                        this.usuarios = this.usuarios.concat(datos);
                        const usuario = this.usuarios.filter(usuario => usuario.email === localStorage.getItem("email"));
                        localStorage.setItem("id", usuario[0].id);
                        localStorage.setItem("name", usuario[0].username);
                    });
                })
                .catch(error => {
                    this.error = 'Las credenciales no son correctas.'
                });
        }
    },
}

export default Login;