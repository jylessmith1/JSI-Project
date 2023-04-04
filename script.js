let startArea = document.querySelector('.start-area');
let welcomeBtn = document.querySelector('#welcome-button');
let welcomeArea = document.querySelector('.main-area');



welcomeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicked')
    startArea.classList.toggle('hide')
    
    welcomeArea.insertAdjacentHTML('afterbegin', 
    `<article class="welcome-content">
    <h>Welcome to Kick-it!</h>
    <p>Here's how to use your new bucketlist planner:</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam eos placeat modi nesciunt, quo eveniet porro consectetur laudantium.</p>
    <button id="start-button">Got it, let's get started</button>
    </article>`);
    
    let startBtn = document.querySelector('#start-button');
    startBtn.addEventListener('click', () => {
        welcomeArea.innerHTML = '';
    });
})