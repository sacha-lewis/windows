$profilesPath = "$env:APPDATA\Mozilla\Firefox\Profiles"
$userJsSource = "$PSScriptRoot\user.js"

Get-ChildItem $profilesPath -Directory | ForEach-Object {
    Copy-Item $userJsSource "$($_.FullName)\user.js" -Force
}
