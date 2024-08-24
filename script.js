function encodeAtbash(){
    let userText = document.getElementById('user_text').value
    let alphab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let alphaInverted = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'
    let text_crypto_res = document.querySelector('#text_encode')
    let text_encrypted = ''

    function encode(text){
        let text_apart = text.split('')
        
        for(let i = 0 ; i < text_apart.length ; i++){
            let caractere = text_apart[i]
            let index = alphab.indexOf(caractere.toUpperCase())
            let LowerChar = caractere === caractere.toLowerCase()
            
            if(index !== -1){
                let charCrypto = alphaInverted[index]
                text_encrypted += LowerChar ? charCrypto.toLowerCase() : charCrypto
            }
            else{
                text_encrypted += caractere
            }
        }
        return text_encrypted
    }
    text_encrypted = encode(userText)
    text_crypto_res.textContent = text_encrypted
}