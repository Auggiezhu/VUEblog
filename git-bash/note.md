//Git Bash && keys
https://github.com/settings/keys

//Generating a new SSH key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
cat ~/.ssh/id_rsa.pub <!-- paste &&copy -->

//test configures
ssh -T git@github.com
git config --global user.name "你的英文名"
git config --global user.email "你的邮箱"
git config --global push.default matching
git config --global core.quotepath false
git config --global core.editor "vim"

git config --global http.proxy
git config --global --unset http.proxy
git config --global http.proxy 127.0.0.1:7890
