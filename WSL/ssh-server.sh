#!/bin/bash

sudo apt update
sudo apt upgrade -y


# install SSH Server
sudo apt install -y openssh-server
# ssh version
ssh -V
# verify
ls /etc/ssh/sshd_config

# use systemD
sudo nano /etc/wsl.conf
# [boot]
# systemd=true



# Restart WSL
# wsl --shutdown

# ensure systemD is running
# systemctl is-system-running


#enable SSH server
sudo systemctl start ssh
# enable at startup
sudo systemctl enable ssh
# Check status
sudo systemctl status ssh

# get ubuntu username
whoami



# test ssh locally
ssh localhost


