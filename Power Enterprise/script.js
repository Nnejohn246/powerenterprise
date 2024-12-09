// Contact Form Submission (example)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Log data for now (in real scenario, send to server or email)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form after submission
    document.getElementById('contact-form').reset();
    
    // You can also show a thank you message or redirect here
    alert('Thank you for reaching out!');
});


const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

const updateSlider = () => {
    slides.style.transform = `translateX(${-index * 100}%)`;
};

prev.addEventListener('click', () => {
    index = index > 0 ? index - 1 : 2;
    updateSlider();
});

next.addEventListener('click', () => {
    index = index < 2 ? index + 1 : 0;
    updateSlider();
});


async function sendMessage() {
    const input = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Display user's message
    chatBox.innerHTML += `<div>User: ${input}</div>`;

    // Fetch AI response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_API_KEY` // Replace with your API key
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // or other model
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    // Display AI's reply
    chatBox.innerHTML += `<div>AI: ${aiReply}</div>`;
    document.getElementById('user-input').value = ''; // Clear input field
}

