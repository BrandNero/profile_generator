const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let profile = {};
rl.question("What's your name? Nicknames are also acceptable.", (answer) => {
  let name = answer;
  profile["name"] = name;
  rl.question("What's an activity you like doing? ", (answer) => {
    let activity = answer;
    profile["activity"] = activity;
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
      let favouriteMeal = answer;
      profile["favouriteMeal"] = favouriteMeal;
      rl.question("What's your favourite thing to eat for that meal?", (answer) => {
        let favouriteFood = answer;
        profile["favouriteFood"] = favouriteFood;
        rl.question("Which sport is your absolute favourite? ", (answer) => {
          let favouriteSport = answer;
          profile["favouriteSport"] = favouriteSport;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
            let superpower = answer;
            profile["superpower"] = superpower;
            rl.close();
            console.log(profile);
          });
        });
      });
    });
  });
});

