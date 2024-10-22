//Classe Heroi
class Hero {
    constructor(name, age, heroType){
        this.name = name
        this.age = age
        this.heroType = heroType
    }
    attack(){
        let attackList = {mago:"magia", guerreiro: "espada", monge: "artes marciais", ninja: "shuriken"}
        let key = this.heroType
        let attKeys = Object.keys(attackList) //lista de chaves para verificar se é igual ao tipo do heroi
        let attObj = Object.values(attackList) //lista de valores para percorrer na comparação com o for in
        for (let iten in attKeys){
            if(key === attKeys[iten]){
                console.log(`O ${key} atacou usando ${attObj[iten]}`)
            }
        }
    }
}

let heroi_mago = new Hero("Mago Negro", 27, "mago")
let heroi_guerreiro = new Hero("Guerreiro Alado", 30, "guerreiro")
let heroi_monge = new Hero("Avatar", 15, "monge")
let heroi_ninja = new Hero("Naruto", 13, "ninja")

heroi_mago.attack()
heroi_guerreiro.attack()
heroi_monge.attack()
heroi_ninja.attack()