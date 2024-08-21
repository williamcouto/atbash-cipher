let user_text = document.getElementById('user-text')
let alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let alphaInverted = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'
let text_encrypted = ''
let text_encode = document.getElementById('text_encode')

function encodeAtbash(text){
    let text_apart = text.split('')

    for(let i = 0 ; i < text_apart.length ; i++){
        let index = alphab.indexOf(text_apart[i])

        if(index !== -1){
            text_encrypted += alphaInverted[index]
        }
        else{
            text_encrypted += text_apart[i]
        }
    }
    return text_encrypted
}

