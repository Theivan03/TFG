const Header={
    template:`
        <header :style="header" v-if="flecha === false && email && modificar === false">
            <img src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario', 'rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
        <header :style="header" v-if="flecha === true && email && modificar === false">
            <h1 :style="h1derecha" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario', 'rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
        <header :style="header" v-if="flecha === false && email === false && modificar === false">
            <img v-if="flecha !== true" src="imgs/flecha.svg" :style="imglogin" @click="$emit('inicio')">
            <h1 :style="h1login" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
        </header>
        <header :style="header" v-if="flecha === true && email === false && modificar === false">
            <h1 :style="h1derechalogin" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
        </header>
        <header :style="header" v-if="modificar === true">
            <img src="imgs/flecha.svg" :style="imguser" @click="$emit('usuario', 'rutas')">
            <h1 :style="h1login" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario', 'rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
    `,

    props:["flecha", "email", "modificar"],

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

            imguser:{
                "max-width": "50px",
                "margin-left": "150px",
                // "margin-right": "-152px",
            },

            h1:{
                "font-family": "Sedgwick Ave Display",
                "flex": "1",
                "text-align": "center",
                "margin-left": "18px",
            },

            h1login:{
                "font-family": "Sedgwick Ave Display",
                "flex": "1",
                "text-align": "center",
                "margin-right": "162px",
                "margin-left": "10px",
            },

            h1derecha: {
                "font-family": "Sedgwick Ave Display",
                "flex": "1",
                "text-align": "center",
                "margin-left": "48px",
            },

            h1derechalogin: {
                "font-family": "Sedgwick Ave Display",
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
}

export default Header;