/*'use strict';

const DefaultOptions = require("./util/Constants.js")
const f = require("node-fetch")
const ab = async(bot) => {
        if (bot instanceof Promise) {
            await bot.then(a => bot = a).catch(nn => bot = null)
}
}

class Zuraaa {
constructor(id) {
        if (!id) options = DefaultOptions.id
        
        this.id = id
        
        if (!this.id) return Promise.reject("Invalid ID")
        this.bot = f(`https://zuraaa.com/api/bots/${this.id}`).then((zu) => zu.json())
        
        ab(this.bot)
    }
    get votes() {
        return this.cuvote()
    }
    
  get info() {
        return this.cu()
  }
  
  cu() {
      ab(this.bot)
        
        if (!this.bot) return Promise.reject("Invalid BOT");
        
        return this.bot
  }
  
  cuvote() {
      ab(this.bot)
        
        if (!this.bot) return Promise.reject("Invalid BOT");
        
        return this.bot.then(a => a.votes)
  }
}

module.exports = Zuraaa;*/