# Why?

Because no one likes to repeat himself.

# Usage / Checklist

```
git clone git@github.com:rbaumier/express-bootstrap.git
mv express-bootstrap `yourRepoName` && cd $_
rm -rf .git
git init
git remote add `your git repository`
open src/bootstrap.js # edit dependencies you want to use globally
open src/bootstrap.test.js # edit your test dependencies (also global)
open package.json # a little effort needed here, please change at least the name, the author and the dependencies your app really need
npm install
nano .env # add your env vars, protip: add `nvm use $(node -e 'console.log(require("./package.json").engines.node);')` to automatically use the project node version (nvm needed)
node server.js
```
