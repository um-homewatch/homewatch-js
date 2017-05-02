const Homewatch = require("./api.js");

const homewatch = new Homewatch("http://localhost:3000");

async function main() {
  // try and register the user, if it doesnt exist
  try {
    await homewatch.users.register("jose", "josesousa9000@gmail.com", "123456");
  } catch (err) {
    console.error(`CODE:${err.response.status} DATA:${JSON.stringify(err.response.data)}`);
  }

  try {
    // login
    let user = await homewatch.users.login("josesousa9000@gmail.com", "123456");
    homewatch.auth = user.data.jwt;

    // current user
    let currentUser = await homewatch.users.currentUser();
    console.log(currentUser.data);

    // list user's homes
    let homes = await homewatch.homes.listHomes();

    // delete all homes
    let deleteTasks = homes.data.map(async (home) => await homewatch.homes.deleteHome(home.id));
    await Promise.all(deleteTasks);

    let home = await homewatch.homes.createHome({ name: "name", tunnel: "tunnel", location: "meme" });
    console.log(home.data);

    // update home
    await homewatch.homes.updateHome(home.data.id, { name: "name1", tunnel: "tunnel1", location: "meme1" });
    let newHome = await homewatch.homes.getHome(home.data.id);
    console.log(newHome.data);

    // delete home
    let deletedHome = await homewatch.homes.deleteHome(home.data.id);
    console.log(deletedHome);
  } catch (err) {
    console.error(`CODE:${err.response.status} DATA:${JSON.stringify(err.response.data)}`);
  }
}

main();
