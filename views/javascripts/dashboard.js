const user = JSON.parse(userJSON)
const guilds = JSON.parse(guildsJSON)

console.log(user)
console.log(guilds)

const userNameele = document.getElementById('userName')
userNameele.innerHTML = user.username

const guildHolderele = document.getElementById('guildHolder')

guilds.forEach(async g => {
    guildHolderele.innerHTML += `<div class="each_guild_holder"><img class="guild_icon" src="https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png"><h5 class="guild_name">${g.name}</h5><button class="guild_inv_link"></button></div>`
})
