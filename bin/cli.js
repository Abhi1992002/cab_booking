const { execSync } = require("child_process"); // to run bash commmand from node

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Abhi1992002/Advanced-Authentication ${repoName}`;
const installDepsCommands = `cd ${repoName} && npm install`;

console.log(`Clonning the repositry with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommands);
if (!installedDeps) process.exit(-1);

console.log(
  "Congratulation! You are ready. Follow the following commands to start"
);
console.log(`cd ${repoName} && npm run dev`);
