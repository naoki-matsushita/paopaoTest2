'use strict';

document.getElementById('output').textContent = '運命の日まであと';

function countdown(){
    let now = new Date();
    let goal = new Date(2021,0,15);
    let nokori = goal.getTime() - now.getTime();
    let sec = Math.floor(nokori / 1000) % 60;
    let min = Math.floor(nokori / 1000 / 60) % 60;
    let hour = Math.floor(nokori / 1000 / 60 / 60) % 24;
    let date = Math.floor(nokori / 1000 / 60 / 60 / 24);
    
    let time = `${date}日${hour}時間${String(min).padStart(2,'0')}分${String(sec).padStart(2,'0')}秒`;

    document.getElementById('countdown').textContent = time;
    recalc();
}

countdown();

function recalc(){
    setTimeout(countdown,1000);
}
