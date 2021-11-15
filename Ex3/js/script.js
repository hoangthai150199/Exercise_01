window.addEventListener('load', function() {
    const btnBolds = document.querySelectorAll('.btn.btn-bold');
    const btnItalics = document.querySelectorAll('.btn.btn-italic');
    const btnSendLeft = document.querySelector('#btn-send-left')
    const btnSendRight = document.querySelector('#btn-send-right')
    const btnReset = document.querySelector('.btn.btn-reset');  
    const inputLeft = document.querySelector('#btn-input-left');
    btnBolds.forEach(e => {
        e.addEventListener('click', function(event) {
            e.classList.toggle('active');
            event.preventDefault();
            document.execCommand('bold');
        })
    });

    btnItalics.forEach(e => {
        e.addEventListener('click', function(event) {
            e.classList.toggle('active');
            event.preventDefault();
            document.execCommand('italic');
        })
    });

    btnSendLeft.addEventListener('click', function() {
        var inputLeft = document.querySelector('#btn-input-left');
        var e1 = document.createElement('div');
        e1.classList.add('col-sm-11');
        var msgContent = inputLeft.innerHTML
        e1.innerHTML = `
            <div class="msg msg-left">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-left').appendChild(e1);   
        var e2 = document.createElement('div');
        e2.classList.add('col-sm-11');
        var msgContent = inputLeft.innerHTML
        e2.innerHTML = `
            <div class="msg msg-right">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-right').appendChild(e2);
    })

    btnSendRight.addEventListener('click', function() {
        var inputRight = document.querySelector('#btn-input-right');
        var e1 = document.createElement('div');
        e1.classList.add('col-sm-11');
        var msgContent = inputRight.innerHTML
        e1.innerHTML = `
            <div class="msg msg-left">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-right').appendChild(e1);
        var e2 = document.createElement('div');
        e2.classList.add('col-sm-11');
        var msgContent = inputRight.innerHTML
        e2.innerHTML = `
            <div class="msg msg-right">
                ${msgContent}
            </div>`;
        document.querySelector('#msg-chat-left').appendChild(e2);
    })
    document.querySelector('#btn-reset-left').addEventListener('click', function() {
        document.querySelector('#btn-input-left').innerHTML = '';
    })
    document.querySelector('#btn-reset-right').addEventListener('click', function() {
        document.querySelector('#btn-input-right').innerHTML = '';
    })
})
