import axios from "axios";

Echo.channel('hello-channel')
    .listen('EventHello', function (e){
        console.log('From Hello Channel websocket')
        console.log(e)

        var ehtml = document.getElementById('log')

        ehtml.innerHTML = 'from hello channel : ' + e.data
    })


document.getElementById('send').addEventListener('click', function (){
    axios.post('/send-event', {data: document.getElementById('input').value})

    document.getElementById('input').value = ''
})
