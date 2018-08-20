var app = new Vue({
    el: '#app',
    data: {
        livros: [],
        buscar: "",
        orderCol: 'id',
        orderInverse: 1,
        ordenar: 'desc',
        pagination: {
            maxPage: 4,
            current: 1,
            totalItems: 0,
            totalPages: 0,
            listPagination: []
        }
    },
    methods: {
        ordenarPor: function (key) {
            switch (this.ordenar) {
                case 'desc':
                    this.ordenar = 'asc';
                    break;

                default:
                    this.ordenar = 'desc';
                    break;
            }
            this.orderCol = key;
            this.orderInverse = this.orderInverse * -1;
            this.livros = _.orderBy(this.livros, [key], [this.ordenar]);
            return
        },
        paginaAnterior: function (e) {
            e.preventDefault();
            if (this.pagination.current === 1) {
                return false;
            }
            this.pagination.current = this.pagination.current - 1;
            this.livros = this.pagination.listPagination[this.pagination.current - 1];
        },
        paginaAtual: function (e, current) {
            e.preventDefault();
            this.pagination.current = current + 1;
            this.livros = this.pagination.listPagination[current];
        },
        paginaProxima: function (e) {
            e.preventDefault();
            if (this.pagination.current === this.pagination.totalPages) {
                return false;
            }
            this.pagination.current = this.pagination.current + 1;
            this.livros = this.pagination.listPagination[this.pagination.current - 1];
        }
    },
    mounted() {
        var self = this;
        self.$http.get('dataServer.json').then(
            function (response) {
                self.pagination.totalItems = response.data.length;
                self.pagination.totalPages = Math.ceil(response.data.length / self.pagination.maxPage);
                var aux = [];
                for (var k in response.data) {
                    aux.push(response.data[k]);
                    if (aux.length === self.pagination.maxPage) {
                        self.pagination.listPagination.push(aux);
                        aux = [];
                    }
                }
                if (aux.length > 0) {
                    self.pagination.listPagination.push(aux);
                }
                self.livros = self.pagination.listPagination[0];
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
            return this.livros.filter(function (item) {
                return item.title.indexOf(self.buscar) > -1

            })
        }
    }
});