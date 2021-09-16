const getflags = require("./flags")

console.log(`Oi ${getflags("--name")}. ${getflags("--greeting")}`)

//node greetings --name "Igor Vinicius" --greeting "Tudo bem com voce?" = no terminal