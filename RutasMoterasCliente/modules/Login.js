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

        props:["users"],

        data() {
            return {
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
            login() {
                axios.post('http://127.0.0.1/api/auth/jwt/create/', {   'email': this.email,
                                                                        'password': this.password,
                    // headers: {
                    //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNTIwOTAyLCJpYXQiOjE2ODI1MjA2MDIsImp0aSI6IjhkZDFmMTg5ZTJlZDQ2M2Q5ZjE3YjU2OGY2ZWNkZTkxIiwidXNlcl9pZCI6MX0.YQgf3Azokm5Jjvr6_wxQCuCjSWPfFvAX6O9GiQQHWis',
                    //   'Content-Type': 'application/json'
                    // }
                  })
                    .then(response => {
                        this.error = '';
                        this.$emit("FuncionUsuario", this.email);
                        this.$emit("MostrarInicio");
                        localStorage.setItem("email", this.email);
                    })
                    .catch(error => {
                        console.log('Ocurrió un error al crear el nuevo dato: ', error);
                        this.error = 'Las credenciales no son correctas.'
                    });
            }
        },
}

export default Login;