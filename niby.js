const memories = [
  {
    image: "photo/first.png",
    date: "March 9, 2026",
    title: "The Beginning",
    text: "Every friendship starts somewhere. Ours began with a simple message in a Discord server. You were looking for people to join your run, and I answered with a hesitant 'me???'. At the time, it felt like nothing special—just another conversation between strangers. Looking back now, it's funny how something so important started with such a small moment."
  },
  {
    image: "photo/firstselfie.JPG",
    date: "11 March 2026",
    title: "The First Selfie",
    text: "Not long after that first message, we started talking every day. What began as a simple Sky run slowly became part of our daily lives. This was the first picture we ever took together, and whenever I look at it, I can't help but smile at your ridiculously oversized sunglasses. At the time, it was just a funny screenshot. Now it's one of my favorite memories from the beginning of us."
  },
  {
    image: "photo/bigpipo.JPG",
    date: "12 March 2026",
    title: "Same Brain Cell",
    text: "One of the first things we discovered was that we shared the exact same ridiculous sense of humor. A normal conversation somehow turned into a discussion about being strong independent women with an enormous pipo. For reasons neither of us could properly explain, it made perfect sense. That was one of the first moments where I realized we could turn absolutely anything into a joke and still spend hours laughing about it."
  },
  {
    image: "photo/yourfirstvacuum.JPG",
    date: "15 March 2026",
    title: "The Perfect Man",
    text: "One day, your robot vacuum finally arrived. This was obviously a historic event. After all our jokes about men, you had finally found the perfect one: a man who stayed low, did exactly what you told him, cleaned the floors you walked on, never argued, and worked all day without complaining. His name was probably Kevin. To this day, I'm not entirely convinced any human man has managed to surpass him."
  },
  {
    image: "photo/firstlove.JPG",
    date: "18 March 2026",
    title: "I Love You, Friend",
    text: "Somewhere between all the jokes, the daily conversations, the hugs in Sky, and the endless nonsense we shared, something else quietly appeared: affection. This was one of the first times you told me you loved me. It wasn't dramatic or overly serious. It was simple, spontaneous, and completely you. Looking back, I think that's what made it so special. It was the moment I realized our friendship had already become something truly important to both of us."
  },
  {
    image: "photo/firsthuggy.JPG",
    date: "3 April 2026",
    title: "The Princess and the Pauper",
    text: "At some point, we decided it was a perfectly reasonable idea to recreate scenes from Barbie: The Princess and the Pauper in Sky. We spent time setting everything up, finding the right outfits, choosing the perfect location, and recording scenes together. The video never made it to the editing stage, but somehow that doesn't matter. What I remember isn't the unfinished project. It's the laughter, the excitement, and how much fun it was creating something completely silly with you."
  },
  {
    image: "photo/rizz.JPG",
    date: "4 April 2026",
    title: "The Rizz Era",
    text: "At some point, I started rizzing you. Constantly. Relentlessly. Every day became an opportunity to deliver the most outrageous, dramatic, and completely unserious lines imaginable. The surprising part wasn't that I kept doing it. The surprising part was that you always appreciated it. Whether it was a terrible pickup line, excessive compliments, or me acting like the protagonist of a romance novel for absolutely no reason, you somehow entertained all of it. Thus began what historians now refer to as 'The Rizz Era'."
  },
  {
    image: "photo/bikiny.JPG",
    date: "5 April 2026",
    title: "The Lifeguard Plan",
    text: "Every day, you seemed to discover something new about me. One day, it was the fact that I had spent years swimming. Naturally, instead of reacting like a normal person, you immediately started planning your future rescue. If you ever happened to drown, I would apparently sprint toward the water in slow motion wearing a very sexy bikini and save your life. Thankfully, this emergency has never occurred. But should the day come, I remain fully committed to the plan."
  },
  {
    image: "photo/beingkidnapped.JPG",
    date: "5 April 2026",
    title: "The World's Most Kidnappable Creature",
    text: "Somewhere along the way, I discovered one of your most dangerous traits: you are physically incapable of saying no. This explains why you get kidnapped so often in Sky and, apparently, in real life too. You're basically a small woodland creature whose only weakness is affection and attention. To this day, I still wonder how you've survived this long. Every instinct in your body seems to scream 'trust everyone'. Somehow, against all odds, you're still here. My adorable little creature. And yes, I would absolutely rescue you from every future kidnapping. MWAH."
  },
  {
    image: "photo/firstmute.JPG",
    date: "6 April 2026",
    title: "The First Mute",
    text: "It was only a matter of time. After countless conversations that definitely weren't designed for a family-friendly game, Sky finally decided it had heard enough. In the middle of one particularly questionable discussion, you suddenly realized your messages were being censored. The game had officially muted you. I laughed so hard I could barely breathe. Looking back, this was probably the moment we learned that our sense of humor was too powerful for Sky's chat filter."
  },
  {
    image: "photo/massage.HEIC",
    date: "10 April 2026",
    title: "Multitasking",
    text: "During one of our many candle runs, we somehow ended up discussing my boyfriend, men in general, and our completely legitimate belief that we both possessed a gigantic invisible pipo. In the middle of all that, you proudly informed me that you were a multitasker: you could uber and massage at the same time. To this day, I still have no idea how we got from one topic to the other. Most of our conversations followed this exact pattern."
  },
  {
    image: "photo/mine.PNG",
    date: "22 May 2026",
    title: "We Are A Couple",
    text: "By this point, our friendship had become such a normal part of everyday life that I stopped taking screenshots as often. We still spent countless hours together, but moments started blending into routine. That's why this screenshot survived. A random Turkish player sat down and started talking to us. Naturally, I immediately informed them that we were a couple. There was no discussion. No agreement. No warning. Just a public announcement. The conversation somehow became even more chaotic afterwards, but one thing remained clear: if anyone asked, you were mine. MWAH."
  },
  {
    image: "photo/crakpipo.PNG",
    date: "22 May 2026",
    title: "I Can Crack Your Pipo",
    text: "A random conversation with strangers somehow led me to stand up, point dramatically across the table, and declare: 'I can crack your pipo.' To this day, I have no idea what I was trying to achieve. What I do know is that your reaction was exactly what I hoped for. One of my favorite things about you has always been how easily I can make you lose your mind with the most ridiculous sentences imaginable. Whether it's 'I can crack your pipo,' 'ankle bite,' or any other completely nonsensical phrase, your horrified little 'QAAAAQ' never fails to make me laugh. You are, without question, the most adorable victim of my nonsense."
  },
  {
    image: "photo/lastphoto.JPG",
    date: "June 5, 2026",
    title: "Until We Meet",
    text: "Of all the screenshots we've taken together, I think this might be one of my favorites. After months of candle runs, ridiculous jokes, accidental lore, kidnapping incidents, giant invisible pipos, and countless conversations, we ended up here. Just us, sharing a quiet moment in Eden. When I look at this picture, I don't just see two skykids. I see every memory that came before it. You are one of the sweetest and most wonderful people I know, and I am incredibly grateful that a random Discord message brought you into my life. I truly hope our friendship keeps growing for many years to come, and that one day we'll finally get to meet beyond Sky. Until then, I'll keep saving a seat for you beside me in the sky. MWAH."
  }
];

const timeline = document.getElementById("timeline");

memories.forEach(memory => {
  const section = document.createElement("section");
  section.classList.add("memory");

  section.innerHTML = `
    <img src="${memory.image}" alt="${memory.title}">
    <div class="memory-text">
      <p class="memory-date">${memory.date}</p>
      <h2>${memory.title}</h2>
      <p>${memory.text}</p>
    </div>
  `;

  timeline.appendChild(section);
});