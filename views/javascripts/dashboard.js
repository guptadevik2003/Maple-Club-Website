const user = JSON.parse(userJSON)
const guilds = JSON.parse(guildsJSON)

console.log(user)
console.log(guilds)

const userNameele = document.getElementById('userName')
userNameele.innerHTML = user.username

const guildHolderele = document.getElementById('guildHolder')

guilds.forEach(async g => {
    guildHolderele.innerHTML += `<p>${g.id} ${g.name}</p>`
})