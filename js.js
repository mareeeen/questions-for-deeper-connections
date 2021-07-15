const QUESTIONS = [
{question: "What's the first memory you have of me & would you consider it a good one?"},
{question: "If you were to buy me a present, knowing nothing other than what I look like, what would it be?"},
{question: "What's a song that reminds you of me?"},
{question: "I wish I had someone with whom I could share _______."},
{question: "Do you think I've ever been in love?"},
{question: "What about me is strange or unfamiliar?"},
{question: "What do you think realistically my life's going to look like in 10 years?"},
{question: "What's the last thing you lied to me about?"},
{question: "What is your most defining characterisic?"},
{question: "Do you think there's a skill you have that you should get more credit for? Also name one for the other person."},
{question: "Are you lying to yourself about anything?"},
{question: "How are you, really?"},
{question:"When was the last time you felt lucky to be you?"},
{question:"Which one of your parent's personality traits do you want to let go of / keep?"},
{question:"What's the worst pain you've ever been in that wasn't physical?"},
{question:"What would your younger self not believe about your life today?"},
{question:"How have you changed from a year ago? How has the other person?"},
{question:"What's the best compliment you've ever recieved? What's the best compliment you've ever made?"},
{question:"What's the weirdest compliment you've ever gotten?"},
{question:"What's the hardest part about dating you?"},
{question:"What's your favorite song lyric that you can think of off the top of your head?"},
{question:"How would you describe me to a stranger?"},
{question:"What do you admire most about me?"},
{question:"What's the biggest mistake you've made?"},
{question:"What's a phrase you wish you would stop saying?"},
{question:"What do you think our most important similarities are?"},
{question:"What do I need to hear right now?"},
{question:"What can I help you with?"},
{question:"Where am I most qualified to give advice about?"},
{question:"What about me is the hardest for you to understand?"},
{question:"What parts of yourself do you see in me?"},
{question:"How does one earn your vulnerability?"},
{question:"How do our personalities compliment each other?"},
{question:"Both tell the other one thing they've taught you."},
{question:"What would make you feel closer to me?"},
{question:"In one word, describe how you feel right now."},
{question:"Do you believe everyone has a calling? If so, do you think I've found mine yet?"},
{question:"Do you believe in right person, wrong time?"},
{question:"What about me intrigues you?"},
{question:"What's the most attractive quality about me that isn't physical?"},
{question:"What was one thing the other person did that made you feel loved?"},
{question:"How can I add 1% more happiness in your life?"},
{question:"Is there anything the other person has done, that you haven't forgiven them for yet?"},
{question:"If you could wake up tomorrow having gained one quality or ability, what would it be and why?"},
{question:"Is there something you've dreamed of doing for a long time? Why haven't you done it?"},
{question:"Wildcard: Look into each others eyes for 30 seconds. What do you notice?"},
{question:"Wildcard: Write a message to each other and give it to each other. Open it only after you've parted ways."},
{question:"Wildcard: Create your own question."},
{question:"Wildcard: Both share a favorite memory of yours & compare them."},
{question:"What was the best phase in your life?"},
{question:"What is a relationship deal breaker for you?"},
{question:"How do you feel about sharing your password with your partner?"},
{question:"What would you do if your parents didn’t like your partner?"},
{question:"If you are in a bad mood, do you prefer to be left alone or have someone to cheer you up?"},
{question:"Do you believe in second chances?"},
{question:"What’s the one thing that people always misunderstand about you?"},
{question:"Do you believe in fate?"},
{question:"If you had the ability to erase something that you did in the past, what would it be?"},
{question:"What is your biggest irrational fear?"},
{question:"If you could take us anywhere in the world right now, where would you take us?"},
{question:"What song makes you unconditionally sad?"},
{question:"If you could do one thing without suffering the consequences, what would you do?"},
{question:"What is the darkest thought you’ve ever had? What about the darkest thing you’ve never told anybody?"},
{question:"Is there an activity that calms you? A place or a thing that makes you feel at ease?"},
{question:"What makes you feel like you need to be alone?"},
{question:"Tell each other about the facts or harsh truths you choose to ignore but know you shouldn’t."},
{question:"Have you always had the same political beliefs? Is there something that impacted them?"},
{question:"Why did you cry the last time you did so?"},
{question:"Have you ever cried tears of joy?"},
{question:"When have you caused the most harm to yourself?"},
{question:"What has been the biggest change you ever made that made you the most proud of yourself?"},
{question:"Think about the people you love the most in your life, what do you do for them?"},
{question:"Is home for you a place or a feeling? Describe that place or describe that feeling."},
{question:"Do you have any recurring dreams or nightmares?"},
{question:"Do you believe in extraterrestrial life? Elaborate on why or why not."},
{question:"How do you define art?"},
{question:"Is a life exclusive to pleasure (no suffering) worthwhile?"},
{question:"What do you think happens after death, if anything?"},
{question:"Would you rather be loved or love?"},
{question:"Pick two out of physical chemistry, lifestyle compatibility, emotional compatibility and intellectual compatibility."},
{question:"Out of the negative emotions of greed, anger, jealousy and hate, which one would you say affects you the most?"},
{question:"Out of the positive emotions of compassion, positivity, enthusiasm and initiative, which one is your biggest strength?"},
{question:"Tell each other about your first kiss."},
{question:"If you had to pick one, what is the most important value you would teach your children? Honesty, Kindness or Courage?"},
{question:"Name the one bad quality you wouldn’t mind in a partner."},
{question:"What is the most romantic and loving thing you have ever done for somebody?"},
{question:"What quote resonates with you more than any other?"},
{question:"What or who would you sacrifice your life for?"},
{question:"What’s the most crucial thing for a healthy relationship?"},
{question:"What is the most important thing the other person can do to improve themselves?"},
{question:"When was the last time you said “I love you” to someone?"},
{question:"Do you agree that people never change, they just show their true colors?"},
{question:"How do you cope when things are not going your way?"},
{question:"Was there a book that influenced you the most?"},
{question:"Tell me about a relationship issue you’re having, and ask me for advice on how to fix it."},
{question:"Tell me three things that happened in the last week that you’re thankful for."},
{question:"What’s your favorite memory we’ve shared together? Give me as many details as possible."},
{question:"How do you best connect with others?"},
{question:"Who do you trust?"},
{question:"How do you like to be comforted when you’re upset?"},
{question:"How would your perfect partner treat you?"},
{question:"What is the most insensitive thing a person can do?"},
{question:"What's something you now understand about love, that you didn't always get?"},
{question:"If you could ask a single person one question, and they had to answer truthfully, who and what would you ask?"},
{question:"Would you rather be crazy rich or deeply in love?"},
{question:"What do you think are the 5 most beautiful things in the world? Why?"},
{question:"What impression do you think you give when you first meet someone?"},
{question:"Do you think there's relationships worth sacrificing your own dreams for?"},
{question:"If there was a movie made out of your life until now, would you enjoy it?"},
{question:"If you had a friend that spoke to you the way you speak to yourself, how long would you allow them to be your friend?"},
{question:"If you had the chance to know when and how you're going to die, would you want to know?"},
{question:"What has your heart been telling you that you've been ignoring?"},
{question:"If you saw a shooting star right now, what would you wish for?"},
{question:"What are you most insecure about?"},
{question:"Do you believe in true love?"},
{question:"Do you believe in love at first sight?"},
{question:"What would your dream wedding look like?"},
{question:"What do you love to do for others?"},
{question:"What's on your mind (or heart) today?"},
{question:"What do you regularly do for self-care?"},
{question:"Do you have a favorite poem?"},
{question:"Is there anything you're distracting yourself from?"},
{question:"What's the biggest 'What If?' in your mind?"},
{question:"How many compliments is too many?"},
{question:"What insecurity is holding you back the most?"}
];

window.onload = generateQuestion();

function generateQuestion() {
    let quoteSize = QUESTIONS.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuestionData = QUESTIONS[randomIndex];

    document.getElementById("text").innerText = randomQuestionData.question;
}

