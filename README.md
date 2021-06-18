# todoist-dark-mode-toggle
Toggle Todoist dark mode using Todoist API.

It's mostly copy & paste from https://github.com/zackkrida/todoist-dark-mode-toggle but intended as a CLI tool.

## How to use
- Clone this repo
- Go to https://todoist.com/prefs/integrations and copy API Token
- Create `.env` file and put `TODOIST_API_KEY=XXX` in there, replacing `XXX` with your token
- Run `node index.js light` or `node index.js dark` to set the theme you want
