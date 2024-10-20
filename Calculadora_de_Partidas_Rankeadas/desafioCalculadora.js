const { stdin } = require('process')

//calculadora de partidas rankeadas
mainRank()

// função para calcular o valor de referencia para o nível
function rankCount (winNumber, loseNumber){
    let rankGain = winNumber - loseNumber
    return rankGain
}

// função para exibir mensagem ao usuário
function playerMessage (rankGain){
    let level 
    if (!isNaN(rankGain)){

         switch(true){
            case(rankGain < 10):
                level = "Ferro"
                break
            case(rankGain > 10 & rankGain < 20):
                level = "Bronze"
                break;
            case(rankGain > 20 & rankGain < 50):
                level = "Prata"
                break;
            case(rankGain > 50 & rankGain < 80):
                level = "Ouro"
                break;
            case(rankGain > 80 & rankGain < 90):
                level = "Diamante"
                break;
            case(rankGain > 90 & rankGain < 100):
                level = "Lendario"
                break;
            default:
                level = "Imortal"
    }

    let message = `O heroi tem de saldo ${rankGain} e está no nível ${level}`
    console.log(message)
    }
    else{
        console.log("Não foi possivel calcular o nível do jogador")
    }
}

// função principal
function mainRank (){
    const readLine = require('readline')
    const response = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    response.question("Digite o número de vitórias: ", (winNumber) => {
        response.question("Digite o número de derrotas: ", (loseNumber) =>{
            let rankGain = rankCount(winNumber, loseNumber)
            playerMessage(rankGain)  
            response.close()
        })
    })
}
