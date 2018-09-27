# Browsersync

Install Browsersync to your computer
```zsh
npm install -g browser-sync
```

Edit your .zshrc or .bashrc
```zsh
export LOCAL_IP='ipconfig getifaddr en0'
alias serve="browser-sync start -s -f . --no-notify --host $LOCAL_IP --port 9000"

//-s : runs local server
//-f : watch current directory
```
---
Run 'serve' on terminal :)
