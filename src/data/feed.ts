// NOSTOS — Odyssey 9–10 as an eight-post Instagram feed.
// Every caption, comment, count and gap is transcribed from the build document.
// The deaths are in the poem; the feed never states them. Do not "fix" the gaps.

export type Comment = {
  handle: string;
  text: string;
  replies?: Comment[];
  deleted?: boolean; // "This comment was deleted." — its replies survive.
  isCurse?: boolean; // @polyphemos: no followers, no likes, nobody answers.
  noReplies?: boolean; // renders the greyed "no replies" stub Instagram shows.
};

export type FeedImage = {
  illustration?: string; // key into the Illustration component (line-art placeholder)
  src?: string; // OR a path to a real photograph under /public
  alt: string; // required on every image — "ready to be sent"
};

export type Post = {
  id: number; // narrative order, 1..8
  author: string; // handle
  pinned?: boolean;
  location: string;
  images: FeedImage[];
  caption: string[]; // paragraphs. Odysseus composes; Elpenor talks.
  likes: number;
  comments: Comment[];
  noComments?: boolean; // post 8: "(no comments)"
  ref: string; // book/line provenance, shown in the About panel
};

export type Author = {
  handle: string;
  name: string;
  role: "odysseus" | "crew" | "otherShip" | "phaeacian" | "curse";
  invented?: boolean;
};

// §4 THE ROSTER + §2 PROVENANCE
export const AUTHORS: Record<string, Author> = {
  "odysseus.laertiades": { handle: "odysseus.laertiades", name: "Odysseus", role: "odysseus" },
  "polites_": { handle: "polites_", name: "Polites", role: "crew" },
  "eurylochos": { handle: "eurylochos", name: "Eurylochos", role: "crew" },
  "perimedes.rows": { handle: "perimedes.rows", name: "Perimedes", role: "crew", invented: true },
  "antiphos.oikos": { handle: "antiphos.oikos", name: "Antiphos", role: "crew", invented: true },
  "elpenor.younger": { handle: "elpenor.younger", name: "Elpenor", role: "crew" },
  "stichios.shipfour": { handle: "stichios.shipfour", name: "Stichios", role: "otherShip", invented: true },
  "ophelestes.ix": { handle: "ophelestes.ix", name: "Ophelestes", role: "otherShip", invented: true },
  "alkinoos.king": { handle: "alkinoos.king", name: "Alkinoös", role: "phaeacian" },
  "arete.of.scheria": { handle: "arete.of.scheria", name: "Arete", role: "phaeacian" },
  "demodokos": { handle: "demodokos", name: "Demodokos", role: "phaeacian" },
  "nausikaa.of.scheria": { handle: "nausikaa.of.scheria", name: "Nausikaa", role: "phaeacian" },
  "polyphemos": { handle: "polyphemos", name: "", role: "curse" },
};

export const PROFILE = {
  handle: "odysseus.laertiades",
  name: "Odysseus",
  bio: [
    "Ithaka · sacker of cities known to all men for crafty devices",
    "yr 10 of a 10-day trip",
    "currently: a guest",
  ],
  posts: 8,
};

export const FEED: Post[] = [
  {
    id: 1,
    author: "odysseus.laertiades",
    pinned: true,
    location: "Scheria",
    ref: "Bk 9.1–36; Bk 8.30–33, 438–48, 83–92, 457–62",
    images: [
      { src: "/posts/1-1-hall.jpg", alt: "A long table seen from above at the end of a feast — loaded plates, bread and meat, wine, the meal nearly done." },
      { src: "/posts/1-2-lyre.jpg", alt: "A stringed lyre hanging on a peg against a blue wall." },
      { src: "/posts/1-3-chair.jpg", alt: "A wooden chair with a cloak folded over its back." },
    ],
    caption: [
      "There is nothing better than this. A full hall, everyone in their places, bread and meat the length of the table, wine going round, and a singer good enough that nobody talks over him. I have been ten years getting to a room like this.",
      "And the king of it has just asked me to explain how I turned up on his beach with no ship, no crew and no clothes. Which means the evening is over.",
      "So. Odysseus. Laertes' son, of Ithaka — low rocky island, furthest out toward the dark, Neriton standing on it under its trees, the rest of them lying off toward the sunrise. Poor ground. Good for raising men.",
      "I have been away twenty years. Ten besieging Troy and ten trying to get home from it.",
      "I left Troy with twelve ships.",
      "These people are Phaiakians, they are the best sailors alive, and they have offered me passage home. I don't yet know what I'm expected to give them for it, so they're getting the story. All of it. In order.",
      "Two goddesses have offered to keep me forever and make me deathless. I said no twice, because nothing is sweeter than your own country. Remember I said that.",
      "And if I get out of this alive I will host every one of them, however far off I am when they come.",
    ],
    likes: 1204,
    comments: [
      { handle: "alkinoos.king", text: "The ship is yours whatever you tell us. Take as long as you need." },
      {
        handle: "arete.of.scheria",
        text: "Tie the chest properly. There are ports between here and there.",
        replies: [
          { handle: "odysseus.laertiades", text: "Already knotted. Learned it from a woman on an island. She's later in this." },
        ],
      },
      {
        handle: "demodokos",
        text: "I sang the war tonight and you put your cloak over your face. If I sang it wrong, tell me and I'll sing it right.",
        replies: [
          { handle: "odysseus.laertiades", text: "It wasn't wrong. That was the problem." },
        ],
      },
      {
        handle: "nausikaa.of.scheria",
        text: "Don't forget who found you.",
        replies: [{ handle: "odysseus.laertiades", text: "❤" }],
      },
    ],
  },
  {
    id: 2,
    author: "odysseus.laertiades",
    location: "land of the Lotus-Eaters",
    ref: "Bk 9.82–104; the town, 9.39–66",
    images: [
      { src: "/posts/2-1-lotus.jpg", alt: "A small blue flower in close-up against soft green — unremarkable, almost pretty." },
      { src: "/posts/2-2-rope.jpg", alt: "A coil of rope on weathered deck boards." },
    ],
    caption: [
      "We took a town on the way out of Troy and it cost us six men off every ship. I'll come back to that.",
      "Nine days blown off course past Kythera afterwards, and we put in somewhere flat and flowering to take on water.",
      "Sent three ahead to find out what kind of men lived there. They didn't come back, so I went and got them.",
      "They were sitting down eating. That's all. That's what the place does — you eat the flower and the road home goes out of your head. Not painfully. You just stop wanting it. One of them looked up at me like I was a stranger asking for directions.",
      "Dragged all three back down the beach crying and tied them under the benches, then got everyone else aboard before anyone could try it.",
      "Half of getting home is refusing things.",
    ],
    likes: 1388,
    comments: [
      { handle: "polites_", text: "they were crying the whole way down the beach it was awful. cap didnt even slow down" },
      { handle: "eurylochos", text: "they'd have stayed forever. he's right." },
      { handle: "perimedes.rows", text: "seventy-two dead at the town. three men back aboard here. twelve ships." },
      {
        handle: "antiphos.oikos",
        text: "i was one of the three. one thing then im done. nobody there touched us. we asked them what they had and they gave us some of it. thats all that happened. they fed us",
        replies: [
          { handle: "antiphos.oikos", text: "they were the only ones who ever just gave us something and didnt want anything back" },
          { handle: "polites_", text: "you were out of your head mate you dont know what you saw" },
          { handle: "antiphos.oikos", text: "i know what i ate" },
        ],
      },
      {
        handle: "stichios.shipfour",
        text: "what did it taste like",
        replies: [{ handle: "antiphos.oikos", text: "honey. it tasted like honey." }],
      },
      { handle: "ophelestes.ix", text: "he says he'll come back to the town. he won't." },
    ],
  },
  {
    id: 3,
    author: "odysseus.laertiades",
    location: "the Kyklopes' country",
    ref: "Bk 9.105–306; Maron, 9.196–215",
    images: [
      { src: "/posts/3-1-cave.jpg", alt: "Worn stone steps leading up into a dark cave mouth walled with rough stone." },
      { src: "/posts/3-2-cheeses.jpg", alt: "A cloth of fresh cheese hung to drain whey into a pail against a stone cave wall." },
      { src: "/posts/3-3-doorstone.jpg", alt: "A wall of stacked boulders seen from inside the cave, blocking the way out — you cannot see past it." },
      { src: "/posts/3-4-backwall.jpg", alt: "Near-black: the deep back wall of the cave they pressed themselves against." },
    ],
    caption: [
      "Left the fleet at anchor off a goat island and took one ship and twelve of the best across to look at the people opposite.",
      "Kyklopes. Half again the size of a man, one eye each, no assemblies, no laws, no ploughing and no ships. Everything grows for them without being asked for and they have never once had to agree on anything with anybody. I wanted to know what that produces in a man.",
      "Took the priest's wine with me — the good stuff, from the grove above the town we sacked. We went round his house and left him alone and he came down afterwards and gave us gold and a silver bowl and twelve jars of it, unasked. One cup to twenty of water is how a priest drinks it. I had a feeling I'd want something to offer.",
      "The cave was empty when we got there. Cheese in the baskets, lambs sorted by age, milk in every pail. A working household with nobody in it.",
      "The men wanted to take the cheese, run the lambs down to the ship, and go.",
      "I wanted to see whether he'd receive us. I wanted to know what he'd give a stranger.",
      "He came back at dusk and put a stone in the doorway that twenty-two wagons couldn't have shifted. Then he milked, and set every lamb to its mother, and did all of it properly, in order, like a man who knows his work.",
      "Then he asked us who we were.",
    ],
    likes: 2051,
    comments: [
      { handle: "antiphos.oikos", text: "we said take the cheese. we said it out loud. i said it" },
      { handle: "eurylochos", text: "we all said it" },
      {
        handle: "polites_",
        text: "he wanted to see the man. thats not a crime. we all wanted to see the man",
        replies: [{ handle: "eurylochos", text: "no" }],
      },
      { handle: "perimedes.rows", text: "twelve of us went in. twelve ships still on the water." },
      {
        handle: "odysseus.laertiades",
        text: "Far better indeed had I listened. There. Written down.",
        replies: [
          { handle: "eurylochos", text: "say the rest of it" },
          { handle: "odysseus.laertiades", text: "No." },
        ],
      },
      { handle: "stichios.shipfour", text: "whats in the cave. lads. whats in the cave" },
      { handle: "ophelestes.ix", text: "he carried a guest-gift in there with him." },
    ],
  },
  {
    id: 4,
    author: "odysseus.laertiades",
    location: "the Kyklopes' country, then open water",
    ref: "Bk 9.316–566",
    images: [
      { src: "/posts/4-1-stake.jpg", alt: "A sharpened wooden stake, whittled to a point — the olive stake, ready." },
      { src: "/posts/4-2-bowl.jpg", alt: "An empty wooden bowl on a dark table — the cup he poured the wine into, three times." },
      { src: "/posts/4-3-wake.jpg", alt: "A wake seen from a stern, the water thrown white, the coastline far behind — the frame mostly spray." },
    ],
    caption: [
      "His name was Polyphemos. Here's how it went.",
      "He'd been taking two of mine at a time, twice a day, and I couldn't kill him in his sleep because none of us could move the doorstone. So I had to keep him alive and make him stupid.",
      "I gave him the priest's wine neat. Three bowls. He liked it enough to offer me a guest-gift in return and ask me my name.",
      "I told him my name was Nobody.",
      "He said — and I want this recorded exactly, because I have thought about it every day since —",
      "“Nobody I'll eat last of all, after his companions. That's your guest-gift.”",
      "Then he went over backwards, and we put the stake in his eye and turned it like a drill. When the others came running he told them Nobody was killing him, so they went home. Out under the bellies of the rams at dawn, every man, and the flock down to the ship, and away.",
      "And I could not leave it. Got out to a shout's distance and told him what he was. He tore the top off a mountain and threw it and nearly put us back on the beach.",
      "The men were hanging off my arms telling me to sit down.",
      "I stood up and told him my name. My actual one. Odysseus, sacker of cities, Laertes' son, who lives on Ithaka — because I had taken his eye and he was going to spend the rest of his life not knowing who did it, and I could not have that.",
      "He shouted back that a prophet warned him years ago an Odysseus would come and blind him, and that his father would see to me. His father is Poseidon. Who owns the sea.",
      "I'd stopped listening by then. Twelve ships out of Troy. Twelve ships still.",
    ],
    likes: 4902,
    comments: [
      { handle: "polites_", text: "THREE BOWLS 😂😂 cap i genuinely think this is the cleverest thing anyones ever done" },
      { handle: "perimedes.rows", text: "twelve went in. six came out. twelve ships." },
      { handle: "stichios.shipfour", text: "NOBODY 💀 how do you even think of that" },
      {
        handle: "elpenor.younger",
        text: "i missed ALL of this i was on the other beach with the goats 😭 someone tell it again properly",
        replies: [{ handle: "polites_", text: "ill tell you tonight" }],
      },
      {
        handle: "eurylochos",
        text: "you were saving that wine for a host",
        replies: [{ handle: "odysseus.laertiades", text: "I used it on one." }],
      },
      {
        handle: "eurylochos",
        text: "he called it a guest-gift.",
        replies: [
          { handle: "eurylochos", text: "you wrote it down and put it in bold and you still went straight past it" },
          { handle: "polites_", text: "mate hes quoting the guy to make fun of him thats the joke" },
          { handle: "eurylochos", text: "yeah" },
        ],
      },
      {
        handle: "eurylochos",
        text: "you gave him your name.",
        replies: [
          { handle: "eurylochos", text: "you gave a man your father's name and the name of the island" },
          { handle: "odysseus.laertiades", text: "He was never going to find it." },
        ],
      },
      {
        handle: "polyphemos",
        isCurse: true,
        text: "Hear me, Poseidon, dark-haired Earth-Shaker, if I am truly your son. Let Laertes' son of Ithaka not come home. Or if he must — let him come late, and broken, and with every man of his lost, in some other man's ship, and let him find trouble waiting in the house.",
        replies: [{ handle: "", text: "", noReplies: true }],
      },
      { handle: "polites_", text: "whats for dinner" },
      { handle: "ophelestes.ix", text: "whos that account" },
    ],
  },
  {
    id: 5,
    author: "odysseus.laertiades",
    location: "Aiolia → nine days west → Aiolia",
    ref: "Bk 10.1–79",
    images: [
      { src: "/posts/5-1-rampart.jpg", alt: "A bronze cannon on a shoreline fortification, pointing out over the sea — a bronze wall guarding the coast." },
      { src: "/posts/5-2-family.jpg", alt: "A long table set the length of a room, plates and glasses down both sides — everyone at the same table." },
      { src: "/posts/5-3-bag.jpg", alt: "A great ox-hide bag, its mouth gathered and bound with cord — this is a gift." },
      { src: "/posts/5-4-fires.jpg", alt: "A coastline at night, distant fires along the shore over dark water, slightly out of focus." },
    ],
    caption: [
      "A floating island with a bronze wall round it, and a man on it who is loved by the gods and has never once had to explain himself.",
      "Six sons, six daughters, married to each other, all still at home, all at the same table every night. The house smells of food and everybody talks over everybody. He kept us a month. Asked me everything — Troy, the ships, who got home and who didn't — and let me answer at my own speed and never once looked past me at the door.",
      "When I finally asked, he just said yes.",
      "Flayed a nine-year-old ox, put every wind in the world inside the hide, tied the mouth shut with silver cord, and stowed it in my ship himself. Then let the west wind out alone, on deck, to carry us home. A month of being fed by a man who wanted nothing.",
      "Nine days. I had the sheet in my hands the whole nine days and wouldn't give it to anyone — not because I don't trust them, but because I wanted us there faster and nobody else was going to hold it that hard.",
      "Tenth morning: Ithaka. Close enough to see the men on the hills tending their watch fires.",
      "Then the bag was open and the winds were all out at once and we were going backwards over the water with the island shrinking behind us and everyone screaming.",
      "I woke up to it.",
      "I thought about going over the side. Genuinely considered it, lying there with my head covered. Then I decided to endure and stay among the living, which I am told is the harder of the two. My own spirit is blameless in this. I want that on the record.",
      "Went back up to the house with a herald and one man. Found him at dinner with all of them, same table, same noise. They were astonished to see me. His wife asked what god had it in for me.",
      "I told them the truth: my wretched companions undid me, they and damnable sleep. Then I asked for help, because they had the power to give it and had given it before.",
      "Nobody said anything for a long time.",
      "Then he told me to get off his island. That I was the most abject living thing there is. That it is not permitted to help a man the blessed gods hate. That I had turned up on his doorstep marked by divine hostility, and to go.",
      "A month he fed me. Then that.",
    ],
    likes: 7204,
    comments: [
      { handle: "polites_", text: "best month of my life and im including the ones before the war" },
      { handle: "stichios.shipfour", text: "his daughters made us honey cakes every single morning for thirty days. can we go back" },
      { handle: "elpenor.younger", text: "i want to live there. im serious. can we live there" },
      { handle: "perimedes.rows", text: "west wind holding. twelve ships. nine days at this rate, checked it twice." },
      {
        handle: "ophelestes.ix",
        text: "whats in the bag though",
        replies: [{ handle: "", text: "", noReplies: true }],
      },
      {
        handle: "eurylochos",
        text: "“then the bag was open”",
        replies: [
          { handle: "eurylochos", text: "you'd been awake nine days. you fell asleep. thats the sentence thats missing" },
          { handle: "odysseus.laertiades", text: "I said I woke up to it." },
          { handle: "eurylochos", text: "you said it after" },
        ],
      },
      {
        handle: "stichios.shipfour",
        text: "were saying it because someone has to. look how this man is loved and honoured everywhere he goes. hes bringing gold and silver home out of the spoil and we went through every single thing he went through and were coming back with our hands empty. and now theres a bag",
        replies: [{ handle: "stichios.shipfour", text: "so we looked" }],
      },
      { handle: "polites_", text: "i didnt touch it. i want that said. but i didnt stop them either" },
      { handle: "perimedes.rows", text: "ten days out. ten days back. twenty. twelve ships." },
      { handle: "elpenor.younger", text: "i could see the fires 😭" },
      { handle: "eurylochos", text: "“marked by divine hostility”" },
      { handle: "ophelestes.ix", text: "he's loved by the gods. he would know." },
      { handle: "stichios.shipfour", text: "what did we do" },
    ],
  },
  {
    id: 6,
    author: "odysseus.laertiades",
    location: "Telepylos",
    ref: "Bk 10.80–132",
    images: [
      { src: "/posts/6-1-harbour.jpg", alt: "A cliff-walled harbour photographed from the water outside it — high headlands, calm water within." },
    ],
    caption: [
      "Six days rowing with no wind, because of what we'd done.",
      "Found a harbour with cliffs all round it and two headlands nearly shut across the mouth, and inside it not a ripple, great or small. Eleven ships took it and moored up together where it was calm.",
      "I tied mine to a rock on the outside.",
      "I don't have a reason. I went up to a lookout, saw no cattle, no ploughing and no men, only smoke, and sent three ahead. One of them was eaten in front of the other two.",
      "Then they came down off the cliffs and threw rocks a man couldn't lift, into a harbour where nothing could move. I cut my own cable with my sword and shouted at my men to row.",
      "Mine got out.",
    ],
    likes: 11340,
    comments: [
      { handle: "perimedes.rows", text: "one ship." },
      { handle: "polites_", text: "cap" },
    ],
  },
  {
    id: 7,
    author: "odysseus.laertiades",
    location: "Aiaia",
    ref: "Bk 10.203–500 (deleted comment: 10.429–48)",
    images: [
      { src: "/posts/7-1-doorway.jpg", alt: "A grey-muzzled dog lying calm in the doorway of a weathered green door — the wolves and lions at Circe's threshold, tame, tails going, not attacking." },
      { src: "/posts/7-2-loom.jpg", alt: "A wooden loom mid-weave by a window, nobody at it." },
      { src: "/posts/7-3-moly.jpg", alt: "A snowdrop pulled up entire on weathered wood — milk-white flower, pale bulb, tangled roots. The black-rooted, white-flowered herb Hermes gave." },
      { src: "/posts/7-4-table.jpg", alt: "A long table laid for a great many people — candles, silver, white settings." },
    ],
    caption: [
      "Split what was left into two and drew lots, and Eurylochos went with twenty-two men. He came back alone and couldn't speak for crying.",
      "The rest were pigs. Actual pigs — heads, voices, bristles — and their minds still their own inside it, which is the part he couldn't get out. There is a goddess on this island called Kirkē and that is what she does to guests.",
      "He begged me not to go. I went.",
      "Hermes met me on the path, pulled a herb out of the ground and showed me the root of it, black, and the flower, white. Told me exactly what she would do and exactly what to do back. Drink it and don't be changed, draw the sword — and when she offers the bed, don't refuse, but make her swear the oath first.",
      "She swore it. She gave my men their bodies back and they came out younger and taller than they went in.",
      "Then she fed us. And we stayed.",
      "Meat and wine, every day, for a year. I am going to be honest about this because I have been honest about the rest: nobody made us stay. I didn't count the months. It took my own men coming to me and asking whether I had lost my mind, whether I remembered I had a house.",
      "They were right. We're going. There's one more journey first — a pit, a black ram, and a dead man who still has his wits — and I've told them where.",
    ],
    likes: 14882,
    comments: [
      {
        handle: "",
        deleted: true,
        text: "",
        replies: [
          { handle: "polites_", text: "cap. cap hes kin. leave it" },
          { handle: "perimedes.rows", text: "hands off it" },
          { handle: "perimedes.rows", text: "leave him with the ship. thats all. leave him by the ship and the rest of us come with you" },
          { handle: "polites_", text: "yeah. leave him with the ship" },
          { handle: "eurylochos", text: "i came anyway" },
        ],
      },
      { handle: "eurylochos", text: "i said dont go. for the record i said dont go, same as the cave, same as the wine. and i was wrong both times and right once and i still dont know which" },
      {
        handle: "polites_",
        text: "i was the one who called out to her. i heard the singing and said lets call out. it was me",
        replies: [{ handle: "polites_", text: "id do it again its the best ive eaten in ten years" }],
      },
      { handle: "perimedes.rows", text: "forty-six of us." },
      {
        handle: "eurylochos",
        text: "a year.",
        replies: [{ handle: "odysseus.laertiades", text: "I know." }],
      },
      { handle: "elpenor.younger", text: "wait where are we going" },
    ],
  },
  {
    id: 8,
    author: "elpenor.younger",
    location: "Aiaia",
    ref: "Bk 10.550–60",
    images: [
      { src: "/posts/8-1-roof.jpg", alt: "A rooftop at night under a sky thick with stars, Orion overhead — shot lying back on the roof, mostly sky." },
    ],
    caption: [
      "too hot inside so im up on the roof. can hear them all packing down there. someone dropped something",
      "ive been on this island a year and i still dont really know what happened at the harbour. nobody will tell me properly. i ask and everyone goes quiet and then perimedes says a number",
      "im not the best fighter on this ship im not going to pretend. and im not clever. eurylochos knows things and cap knows things and polites is braver than me. i mostly carry stuff and im good at it",
      "but i was there for all of it. the flower and the ram and the fires on the tenth day and this. i saw all of it same as them",
      "we're going somewhere tomorrow and nobody will say where",
      "anyway its nice up here",
    ],
    likes: 0,
    noComments: true,
    comments: [],
  },
];
