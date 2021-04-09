fx_version 'bodacious'
game 'gta5'

client_script {
    'client.lua'
}

ui_page 'html/build/index.html'

files{
    'html/build/index.html',
    'html/build/*',
    'html/build/static/css/*',
    'html/build/static/js/*',
}

exports {
    'sendNotification'
}