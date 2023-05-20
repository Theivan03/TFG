const Main = {
    template:`
        <div :style="div">
            <!-- Aqui se saca todo el codigo html de cada uno de los componentes creados. -->
            <!-- Cada uno lo saca cuando cumple los requisitos que se le pide y también se le pasa a cada componente las funciones que necesita y los datos que se necesitan-->
            <Header @inicio="MostrarInicio" @logout="HacerLogout" @login="MostrarLogin" @usuario="MostrarUsuario" @rutas="BuscarRutas()" :flecha="mostrarRutas" :email="email"></Header>
            <Header2 v-if="mostrarRutas" @crear="MostrarCreacion()" :rutas="rutas" @FiltrarRutas="rutas=$event" @filtrar="BuscarRutas()"></Header2>
            <Autor v-if="mostrarAutor"></Autor>
            <Rutas v-if="mostrarRutas" :rutas="rutas"></Rutas>
            <Login v-if="mostrarLogin" @FuncionUsuario="email=$event" @MostrarInicio="MostrarInicio" @Singin="MostrarSingin"></Login>
            <CrearRutas v-if="mostrarCreacion" @MostrarInicio="MostrarInicio" @Rutas="BuscarRutas()" :comunidades="comunidades" :motos="motos"></CrearRutas>
            <User v-if="mostrarUsuario" :rutas="rutas" :user="email"></User>
            <SingIn v-if="mostrarSingin" @login="MostrarLogin" @MostrarLogin="MostrarLogin"></SingIn>
            <Footer @autor="MostrarAutor"></Footer>
        </div>
    `,

    data() {
        return{
            div: "overflow-x: hidden",
            rutas: [],
            motos: [],
            comunidades: [],
            email: false,
            filtrado: false,
            mostrarAutor: false,
            mostrarRutas: true,
            mostrarLogin: false,
            mostrarUsuario: false,
            mostrarCreacion: false,
            mostrarSingin: false,
        }
    },

    // Descarga las rutas que haya en el servidor y comprueba si tiene una sesion iniciada.
    created(){
        this.BuscarRutas();
        this.BuscarMotos();
        this.BuscarComunidades();
        if(localStorage.getItem("email")){
            this.email = true;
        };
    },

    // Son todos los metodos para saber cuando mostrar cada componente.
    methods:{
        BuscarMotos(){
            fetch("http://127.0.0.1/api/motos_list/")
            .then(response=>response.json())
            .then(datos=>{
                this.motos = this.motos.concat(datos);
            });
        },

        BuscarComunidades(){
            fetch("http://127.0.0.1/api/comunidades_list/")
            .then(response=>response.json())
            .then(datos=>{
                this.comunidades = this.comunidades.concat(datos);
            });
        },

        BuscarRutas(){
            this.rutas = [];
            fetch("http://127.0.0.1/api/rutas_list/")
            .then(response=>response.json())
            .then(datos=>{
                this.rutas = this.rutas.concat(datos);
            });
        },
        MostrarAutor(){
            this.mostrarAutor = true;
            this.mostrarLogin = false;
            this.mostrarRutas = false;
            this.mostrarCreacion = false;
            this.mostrarUsuario = false;
            this.mostrarSingin = false;
        },
        MostrarInicio(){
            this.mostrarAutor = false;
            this.mostrarLogin = false;
            this.mostrarRutas = true;
            this.mostrarCreacion = false;
            this.mostrarUsuario = false;
            this.mostrarSingin = false;
        },
        MostrarLogin(){
            this.mostrarAutor = false;
            this.mostrarLogin = true;
            this.mostrarRutas = false;
            this.mostrarCreacion = false;
            this.mostrarUsuario = false;
            this.mostrarSingin = false;
        },
        MostrarCreacion(){
            if(this.email){
                this.mostrarAutor = false;
                this.mostrarLogin = false;
                this.mostrarRutas = false;
                this.mostrarCreacion = true;
                this.mostrarUsuario = false;
                this.mostrarSingin = false;
            } else{
                this.mostrarAutor = false;
                this.mostrarLogin = true;
                this.mostrarRutas = false;
                this.mostrarCreacion = false;
                this.mostrarUsuario = false;
                this.mostrarSingin = false;
            }
        },
        MostrarUsuario(){
            if(this.email){
                this.mostrarAutor = false;
                this.mostrarLogin = false;
                this.mostrarRutas = false;
                this.mostrarCreacion = false;
                this.mostrarUsuario = true;
                this.mostrarSingin = false;
            } else{
                this.mostrarAutor = false;
                this.mostrarLogin = true;
                this.mostrarRutas = false;
                this.mostrarCreacion = false;
                this.mostrarUsuario = false;
                this.mostrarSingin = false;
            }
        },
        HacerLogout(){
            this.MostrarInicio();
            localStorage.removeItem("email");
            this.email = false;
        },
        MostrarLogin(){
            this.mostrarAutor = false;
            this.mostrarLogin = true;
            this.mostrarRutas = false;
            this.mostrarCreacion = false;
            this.mostrarUsuario = false;
            this.mostrarSingin = false;
        },
        MostrarSingin(){
            this.mostrarAutor = false;
            this.mostrarLogin = false;
            this.mostrarRutas = false;
            this.mostrarCreacion = false;
            this.mostrarUsuario = false;
            this.mostrarSingin = true;
        },
    },
}

export default Main;