const { execSync } = require("child_process");
const git = require("simple-git")();

try {
  console.log("Running build...");
  execSync("gulp build");
  console.log("Build successful.");

  const commitMessage = "Automatic build update " + new Date().toISOString();

  console.log("Adding changes to git...");
  git
    .add(".")
    .commit(commitMessage)
    .push("origin", "main", () => console.log("Changes pushed successfully."));
} catch (error) {
  console.error("Error while running script:", error);
}
