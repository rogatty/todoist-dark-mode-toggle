const fetch = require("node-fetch");
const crypto = require("crypto");
require("dotenv").config();

const token = process.env.TODOIST_API_KEY;
const themes = {
  dark: 11,
  light: 0,
};

const todoistAPI = async ({ data = {} }) => {
  try {
    let res = await fetch(`https://api.todoist.com/sync/v8/sync`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        ...data,
      }),
    });
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const theme = process.argv[2];
const availableThemes = Object.keys(themes);

if (!availableThemes.includes(theme)) {
  console.error(`Pass argument with one of: ${availableThemes.join(", ")}`);
  return 1;
}

todoistAPI({
  data: {
    commands: [
      {
        type: "user_update",
        uuid: crypto.randomBytes(20).toString("hex"),
        args: { theme: themes[theme] },
      },
    ],
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
