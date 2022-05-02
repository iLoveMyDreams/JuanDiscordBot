
module.exports = {
  name: "ready",
  once: false,
  /**
  * @param {Client} client
  */
  execute(client) {
    console.log("Hola como estas")
    client.user.setActivity("Paulo", {type: "WATCHING"})
  }
}