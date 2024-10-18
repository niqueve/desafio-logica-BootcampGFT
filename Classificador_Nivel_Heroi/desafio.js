// DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI
const nomeHeroi = "Felipe"
let HeroiXP = 0
// variáveis auxiliares
let ganhoXP = [1,50,100,150,500,750,1000,1500,2000,5000] //valores de XP que podem ser ganhos por missão
let missaoXP = 0
let contador = 3
// looping de repetição para 3 missões
while(contador > 0){
    missaoXP = Math.floor(Math.random()*10) //sorteia valor entre 0 e 9
    HeroiXP += ganhoXP[missaoXP] //valor de XP sorteado é atribuido ao herói
    switch(true){
        case (HeroiXP>1000 && HeroiXP<=2000): //1001 a 2000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Bronze")
            break;
        case (HeroiXP>2000 && HeroiXP<=5000): //2001 a 5000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Prata")
            break;
        case (HeroiXP>5000 && HeroiXP<=7000): //5001 a 7000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Ouro")
            break;
        case (HeroiXP>7000 && HeroiXP<=8000): //7001 a 8000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Platina")
            break;
        case (HeroiXP>8000 && HeroiXP<=9000): //8001 a 9000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Ascendente")
            break;   
        case (HeroiXP>9000 && HeroiXP<=10000): //9001 a 10000
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Imortal")
            break; 
        case (HeroiXP>=10001): // XP maior ou igual a 10001
            console.log("O herói de nome " + nomeHeroi + " possui " + HeroiXP + "xp" + " e está no nível Radiante")
            break;
        default:
            console.log("Nível de herói do jogador é muito baixo para classificação")
            break;
    }
    contador-- // diminui 1 unidade ao contador
}
