const { Client, Collection} = require("discord.js");
const client = new Client({ intents: 32767 });


client.commands = new Collection()

require("./Handlers/Events")(client)
require("./Handlers/Commands")(client)

client.login("OTYyMDc2NTAzMDMyNjAyNjY0.YlCRkA.JefH6hqQSWhgYP9HkYoEMw2aW24")