const Header={
    template:`
        <header :style="header" v-if="flecha !== true">
            <img v-if="flecha !== true" src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
        </header>
        <header :style="header" v-if="flecha === true">
            <h1 :style="h1derecha" @click="$emit('inicio')">RutasMoteras</h1>
            <a :style="a" @click="$emit('login')">Login</a>
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
                    "margin-right": "-10px",
                },
                h1:{
                    "font-family": "Roboto",
                    "flex": "1",
                    "text-align": "center",
                },
                h1derecha: {
                    "font-family": "Roboto",
                    "flex": "1",
                    "text-align": "center",
                    "margin-left": "190px",
                },
                a:{
                    "text-align": "right",
                    "margin-right": "150px",
                },
            }
        },
}

export default Header;