function encodeAtbash(){
    let userText = document.getElementById('user_text').value
    let alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphaInverted = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'
    let text_crypto_res = document.querySelector('#text_encode')
    let text_encrypted = ''

    function encode(text){
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
    text_encrypted = encode(userText)
    text_crypto_res.textContent = text_encrypted
}