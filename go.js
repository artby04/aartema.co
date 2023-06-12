const { execSync } = require("child_process");
const git = require("simple-git")();

try {
  console.log("Запуск сборки...");
  execSync("gulp build");
  console.log("Сборка успешно завершена.");

  console.log("Добавление изменений в git...");
  git
    .add(".")
    .commit("Автоматическое обновление сборки")
    .push("origin", "master", () =>
      console.log("Изменения успешно отправлены.")
    );
} catch (error) {
  console.error("Ошибка во время выполнения скрипта:", error);
}
