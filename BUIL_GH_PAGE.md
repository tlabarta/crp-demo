# How to build the CRP-Demo App for a github page

1. Make sure you are on the branch `no-server-mode` inside the https://vigitlab.fe.hhi.de/xai-demos/y-xai repository.
2. Inside `webapp/package.json` you can find the script `built-for-github`. Make sure the last piece of the command matches the name of your github repository (currently its '/crp-demo/').
3. Now execute the command by calling `npm run built-for-github` (you need to have node installed).
4. Inside the generated output `webapp/dist/browser`, duplicate the file `index.html` and call it `404.html` (wil be used by github later).
5. Now simply copy the whole content inside `webapp/dist/browser` to the root level of your github repositoy and activate the github page under -> repository settings -> Pages -> [choose the branch you want to publish] 