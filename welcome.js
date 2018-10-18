window.onload = function () {
    var onClicks = document.getElementById('onClick');
    var talksleft = document.getElementsByClassName('chat-bubble-left');
    var talksright = document.getElementsByClassName('chat-bubble-right');
    var leftTalks = document.getElementById('leftTalk');
    var rightTalks = document.getElementById('rightTalk');

    //1、创建出点击文字
    let words = document.createElement('div');
    words.id = 'word';
    words.innerText = "小姐姐，我们用什么写代码？";

    onClicks.appendChild(words);

    //2、当点击之后触发的时间
    onClicks.onclick = function () {
        //2、1 创建气泡
       let talk1 = document.createElement('div');
       talk1.className = 'chat-bubble chat-bubble-right' ;
       //2、2 创建图片
       let pic = document.createElement('img');
       pic.className = 'photo2';
       pic.src = 'pic/fox1.jpg';

       rightTalks.appendChild(talk1);
       rightTalks.appendChild(pic);
       talk1.innerText = '小姐姐，我们用什么写代码？';

       //2.3 创建回答气泡
        let talk2 = document.createElement('div');
        talk2.className = 'chat-bubble chat-bubble-left';

        //2.4 图片
        let pic1 = document.createElement('img');
        pic1.className = 'photo1';
        pic1.src = 'pic/rabbit.jpg';
        rightTalks.appendChild(pic1);
        rightTalks.appendChild(talk2);
        talk2.innerText = '我们用JavaScript！';

    }
}
