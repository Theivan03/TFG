const Header={
    template:`
        <header :style="header">
            <img v-if="flecha !== true" src="imgs/flecha.svg" :style="img" @click="$emit('inicio')">
            <h1 :style="h1" @click="$emit('inicio')">RutasMoteras</h1>
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