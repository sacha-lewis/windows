Install software on a Windows Computer
- Open PowerShell as admin and paste in the install script from  https://chocolatey.org/install
- Run the desired script to install software on your computer
```shell
# Install with PowerShell
choco install powertoys -y
choco install libreoffice-fresh -y
choco install phpstorm -y
choco install pycharm-community -y
choco install firefox-dev --pre -y
choco install git -y
choco install openssh --pre -y
choco install opera-developer -y
choco install dropbox -y
choco install tailscale -y
choco install ultravnc -y
choco install googledrive -y
choco install snagit -y
choco install skype -y
choco install virtualbox -y
choco install xampp-81
```

Optional Install
```shell
choco install steam -y
choco install nvidia-display-driver -y
choco install microsoft-teams -y
```

#### Xampp Server
Allows to test locally.
Make the following adjustments

PHP.ini
```php
# uncomment
extension=intl
# increase
post_max_size=400M
upload_max_filesize=400M
```

my.ini - Increase packet size to allow to import large files


#### Opera
- Install RainDrop.io bookmark extension
  https://help.raindrop.io/install-extension

- Install Bitwarden for password management
  https://addons.opera.com/en/extensions/details/bitwarden-free-password-manager/

#### Firefox
- Install DarkMode extensions:
  https://addons.mozilla.org/en-US/firefox/addon/darkreader/
- Install Bitwarden extension:
  https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/

#### TailScale
- Login and install client

PhpStorm
- Settings -> Appearance & Behaviour -> System Settings -> Default directory for projects

### Remote Management (Default)
UltraVNC WINDOWS (Free Method)
- Search for 'UltraVNC server' -> Settings -> service -> install -> start service
- Set secure password
- login with vnc://tailscaleIP:590
- Multiple Screen on WINDOWS only; MAC only displays ONE monitor (You can disable the extra screens snd just use the primary on all OS's)

Start VNC server service before user logs into account
- This will ensure you can login if the computer is restarted (Altering the Service as a specific user does not work)
- Create a task Scheduler assigned to your user with high privileges
- Run: whether user is logged on or not (Check, run with highest priviledges)
- Trigger: Begin the task at Startup, Delay task for 30 seconds,
- Actions: Start a program: "C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe" Add arguments (optional) -service
- Settings: If the task fails, restart every: 1 minute - attempt to restart up to 3 times

RDP (Remote Desktop)
- MacOS
- Requires Windows Pro

iPad RealVNC (Free)
- easy to use mouse with this program to control another computer with VNC
- login with vnc://tailscaleIP:5900

RealVNC (Paid Method)
- Requires an account that costs per device and per month
- Supports multiple Monitors on WINDOWS and MAC

MacOS - included VNC
- Included with MacOS is the VNC server
- System Preferences - Sharing - Screen Sharing
- Computer settings - CHECK VNC viewers may control screen with password
- Password allows to get access, but will also need the user of the computer password to see the screen

NOTE:
- Explorer show hidden files

PhpStorm
- Settings -> Appearance & Behaviour -> Appearance -> UI Options -> Show main menu in a separate menu bar

Snagit
- set to image
- Share - file - JPG - automatic nameing - downloads - JPG -

Dropbox
- Only sync folders: Software

Software
- Dark / Light icon on task bar

Synergy
- Use one computers mouse / keyboard on another computer
