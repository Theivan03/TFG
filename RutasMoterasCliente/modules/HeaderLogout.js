const Header={
    template:`
        <header :style="header">
            <img v-if="flecha !== true" src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
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
                "margin-right": "-140px",
            },
            h1:{
                "font-family": "Roboto",
                "flex": "1",
                "text-align": "center",
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