const Footer={
    template:`
        <footer :style="footer">
            <div :style="left">
                <a href="https://www.instagram.com/rutasmoterasoficial/" :style="a" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/RutasMoterasOficial/" :style="a" target="_blank">Facebook</a>
                <a href="https://twitter.com/RMoteras" :style="a" target="_blank">Twiter</a>
            </div>
            <div :style="right">
                <a href="#" :style="a" @click="$emit('autor')">Autor</a>
            </div>
        </footer>
    `,

    data(){
        return{
            footer:{
                "display": "flex",
                "justify-content": "space-between",
                "position": "fixed",
                "bottom": "0",
                "width": "100%",
                "background-color": "black",
                "text-align": "center",
                "padding": "10px",
            },

            left:{
                "display": "flex",
                "margin-left": "100px",
            },

            right:{
                "display": "flex",
                "margin-right": "100px",
            },
            
            a:{
                "margin-right": "40px",
                "color": "white",
            },
        }
    },
}

export default Footer;