const memories = [
  {
    image: "photo/first.png",
    date: "March 9, 2026",
    realm: "Isle of Dawn",
    title: "First Light",
    text: "Every friendship starts somewhere. Ours began with a simple message in a Discord server. You were looking for people to join your run, and I answered with a hesitant 'me???'. At the time, it felt like nothing special, just another conversation between strangers. Looking back now, it's funny how something so important started with such a small moment."
  },
  {
    image: "photo/firstselfie.jpg",
    date: "11 March 2026",
    realm: "Daylight Prairie",
    title: "Shared Light",
    text: "Not long after that first message, we started talking every day. What began as a simple Sky run slowly became part of our daily lives. This was the first picture we ever took together, and whenever I look at it, I can't help but smile at your ridiculously oversized sunglasses. At the time, it was just a funny screenshot. Now it's one of my favorite memories from the beginning of us."
  },
  {
    image: "photo/bigpipo.jpg",
    date: "12 March 2026",
    realm: "Daylight Prairie",
    title: "Two Skykids, One Brain Cell",
    text: "One of the first things we discovered was that we shared the exact same ridiculous sense of humor. A normal conversation somehow turned into a discussion about being strong independent women with an enormous pipo. For reasons neither of us could properly explain, it made perfect sense. That was one of the first moments where I realized we could turn absolutely anything into a joke and still spend hours laughing about it."
  },
  {
    image: "photo/yourfirstvacuum.jpg",
    date: "15 March 2026",
    realm: "Hidden Forest",
    title: "A Small Domestic Spirit",
    text: "One day, your robot vacuum finally arrived. This was obviously a historic event. After all our jokes about men, you had finally found the perfect one: a man who stayed low, did exactly what you told him, cleaned the floors you walked on, never argued, and worked all day without complaining. His name was probably Kevin. To this day, I'm not entirely convinced any human man has managed to surpass him."
  },
  {
    image: "photo/firstlove.jpg",
    date: "18 March 2026",
    realm: "Hidden Forest",
    title: "A Candle Between Us",
    text: "Somewhere between all the jokes, the daily conversations, the hugs in Sky, and the endless nonsense we shared, something else quietly appeared: affection. This was one of the first times you told me you loved me. It wasn't dramatic or overly serious. It was simple, spontaneous, and completely you. Looking back, I think that's what made it so special. It was the moment I realized our friendship had already become something truly important to both of us."
  },
  {
    image: "photo/firsthuggy.jpg",
    date: "3 April 2026",
    realm: "Valley of Triumph",
    title: "The Unfinished Little Movie",
    text: "At some point, we decided it was a perfectly reasonable idea to recreate scenes from Barbie: The Princess and the Pauper in Sky. We spent time setting everything up, finding the right outfits, choosing the perfect location, and recording scenes together. The video never made it to the editing stage, but somehow that doesn't matter. What I remember isn't the unfinished project. It's the laughter, the excitement, and how much fun it was creating something completely silly with you."
  },
  {
    image: "photo/rizz.jpg",
    date: "4 April 2026",
    realm: "Valley of Triumph",
    title: "The Rizz Spirit",
    text: "At some point, I started rizzing you. Constantly. Relentlessly. Every day became an opportunity to deliver the most outrageous, dramatic, and completely unserious lines imaginable. The surprising part wasn't that I kept doing it. The surprising part was that you always appreciated it. Whether it was a terrible pickup line, excessive compliments, or me acting like the protagonist of a romance novel for absolutely no reason, you somehow entertained all of it. Thus began what historians now refer to as 'The Rizz Era'."
  },
  {
    image: "photo/bikiny.jpg",
    date: "5 April 2026",
    realm: "Sanctuary Islands",
    title: "The Lifeguard Prophecy",
    text: "Every day, you seemed to discover something new about me. One day, it was the fact that I had spent years swimming. Naturally, instead of reacting like a normal person, you immediately started planning your future rescue. If you ever happened to drown, I would apparently sprint toward the water in slow motion wearing a very sexy bikini and save your life. Thankfully, this emergency has never occurred. But should the day come, I remain fully committed to the plan."
  },
  {
    image: "photo/beingkidnapped.jpg",
    date: "5 April 2026",
    realm: "Golden Wasteland",
    title: "The Most Kidnappable Creature",
    text: "Somewhere along the way, I discovered one of your most dangerous traits: you are physically incapable of saying no. This explains why you get kidnapped so often in Sky and, apparently, in real life too. You're basically a small woodland creature whose only weakness is affection and attention. To this day, I still wonder how you've survived this long. Every instinct in your body seems to scream 'trust everyone'. Somehow, against all odds, you're still here. My adorable little creature. And yes, I would absolutely rescue you from every future kidnapping. MWAH."
  },
  {
    image: "photo/firstmute.jpg",
    date: "6 April 2026",
    realm: "Vault of Knowledge",
    title: "The Silent Realm",
    text: "It was only a matter of time. After countless conversations that definitely weren't designed for a family-friendly game, Sky finally decided it had heard enough. In the middle of one particularly questionable discussion, you suddenly realized your messages were being censored. The game had officially muted you. I laughed so hard I could barely breathe. Looking back, this was probably the moment we learned that our sense of humor was too powerful for Sky's chat filter."
  },
  {
    image: "photo/massage.jpg",
    date: "10 April 2026",
    realm: "Vault of Knowledge",
    title: "The Multitasking Spirit",
    text: "During one of our many candle runs, we somehow ended up discussing my boyfriend, men in general, and our completely legitimate belief that we both possessed a gigantic invisible pipo. In the middle of all that, you proudly informed me that you were a multitasker: you could uber and massage at the same time. To this day, I still have no idea how we got from one topic to the other. Most of our conversations followed this exact pattern."
  },
  {
    image: "photo/mine.jpg",
    date: "22 May 2026",
    realm: "Home Space",
    title: "If Anyone Asked, You Were Mine",
    text: "By this point, our friendship had become such a normal part of everyday life that I stopped taking screenshots as often. We still spent countless hours together, but moments started blending into routine. That's why this screenshot survived. A random Turkish player sat down and started talking to us. Naturally, I immediately informed them that we were a couple. There was no discussion. No agreement. No warning. Just a public announcement. The conversation somehow became even more chaotic afterwards, but one thing remained clear: if anyone asked, you were mine. MWAH."
  },
  {
    image: "photo/crakpipo.png",
    date: "22 May 2026",
    realm: "Home Space",
    title: "The Forbidden Spell",
    text: "A random conversation with strangers somehow led me to stand up, point dramatically across the table, and declare: 'I can crack your pipo.' To this day, I have no idea what I was trying to achieve. What I do know is that your reaction was exactly what I hoped for. One of my favorite things about you has always been how easily I can make you lose your mind with the most ridiculous sentences imaginable. Whether it's 'I can crack your pipo,' 'ankle bite,' or any other completely nonsensical phrase, your horrified little 'QAAAAQ' never fails to make me laugh. You are, without question, the most adorable victim of my nonsense."
  },
  {
    image: "photo/lastphoto.jpg",
    date: "June 5, 2026",
    realm: "Eye of Eden",
    title: "Beyond the Clouds",
    text: "Of all the screenshots we've taken together, I think this might be one of my favorites. After months of candle runs, ridiculous jokes, accidental lore, kidnapping incidents, giant invisible pipos, and countless conversations, we ended up here. Just us, sharing a quiet moment in Eden. When I look at this picture, I don't just see two skykids. I see every memory that came before it. You are one of the sweetest and most wonderful people I know, and I am incredibly grateful that a random Discord message brought you into my life. I truly hope our friendship keeps growing for many years to come, and that one day we'll finally get to meet beyond Sky. Until then, I'll keep saving a seat for you beside me in the sky. MWAH."
  }
];

const timeline = document.getElementById("timeline");
const candleGate = document.getElementById("candleGate");
const lightCandle = document.getElementById("lightCandle");
const constellationMap = document.getElementById("constellationMap");

function createMemories() {
  memories.forEach(memory => {
    const section = document.createElement("section");
    section.classList.add("memory");

    section.innerHTML = `
      <img src="${memory.image}" alt="${memory.title}">
      <div class="memory-text">
        <span class="realm-label">${memory.realm}</span>
        <p class="memory-date">${memory.date}</p>
        <h2>${memory.title}</h2>
        <p>${memory.text}</p>
      </div>
    `;

    timeline.appendChild(section);
  });
}

function revealMemoriesOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".memory").forEach(memory => observer.observe(memory));
}

function createFloatingLights(amount = 34) {
  for (let i = 0; i < amount; i++) {
    const particle = document.createElement("span");
    particle.className = "light-particle";
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${10 + Math.random() * 16}s`;
    particle.style.animationDelay = `${Math.random() * -18}s`;
    particle.style.opacity = `${0.35 + Math.random() * 0.65}`;
    particle.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    document.body.appendChild(particle);
  }
}

function createConstellation() {
  const stars = [
    { x: 12, y: 68 },
    { x: 24, y: 38 },
    { x: 38, y: 58 },
    { x: 52, y: 26 },
    { x: 66, y: 48 },
    { x: 80, y: 22 },
    { x: 90, y: 62 }
  ];

  for (let i = 0; i < stars.length - 1; i++) {
    const start = stars[i];
    const end = stars[i + 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const line = document.createElement("span");
    line.className = "constellation-line";
    line.style.left = `${start.x}%`;
    line.style.top = `${start.y}%`;
    line.style.width = `${length}%`;
    line.style.transform = `rotate(${angle}deg)`;
    constellationMap.appendChild(line);
  }

    stars.forEach((star, index) => {
        const point = document.createElement("div");
        point.className = "constellation-star";

        const memory = memories[index];

        point.style.left = `${star.x}%`;
        point.style.top = `${star.y}%`;

        point.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">
        `;

        constellationMap.appendChild(point);
    });
}

function lightTheCandle() {
  document.body.classList.add("candle-lit");
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 250);
}

createMemories();
createFloatingLights();
createConstellation();
revealMemoriesOnScroll();

lightCandle.addEventListener("click", lightTheCandle);

window.addEventListener("keydown", event => {
  if (event.key === "Enter" && !document.body.classList.contains("candle-lit")) {
    lightTheCandle();
  }
});