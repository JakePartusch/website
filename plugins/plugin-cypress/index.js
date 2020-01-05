const util = require("util");
const exec = util.promisify(require("child_process").exec);

module.exports = {
  name: "netlify-plugin-cypress",
  onEnd: async () => {
    console.log(process.env);
    try {
      const { stdout, stderr } = await exec(
        `cypress run --config baseUrl='${process.env.DEPLOY_URL}'`
      );
      console.log(stdout);
      console.log(stderr);
    } catch (e) {
      console.log(e);
    }
  }
};
