var home = new Vue({
    el: '#home', 
    data:{
        texto:"Olá Mundo",
        cadastros:[
          { nome:"Texte 01" },
          { nome:"Texte 02" },
          { nome:"Texte 03" },
          { nome:"Texte 04" },
        ],
        novo:"",
        elementos:[],
    },
    methods:{
        adicionarElemento(e){
            e.preventDefault();
            var novo = this.novo.trim();
            if (novo){
                this.elementos.push({titulo:novo});
                this.novo = "";
            }
        },
        removerElemento(index){
            this.elementos.splice(index,1);
        }
    }
});