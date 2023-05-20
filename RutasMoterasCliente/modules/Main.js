const Main = {
    template:`
    <div :style="div">
        <HeaderLogin v-if="email===false" @inicio="MostrarInicio" @login="MostrarLogin"></HeaderLogin>
        <HeaderLogout v-if="email" @inicio="MostrarInicio" @logout="HacerLogout" @usuario="MostrarUsuario"></HeaderLogout>
        <Header2 v-if="mostrarRutas" @crear="MostrarCreacion()" :rutas="rutas" @FiltrarRutas="rutas=$event" @filtrar="BuscarRutas()"></Header2>
        <Autor v-if="mostrarAutor"></Autor>
        <Rutas v-if="mostrarRutas" :rutas="rutas"></Rutas>
        <Login v-if="mostrarLogin" :users="usuarios" :style="ruta" @FuncionUsuario="email=$event" @MostrarInicio="MostrarInicio" @Singin="MostrarSingin"></Login>
        <CrearRutas v-if="mostrarCreacion" @MostrarInicio="MostrarInicio" @Rutas="BuscarRutas()"></CrearRutas>
        <User v-if="mostrarUsuario" :rutas="rutas" :user="email"></User>
        <SingIn v-if="mostrarSingin" @login="MostrarLogin" @MostrarLogin="MostrarLogin"></SingIn>
        <Footer @autor="MostrarAutor"></Footer>
    </div>
    `,

    data() {
        return{
            div: "overflow-x: hidden",
            rutas: [],
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

    created(){
        this.BuscarRutas();

        if(localStorage.getItem("email")){
            this.email = true;
        };
    },
    methods:{
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

    mounted(){

    },
}

export default Main;