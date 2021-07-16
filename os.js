const os = require("os");

console.log({
  "os-type": os.type(),
  "os-arch": os.arch(),
  "cpus-len": os.cpus().length,
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
  memory: os.totalmem(),
  userInfo: os.userInfo(),
});
