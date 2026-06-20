#!/bin/bash

ps -p 1 -o comm=
# you should see systemd

# install tailscale
curl -fsSL https://tailscale.com/install.sh | sh


# start background dameon
sudo systemctl enable tailscaled
sudo systemctl start tailscaled
# ensure running
# sudo systemctl status tailscaled

# hostname

# change name so easy to see later in list
sudo hostnamectl set-hostname ubuntu-laptop-dev
# restart
sudo tailscale down

# start tailscale
sudo tailscale up

