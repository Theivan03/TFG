const Header={
    template:`
        <header :style="header" v-if="flecha !== true">
            <img src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario')" @click="$emit('rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
        <header :style="header" v-if="flecha === true">
            <h1 :style="h1derecha" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="user" @click="$emit('usuario')" @click="$emit('rutas')">Usuario</a>
            <a :style="a" @click="$emit('logout')">Logout</a>
        </header>
    `,

    props:["flecha"],

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
            h1:{
                "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
                "margin-left": "18px",
            },
            h1derecha: {
                "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
                "margin-left": "48px",
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