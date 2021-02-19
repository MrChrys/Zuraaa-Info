/*
    ---------------------------------
             Zuraaa! info
    ---------------------------------
    Desenvolvido por: MrChrys#1897
    ⁸
    Testes feitos por: MrChrys#1897
    
                 ' - '
    
    >>        LEIA O README        <<
    
    *********************************
    *  NÃO MODIFIQUE ESTE ARQUIVO!  *
    *********************************
*/

/*const main = require("./src/Main.js")

module.exports = main*/

const f = require("node-fetch")
        
module.exports = async(id) => {
    this.bot = null
    if (!id) return Promise.reject("Invalid ID")
    f(`https://zuraaa.com/api/bots/${id}`).then((zu) => zu.json()).then((zua) => {this.bot = zua})
if (this.bot instanceof Promise) {
    await this.bot.then(a => this.bot = a).catch(err => this.bot = null)
}
if (!this.bot) return Promise.reject("Invalid BOT")
}

module.exports.info = async() => {
    if (!this.bot) return Promise.reject("Invalid BOT")
    return this.bot
}

module.exports.votes = async() => {
    if (!this.bot) return Promise.reject("Invalid BOT")
    return this.bot.then(a => a.votes)
}

module.exports.version = require("./package.json").version