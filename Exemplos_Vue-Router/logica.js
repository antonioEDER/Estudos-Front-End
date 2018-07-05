var app = new Vue({
    el: '#app', 
    data:{
        livros:[],
        buscar:"",
        orderCol:'id',
        orderInverse:1,
        ordenar:'desc',
    },
    methods:{
        ordenarPor: function(key) {

            switch (this.ordenar) {
                case 'desc':
                    this.ordenar = 'asc';
                    break;
            
                default:
                    this.ordenar = 'desc';
                    break;
            }

            this.orderCol =  key;
            this.orderInverse = this.orderInverse * -1;

            this.livros = _.orderBy(this.livros, [key], [this.ordenar]);
            return
        }
    },
    mounted(){
        var self = this;

        self.$http.get('dataServer.json').then(
            function (response) {
                self.livros = response.data;
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
    },
    computed: {
        filtrar() {
            var self = this
            return this.livros.filter(function(item) {
                return item.title.indexOf(self.buscar) > -1
             
            })
        }
    }
});
