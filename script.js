// array of Feedbacks including info about the client in the form of objects
const feedback = [{
    client: 'John cena',
    picture: 'cena.jfif',
    feed: "I saw that you learned how to use pivot tables for your Excel project and it really helped display the data. Even though that wasn’t in your job description, it shows that you are a great learner and hungry to do the best job possible."
},
{
    client: 'Anderia',
    picture: 'and.jfif',
    feed: "I know this goal wasn’t easy. How you managed to set it and systematically work towards it until you achieved it truly speaks to your intelligence, tenacity, and perseverance. I’m lucky to have you on my team."
},
{
    client: 'harry',
    picture: 'harry.jpg',
    feed: "The way you gave that presentation today really shows me you listened to what I said about the snafu last month. I appreciate your mindful application of feedback."
},
{
    client: 'tonny',
    picture: 'tonny.jpg',
    feed: "I’m so impressed by your dedication to learning. I know it wasn’t easy when that technology solution you presented didn’t work out. I’m amazed that you managed to distill feedback from all those stakeholders and find a new, viable solution that everyone loves."
},
{
    client: 'David',
    picture: 'david.jpg',
    feed: "I know you’ve put tons of extra hours into this project, and I think I would know even if I didn’t see you staying late. This is absolutely outstanding work."
}


]
//counter
let num=0;
//function for forward button
const funcf = () => {
    num++;
    if(num===5)
    {
num=0
    }
    if(num>=0 && num<feedback.length)
    {console.log(num);
    document.getElementById('pic').setAttribute('src', `/images/${feedback[num].picture}`);
    document.getElementById('customer-name').textContent = `${feedback[num].client}`;
    document.getElementById('feedback').textContent = `"${feedback[num].feed}`;}
};
//function for backward button
const funcb = () => {
    num--;
    if(num<0){
        num=(feedback.length)-1;
    }
    if(num>=0 && num<feedback.length)
    {console.log(num);
    document.getElementById('pic').setAttribute('src', `/images/${feedback[num].picture}`);
    document.getElementById('customer-name').textContent = `${feedback[num].client}`;
    document.getElementById('feedback').textContent = `"${feedback[num].feed}`;}
};
//
const b = document.getElementById('btnb');
//function call on backward key press
b.addEventListener('click', funcb);
const f = document.getElementById('btnf');
//function call on forward key press
f.addEventListener('click', funcf);
