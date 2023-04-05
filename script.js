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

    <p>Here's how to use your new Buck-It! list planner:</p>
    <p>This is an easy way to help you come up with great ideas for fun and exciting things to before you...ya know....kick the bucket!  Click on the ____button to generate a idea.  If your don't like the idea, you can "Can-it!", if you love the idea you can "Plan-it!".  This app will aid you in your planning process, from setting your time frame, budgeting, list which friend to bring alone (or which ones to leave behide!)</p>
    <button id="start-button">Got it, let's get started</button>
    </article>`);
    
    let startBtn = document.querySelector('#start-button');
    startBtn.addEventListener('click', () => {
        welcomeArea.innerHTML = '';
    });
})