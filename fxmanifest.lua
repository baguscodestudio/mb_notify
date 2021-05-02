fx_version 'bodacious'
game 'gta5'

client_script {
    'client.lua'
}

ui_page 'html/build/index.html'

files{
    'html/build/index.html',
    'html/build/static/css/*.css',
    'html/build/static/js/*.js',
}

exports {
    'sendNotification'
}