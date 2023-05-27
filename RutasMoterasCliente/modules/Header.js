const Header={
    template:`
        <header :style="header" v-if="flecha === false && email">
            <img src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario')" @click="$emit('rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
        <header :style="header" v-if="flecha === true && email">
            <h1 :style="h1derecha" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario')" @click="$emit('rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
        <header :style="header" v-if="flecha === false && email===false">
            <img v-if="flecha !== true" src="imgs/flecha.svg" :style="imglogin" @click="$emit('inicio')">
            <h1 :style="h1login" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
        </header>
        <header :style="header" v-if="flecha === true && email===false">
            <h1 :style="h1derechalogin" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
        </header>
    `,

    props:["flecha", "email"],

    data(){
        return{
            header:{
                "display": "flex",
                "align-items": "center",
                "text-align": "center",
            },
            img:{
                "max-width": "50px",
                "margin-left": "150px",
                "margin-right": "-170px",
            },
            imglogin:{
                "max-width": "50px",
                "margin-left": "150px",
                "margin-right": "-10px",
            },
            h1:{
                "font-family": "Sedgwick Ave Display",
                // "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
                "margin-left": "18px",
            },
            h1login:{
                "font-family": "Sedgwick Ave Display",
                // "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
            },
            h1derecha: {
                "font-family": "Sedgwick Ave Display",
                // "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
                "margin-left": "48px",
            },
            h1derechalogin: {
                "font-family": "Sedgwick Ave Display",
                // "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
                "margin-left": "190px",
            },
            a:{
                "text-align": "right",
                "margin-right": "150px",
            },
            user:{
                "text-align": "right",
                "margin-right": "50px",
                "margin-left": "-250px",
            },
        }
    },
    watch: {
        flecha: function(nuevoValor, viejoValor) {
          this.$forceUpdate();
        }
    }
}

export default Header;