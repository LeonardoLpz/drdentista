function whatsapp(){
    console.log('whatsapp')
    return gtag_report_conversion(' https://wa.me/525563336308')
    location.href = 'https://wa.me/525563336308'
}

function llamar(){
    console.log('llamar')
    location.href = ' tel:5563336308'
}

function ermita(){
    console.log('ermita')
    location.href = 'https://www.google.com.mx/maps/place/Ermita+Iztapalapa+472,+Mexicaltzingo,+09099+Ciudad+de+México,+CDMX/@19.3580156,-99.1209184,18.69z/data=!4m5!3m4!1s0x85d1fe142e58202f:0xc23ffead96c5a712!8m2!3d19.3580086!4d-99.1202482 '
}
function culhuacan(){
    console.log('culhuacan')
    location.href = 'https://www.google.com.mx/maps/place/Cl%C3%ADnica+Denta/@19.3145626,-99.1070076,16.46z/data=!4m8!1m2!2m1!1sclinica+dental!3m4!1s0x0:0xc42149683405a77!8m2!3d19.3143568!4d-99.1032994'
}
function constitucion(){
    console.log('constitucion')
    location.href = 'https://www.google.com.mx/maps/place/Cl%C3%ADnica+Denta/@19.3393969,-99.0583974,3a,75y,187.68h,75.36t/data=!3m7!1e1!3m5!1sq7k9aEun0tTN8Kd5Tq-XwA!2e0!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3Dq7k9aEun0tTN8Kd5Tq-XwA%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D86%26h%3D86%26yaw%3D101.38772%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m8!1m2!2m1!1sclinica+dental!3m4!1s0x0:0x4a0118c96daf6dc5!8m2!3d19.3393712!4d-99.0582919 '
}


document.getElementById('culhuacan').addEventListener('click', culhuacan)
document.getElementById('ermita').addEventListener('click', ermita)
document.getElementById('constitucion').addEventListener('click', constitucion);





