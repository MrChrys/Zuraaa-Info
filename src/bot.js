/*
    ------------------------
     Arquivo "principal" :)
    ------------------------
    
        Tome café ☕
*/

const fetch = require("node-fetch")

class Zuraaa {
    constructor(id) {
        const botID = id
        if (!botID) return Promise.reject("Nenhum id informado")
        this.bot = fetch(`https://zuraaa.com/api/bots/${botID}`).then(object => this.bot = object.json())
        if (typeof this.bot === "object" && this.bot.statusCode) {
            if (this.bot.statusCode != 404) return
            return Promise.reject("Bot não emcontrado")
        }
    }
    
    get bot() {
        if (typeof this.bot === "object" && this.bot.statusCode) {
            if (this.bot.statusCode != 404) return
            return Promise.reject("Bot não emcontrado")
        }
        const unPromise = async() => {
        if(this.bot instanceof Promise) {
            await this.bot.then(a => this.bot = a).catch(a => this.bot = null)
        }
        return this.bot
        }
        return unPromise()
    }
    
    get votes() {
        if (typeof this.bot === "object" && this.bot.statusCode) {
            if (this.bot.statusCode != 404) return
            return Promise.reject("Bot não emcontrado")
        }
        const unPromise = async(bunda) => {
            let bot = bunda
        if(bot instanceof Promise) {
            await bot.then(a => bot = a.votes.current).catch(a => bot = null)
        }
        return bot
        }
        return unPromise(this.bot)
    }
}

module.exports = Zuraaa;