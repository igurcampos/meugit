const questions = [
    "O que aprendi hoje?",
    "O que me deixou puto? E o que posso fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas ajudei hoje?"
]
const ask = (index = 0) => {
    return process.stdout.write("\n" + questions[index] +"\n")
}

ask()



const answer = []
process.stdin.on("data", data => {
    answer.push(data.toString().trim())
    if (answer.length < questions.length) {
        ask(answer.length)
    } else {
        
        process.exit()
        
    }
})

process.on("exit", () => {
    console.log(
        `Bacana amigo:
        
        O que aprendeu hoje:
        ${answer[0]}

        O que te deixou puto, mas que poderia melhorar:
        ${answer[1]}

        O que lhe deixou feliz hoje foi:
        ${answer[2]}

        Quantas pessoas vocẽ ajudou hoje:
        ${answer[3]}

        Volte amanhã para mais reflexões!!!

        `
    )
})