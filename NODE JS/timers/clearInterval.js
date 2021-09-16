// clearInteval irá cancelar um setInteval registrado

const timeOut = 1000
const checking = () => console.log ("checkink!")

let interval = setInterval(checking, timeOut)


setTimeout(() => clearInterval(interval), 3000)