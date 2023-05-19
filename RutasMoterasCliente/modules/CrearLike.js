const CrearLike={
    template:`
        <div>
            <form>
                <label for="Contador">Contador:</label>
                <input type="number" id="Contador" v-model="nuevoDato.Contador">

                <button type="button" @click="crearDato">Crear</button>
            </form>
        </div>
        `,

        

        data(){
            return{
                nuevoDato: {
                    'contador': 0,
                  },
                }
        },

        methods: {
            crearDato() {
                axios.post('http://127.0.0.1/api/likes_detail/', {'contador': 0,} //{
                    // headers: {
                    //   'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNTIwOTAyLCJpYXQiOjE2ODI1MjA2MDIsImp0aSI6IjhkZDFmMTg5ZTJlZDQ2M2Q5ZjE3YjU2OGY2ZWNkZTkxIiwidXNlcl9pZCI6MX0.YQgf3Azokm5Jjvr6_wxQCuCjSWPfFvAX6O9GiQQHWis',
                    //   'Content-Type': 'application/json'
                    // }
                  //}
                  )
                    .then(response => {
                    console.log('El nuevo dato se creó correctamente');
                    this.nuevoDato = {
                        'contador': 0,
                    };
                    })
                    .catch(error => {
                    console.log('Ocurrió un error al crear el nuevo dato: ', error);
                    });
            }
          }

}

export default CrearLike;