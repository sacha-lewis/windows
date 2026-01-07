Install software on a Windows Computer
- Open PowerShell as admin and paste in the install script from  https://chocolatey.org/install
- Run the desired script to install software on your computer

#### Use CHOCO to install all programs with install.txt

# TailScale
Login to TailScale

# Remote Login with NoMachine
Nomachine allows to remotely control a computer easily

#### Bitwarden
- Set SSH Agent in bitwarden
- Open Powershell as admin
    ```aiignore Get-Service ssh-agent
    # You should see  OpenSSH Authentication Agent should NOT saw windows or similar
```
     How to force set
    - Stop-Service ssh-agent
      Set-Service ssh-agent -StartupType Disabled
- Set SSH_AUTH_SOCK for powershell
```angular2html
#temp
$env:SSH_AUTH_SOCK="\\.\pipe\openssh-ssh-agent"
#permantent
setx SSH_AUTH_SOCK "\\.\pipe\openssh-ssh-agent"
```
Close all poewrshell windows then reopen and verify
```angular2html
echo $env:SSH_AUTH_SOCK
```

#### Firefox
- Install DarkMode extensions:
  https://addons.mozilla.org/en-US/firefox/addon/darkreader/
- Install Bitwarden extension:
  https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/
- Make default browser
- Disable passwords

PhpStorm
- Settings -> Appearance & Behaviour -> System Settings -> Default directory for projects
- Settings -> Appearance & Behaviour -> Appearance -> UI Options -> Hide under hamburger
- Settings -> Appearance & Behaviour -> Appearance -> UI Options -> Theme - sync with OS

NOTE:
- Explorer show hidden files AND file name associations

Snagit
- set to image
- Share - file - JPG - automatic nameing - downloads - JPG -

Dropbox
- Only sync folders: Software

### Fancy Zones
- override window snap 

## Power Options
Disable sleep when connected to power



























# Deprecated = = = = = = = = = = = = = = = = = = 

#### Opera
- Install RainDrop.io bookmark extension
  https://help.raindrop.io/install-extension

- Install Bitwarden for password management
  https://addons.opera.com/en/extensions/details/bitwarden-free-password-manager/

  
### Remote Management (RDP) 
Best method to remotely manage a computer
NOTE: Requires Windows PRO (Home does NOT work)
- Settings -> Remote Desktop Settings
- Requires the user/pass of the windows account

### Remote Viewing / controlling mouse keyboard 
UltraVNC WINDOWS (Free Method)
- Already installed above
- Search for 'UltraVNC server' -> Settings -> service -> install -> start service
- Set secure password
- login with vnc://tailscaleIP:5900
- Multiple Screen on WINDOWS only; MAC only displays ONE monitor (You can disable the extra screens snd just use the primary on all OS's)

Start VNC server service before user logs into account
- This will ensure you can login if the computer is restarted (Altering the Service as a specific user does not work)
- Create a task Scheduler assigned to your user with high privileges
- Run: whether user is logged on or not (Check, run with highest privileges)
- Trigger: Begin the task at Startup, Delay task for 30 seconds,
- Actions: Start a program: "C:\Program Files\uvnc bvba\UltraVNC\winvnc.exe" Add arguments (optional) -service
- Settings: If the task fails, restart every: 1 minute - attempt to restart up to 3 times

iPad RealVNC (Free)
- easy to use mouse with this program to control another computer with VNC
- login with vnc://tailscaleIP:5900

MacOS - included VNC
- Included with MacOS is the VNC server
- System Preferences - Sharing - Screen Sharing
- Computer settings - CHECK VNC viewers may control screen with password
- Password allows to get access, but will also need the user of the computer password to see the screen

Software
- Dark / Light icon on task bar

Synergy
- Use one computers mouse / keyboard on another computer
