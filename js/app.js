const LIST =[
    {
        id:1,
        nome:'Mestre Yoda',
        avatar:'images/yoda.png'
    },
    {
        id:2,
        nome:'Luke',
        avatar:'images/luke.png'
    },
    {
        id:3,
        nome:'Leia',
        avatar:'images/leia.png'
    },
    {
        id:4,
        nome:'HAn Solo',
        avatar:'images/hansolo.png'
    },
    {
        id:5,
        nome:'arth Vader',
        avatar:'images/vader.png'
    },
    {
        id:6,
        nome:'Chewbacca',
        avatar:'images/chewbacca.png'
    },
    {
        id:7,
        nome:'R2d2',
        avatar:'images/r2d2.png'
    },
    {
        id:8,
        nome:'C3pO',
        avatar:'images/c3po.png'
    },
    
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName:'Luciano',
        characters:LIST,
        searchName: '' //campo da busca
    },
    methods: {
        like(userName){
            alert(`O personagem ${userName} recebeu um Like!!`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter(item =>{
                return item.id !== id
            })

            this.characters = result
            
        },
        search(){
            if (this.searchName == ''){
                 return alert('O campo de busca é obrigatorio')
            }

            const list = this.characters = LIST

            const result = list.filter(item =>{
                return item.nome === this.searchName

            })
            
            if(result.length <= 0){
                alert('Nenhum registro encontrado!!')
            }else{
                this.characters = result
            }
            
        }
    }
})
