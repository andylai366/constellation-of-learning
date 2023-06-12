const body = document.getElementById("overall");

const track = document.getElementById("image-track");
let lightboxOpened = false;
let dragging = false;

const handleOnDown = e => {
  dragging = false;
  track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const handleOnMove = e => {
  dragging = true;
  if(!lightboxOpened)
  {
    if(track.dataset.mouseDownAt === "0") return;
  
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.round(Math.max(Math.min(nextPercentageUnconstrained, 0), -100) * 1000) / 1000;
    
    track.dataset.percentage = nextPercentage; 

    moving = true;
    
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards"});
    }
  }
}

const overall = document.getElementById("overall");

const images = Array.from(document.getElementsByClassName("image"));
const lightbox = document.getElementById("lightbox");
const exitbox = document.getElementById("exitbox");
const lightboxImage = document.getElementById("lightbox-image");
const reflectionImage = document.getElementById("reflection-image");
const backgroundScrollQuotes = document.getElementById("background-quotes");

const constellationTitle = document.getElementById("constellation-title")
const constellationSubtitle = document.getElementById("constellation-subtitle")
const constellationReflection = document.getElementById("constellation-reflection")
const constellationReflection2 = document.getElementById("constellation-reflection2")
const constellationReflection3 = document.getElementById("constellation-reflection3")
const constellationReflection4 = document.getElementById("constellation-reflection4")
const constellationReflection5 = document.getElementById("constellation-reflection5")

const constellationQuote = document.getElementById("constellation-quote")
const constellationQuote2 = document.getElementById("constellation-quote2")
const constellationQuote3 = document.getElementById("constellation-quote3")
const constellationQuote4 = document.getElementById("constellation-quote4")

let scrollText = document.querySelector(".scroll-text");

const reflections = [
    `Throughout this novel, one recurring idea stood out to me: the trauma and treatment which the characters face. Fundamentally, the Indigenous peoples face trauma and negative treatment as they commonly face being betrayed, captured, or emotionally hurt. This realization challenged my thinking because it forced me to confront the harsh realities which the Indigenous peoples face in the past and present. It completely removed all preconceived notions I might have held, and made me reflect on how lucky I am in the modern day. I do not need to live in constant fear of traumatic situations such as being hunted. This text also connects to the course because throughout this semester, we explored certain FNMI voices or experiences. These voices and experiences closely relate to how this text sheds light on the Indigenous peoples’ mistreatment and marginalization. Additionally, both the text and course strives for truth and reconciliation to build a better future

    One example of the trauma  the Indigenous peoples face would be French’s loss of Mitch and RiRi. This situation which French experiences first hand, builds mental trauma which ultimately leaves him to suffer emotionally. 

    French experiences Mitch’s capture and states that, 
    `,

    `With Hunting By Stars being a sequel to Marrow Thieves, this book was appealing to me because it reinforces the unique and important ideas based on the prequel. In particular, the idea of the importance of family and community strongly resonates with me after reading this book. The connections and relationships which Dimaline creates between the characters completely changed the way I think about what it means to belong to a family or community. In the past, one of the biggest misconceptions I had when understanding family and communities is that they were simply a group of people that are blood related or live in the same area. However, the characters in the story prove that family and community are instead important relationships molded through difficult and easy times. They provide emotional support, resolve conflicts, preserve culture, and even bring collective action when you need it the most.
 
    For instance, Rose, who is one of the most independent characters, proves that family and community comes first in life because of how valuable it is. She expresses that,
    `,

    `After reading “I Lost My Talk”  by Rita Joe and listening to the story behind it, I found that it was a very meaningful and powerful poem relating to the pure uniqueness and individuality each person has. In particular, Rita Joe utilizes very few words in her poem to convey that although there are some similarities between people, the majority of people are different through their cultural identity and voice. These differences enable people to feel valued and embrace one’s own beliefs or cultures for who they are. Unfortunately, there are also times when people take away or ignore the differences of others due to ignorance. Therefore, Rita also educates that we need to be more inclusive, learn, and reclaim the identity or voice from others. This poem challenged my thinking because I originally thought that being unique or having individuality meant to just stand out. Instead, individuality is more about being true to yourself by accepting the beliefs and cultures which make the person you are. 

    As an example, Rita once had individuality, but the residential schools took this away resulting in her becoming systematized. She states that,
    `,

    `Following reading “Totem” by Thomas King, I immediately thought of numerous ways which the text could be interpreted. At first, the text appears to only have one significant theme or meaning; however, upon further analysis, there are different perspectives you may take to extrapolate a variety of interpretations. For instance, the first perspective I viewed this text with was through the museum employees establishing discrimination, oppression, and hate towards the totem pole. This perspective represents the colonizers who attempted to take the land, cultures, and traditions from the Indigenous peoples. Another perspective which I viewed this story from was through the totem pole that resisted changes and morally incorrect actions. This perspective illustrates the way the Indigenous peoples proudly act in response to assimilation. With the many symbols and perspectives in this story, it helped me to learn and think about how each person can compose their own individual views for any story.
 
    For example, in the first perspective I viewed the story with, it contains hidden meanings relating to the colonization of the Indigenous peoples. During the story, the museum employees mention that,
    `,

    `In Shane Hawk’s speech, Shane tells his own story of how he became a successful English teacher and author. One important theme I acknowledged was his motivation and resilience in his life. He explained certain events such as surviving COVID, finding an audience, and failing college in order to demonstrate he overcame incredibly difficult challenges in life. I believe that Shane Hawk has developed incredible emotional strength and perseverance because that is why he was able to talk to us today. His experiences demonstrate that if you put in your utmost effort, you can get through anything. Additionally, the overall message provided by his speech deeply connects to the course texts because in books such as The Marrow Thieves or Hunting By Stars, they similarly exemplify strong resilience and motivation by certain characters. Shane Hawk is a real life example of the powerful characters within the course texts.

    Shane Hawk’s resilience in his life is demonstrated through the many events he recalls. During the beginning of college, Shane Hawk states that, 
    `,

    `This TED talk by Rebecca Thomas provides an interesting and unique case on the significance of language. In particular, interactions, community, and culture, are all profoundly altered by language. This new perspective challenged my thinking because I never thought about how big of a role language can play. As a person who does not speak many languages, I do not know how the fundamental understanding of the world may change when you speak a different language. As a result, this topic made me consider how others might experience this. Additionally, I noticed that this TED talk is closely connected to the course ideas because it includes the concept of decolonization by emphasizing the need to learn other languages. Overall, language is not only a means of communication, but instead it also completely shapes the worldview for individuals.

    Languages, particularly Indigenous languages, have the power to shape one’s worldview and identity because they provide us with a foundation for thought. This is due to the fact that different languages have varying grammatical structures and nuances which changes the way we process the world. As Rebecca explains in one example,
    `
];

const reflections2 = [
  ` These horrific flashbacks are not easy for anyone to overcome, let alone French when he is developing to be a more responsible person for his family. This writing element made me understand that trauma changes the actions and emotions of people dramatically. For French, he began to irregularly react strongly to situations because of his trauma or flashbacks. Even after a long time period, these events become extremely detrimental to French’s mental health as they stay in the back of his mind forever. 
  
  In addition, the coming-to stories of multiple characters reveal the poor physical treatment that results from being themselves: a distinct Indigenous individual. For instance, in Wab’s coming to story, she recalls that, 
  `,

  `Rose utilizes an analogy of the way a symphony plays as the reason why she is trying to save French. This analogy made me understand that for her family and community, everyone is linked closely together like music notes. When notes play together, they create a pleasant harmony. However, when notes are separated, they create a cacophony. In cases like this, other notes help to ensure that the impact on the music is minimal. This represents how if one person is struggling in the Indigenous family or community, others will provide their best to help, even if it is unfeasible. Through Dimaline’s analogy, it has opened up my thinking to the real significance of family and community. It provides fundamental care from others which supports and drives a person’s life.

  Furthermore, at one point when French has put in a significant amount of effort into escaping the schools, he thinks, 
  `,

  `The residential schools took away her culture, traditions, and her talk making her no longer unique. This prompts her to make use of parallelism and write that she is “like” the people who run the residential schools: ordinary and common. These descriptive lines with imagery and a metaphor, highlight the pure importance of being different. If each and every person in the world was the same, we would all be akin to uncollaborative and emotionless robots. As a result, I find the residential schools completely inappropriate because colonizing the Indigenous peoples to speak and act modern is ignorant along with absurd. It will only lead us humans down a path to an undiverse future. 

  Moreover, another example is when Rita mentions that, 
  `,

  `After reading this, I thought about how this story is an allegory towards the way the Canadian government treated the Indigenous peoples. The Canadian government tortured, killed, and held the Indigenous peoples by putting them in residential schools. This is indirectly portrayed by the totem pole being cut down and covered in pruning paste to stop growth. This allegory challenged my thinking as it opened my mind to understand a new view or opinion of the story.

  Additionally, the second view that was immediately apparent was the totem pole’s resistance to wrongful changes and actions. The totem pole, representing the Indigenous peoples, continuously grew back and fought against the employees of the museum. The totem pole reportedly
  `,

  `Despite this, Shane Hawk bounces back as he ultimately returns to college to get a degree for teaching. Following this, he decides to start writing books; however, he says that,
  `,

  `It is apparent that the German language necessitates the inclusion of a destination because they do not have the ability to solely focus on the action only. The structure of the German language is completely different from English, resulting in producing different thoughts. This would also be true for Indigenous languages in comparison to English. This is a shocking concept to me because from what I know, we do not think in a language. We process ideas in our brain without languages, but as soon as we express our thoughts verbally, our perception of the world changes.
  
  Additionally, Rebecca brings out another very important concept of seeing with two eyes. This language concept is about embracing multiple perspectives and knowledge of others. For example, she states that, 
  `
]

const reflections3 = [
  `Wab was running and delivering letters for people, a valuable service at the time. However, a group sexually assaulted Wab because they were trying to start a new business. With the imagery that is utilized, it makes me have a strong appalling reaction. I find it horrible that just because characters like Wab are Indigenous, they face negative treatment of being tortured for no reason. Similarly to French, this event builds trauma which Wab holds on to for the rest of her life. This will affect her future actions physically and mentally. 
 
  Overall, these situations made me reflect that trauma can ruin someone physically and impact one’s psychological thinking for a long time. To conclude, The Marrow Thieves highlights the profound effects of trauma the characters face, representing the negative bias or target towards the Indigenous peoples and communities.
  `,

  `French understands he has done things which go against his family’s morals, but he did them in order to return to them. It is later in the story that Miig knows that French had to betray them to come back, but he is understanding. In a conversation between Miig and French, they said, 
  `,

  `After all that she experienced at the residential schools, Rita takes the initiative to offer those behind the residential schools to learn about her identity. This is an opportunity for her to reclaim her culture and identity to feel valued again. She strives for individuality which is about embracing her own beliefs, traditions, and cultures even if it differs from the norms around her. This further challenged my thinking as I am shocked that Rita Joe would be so open to reclamation after the torture she has sustained. I learned that holding on to grudges are pointless because they only prevent you from returning to the unique individual you once were. 

  Lastly, I found that this poem closely aligns when Hunting By Stars as Rita Joe is very similar to French. They leave the residential schools and strive to return to their past selves: an individual who is proud of their families, culture, and identity regardless of anything. 
  
  Overall, Rita Joe writes a brilliant poem emphasizing the necessity of individuality and the devastating impact when one loses it.  
  `,

  `After getting cut down numerous times already, the totem pole became an even bigger annoyance by
  `,

  `To overcome this, he stepped out of his comfort zone to reach out to bigger authors, and this eventually got his book widely spread. Both of these flashbacks exemplify the resilience he has because he maintains a positive outlook and takes in the failures to adapt for success. As he puts it,
  `,

  `This concept is meant to encourage individuals to have an open mind in order to move beyond binary thinking and instead engage in collaborative learning for other languages. This made me contemplate that as primarily an English speaker, I may be limited on understanding the worldviews of others. As I can only speak some Cantonese, I am primarily embracing only the English perspective in my day to day life. Two-eyed seeing is a reminder of the need to connect with other languages and cultures, especially Indigenous, in order to expand our horizons.
  
  All in all, as Rebecca Thomas puts it,
  `,
]

const reflections4 = [
  `Miig has no choice, but to accept French back because his return means French prioritized family or community. French’s connection and relationship to his family along with the Indigenous community is remarkably strong because he is welcomed despite betraying. He has a sense of belonging, support, and security by being with his family.
  
  Parts of the book, such as these, challenge my thinking as I reflect that family and community ultimately helps each other navigate, bring a sense of purpose, and implement dependability. Family and community is not just the people close to you who help you live, but instead it is a relationship in which you always have somebody who supports you despite any mental or physical challenges. This is a characteristic which is undoubtedly one of the most important in life.`,

  `The totem pole in this scene alludes to the way the Indigenous peoples resisted against the Canadian government’s horrific acts. They continuously tried to escape the brutal system for freedom in order to preserve their own culture and traditions. Much like in Hunting By Stars, culture and traditions are very important to the Indigenous peoples, so as a result, any impedance causes great resistance or resilience. The way this story developed another perspective for me expanded my thinking through broadening and uncovering gaps in my knowledge. I now have a better understanding of what the Indigenous peoples faced and how they responded to obstacles or hindrances.
  
  Overall, stories have the ability to present multiple perspectives that can result in diverse interpretations for each reader. For me, just these two perspectives, among numerous others, helped to expand my thinking as they uncovered more information about the Indigenous peoples’ experiences. 
  `,

  `Shane Hawk’s own speech challenges my thinking as it inspires me to take action in my own life. Witnessing his exceptional work ethic and resilience motivates me to think or identify how I can cultivate a similar mindset.
  
  On top of resilience, his speech discusses motivation as he explains what drives him to continue doing what he loves. During the peak of COVID, Shane Hawk contracted the disease and he was going to pass away. He recalls that
  `,

  `This concept is meant to encourage individuals to have an open mind in order to move beyond binary thinking and instead engage in collaborative learning for other languages. This made me contemplate that as primarily an English speaker, I may be limited in understanding the worldviews of others. As I can only speak some Cantonese, I am primarily embracing only the English perspective in my day to day life. Two-eyed seeing is a reminder of the need to connect with other languages and cultures, especially Indigenous, in order to expand our horizons.
  
  All in all, language plays a significant role in shaping the way we think. Rebecca Thomas brings up that we should strive to see with two eyes in order to communicate and connect with more cultures and traditions. To take the time to understand the perspectives through more than one language, we can build relationships to expand the way we view the world`
]

const reflections5 = [
  ` The possibility of a short lifespan brought him motivation and clarity to end up where he is today. He works hard every moment of his life to enable himself to write books for students and educate kids for the future. This genuinely challenges my thinking because I used to believe that motivation is crucially reliant on external factors such as awards and recognition. However, Shane Hawk proves through experience that it is more important to be driven by internal factors such as personal events, values, thoughts, and passion. His speech changed me to strive for motivation that stems from myself instead of other things or people.

  All in all, reflecting on the concepts of resilience and motivation from Shane Hawk has been very significant. He challenged my thinking, improved the way I approach challenges, and cultivated inspiration from his overall success. 
  `,

  `Consequently, in order to create connections with more cultures and traditions, it is imperative that we should take the time to understand more than one language perspective. This enables us to establish important relationships and expand the way we view the world.
  `,
]

const quotes = [
  `“Yelling while they dragged [Mitch] down the ladder and onto the grass…Then the door slid shut. And an engine clicked on and whirred to life. And I was alone” (Dimaline 3). French also experiences RiRi’s death and reminds himself saying, “We’d run and mourned for hours…crying out when the image of RiRi came to mind.” (Dimaline 118).`,

  `“‘They do whatever it takes to be back together, no matter how impossible that might be for tiny notes stranded in an unknown body’” (Dimaline 69-70).`,

  `“You snatched it away:/I speak like you/I think like you/I create like you/The scrambled ballad, about my word” (Joe 5-9).`,

  `“‘We could get the chainsaw and cut it off close to the floor,’...‘Do what you have to do, but do it quietly’” (King 2) and “‘The trick I think…is to cut the pole down and then cover the stump with pruning paste. That way it won’t grow back’ (King 3).`,

  `“I just kept getting bad grades, I kept, you know, not going. Over time, I just stopped going to college” (Hawk 0:40).`,

  `“[an] English speaker said this is a woman walking whereas German speaker said this is a woman walking to her car” (Thomas 1:5).`,
]

const quotes2 = [
  `“He moved fast, too quickly for me to do anything but close my eyes again. I didn’t feel the slice. Just the wet on my cheek, and neck, and chest. Then he was pulling off  my pants. Then I stopped feeling all together” (Dimaline 72).`,

  `“And just before I fell asleep, I wondered if my family would have any doubts about me. Would they think I was a traitor? What about the Agent? Would they believe they were just a fellow runner?” (Dimaline 228).`,

  `“So gently I offer my hand and ask,/Let me find my talk/So I can teach you about me” (Joe 13-15).`,

  `“started shouting, loud, explosive shouts that echoed through the collection of sea scenes and made the paintings on the wall tremble ever so slightly” (King 3).`,

  `“I didn’t think anyone was going to read it at all” (Hawk 4:03)."`,

  `“you see Nova Scotia, Nouvelle-Écosse, Canada we see Mi'kmaq, traditional territory, Turtle island. It’s not either or, it’s both at the same time” (Thomas 9:01).`,
]

const quotes3 = [
  `“‘But...but you were dead. You...you died.’ ‘I didn’t. I got out.’ ‘But then…’ He leaned in…looking, searching for something—the truth of me, of who I was then” (Dimaline 270-271).`,

  `“singing. It started with a high, wailing, nasal sound and then fell back” (King 3).`,

  `“I think you have to fail in order to get somewhere…shows that you are trying” (Hawk 1:15).`,

  `“you see Nova Scotia, Nouvelle-Écosse, Canada we see Mi'kma'ki, traditional territory, Turtle island. It’s not either or, it’s both at the same time” (Thomas 8:58-9:12).`,
]

const quotes4 = [
  `“in December 2020, I was on oxygen machines” (Hawk 11:03) and as a result, he reflects that “life is short” (Hawk 11:50).`,

  `“the language you speak fundamentally shapes your worldview and everything that goes along with it” (Thomas 0:16).`,
]

const reflectionBookImages = [
  "./marrowthievesbook.jpg",
  "./huntingbystarsbook.jpg",
  "./ilostmytalk.jpg",
  "./totem.jpg",
  "./shanehawk.jpg",
  "./twoeyedseeing.jpg",
]

const backgroundQuotes = [
  `
  “Yelling while they dragged [Mitch] down the ladder and onto the grass…Then the door slid shut. 
  And an engine clicked on and whirred to life. 
  And I was alone”
  
  “We’d run and mourned for hours…
  crying out when the image of RiRi came to mind.”
  
  “‘French? French, it’s okay, we got him under control. 
  Tree was trying to reason with me. 
  Or maybe it was just the wind…I pulled the trigger and the wind stopped blowing” 
  
  “He moved fast, too quickly for me to do anything but close my eyes again. 
  I didn’t feel the slice. Just the wet on my cheek, and neck, and chest. 
  Then  he  was  pulling off  my  pants. 
  Then I stopped feeling all together” 
  
  “I pushed Isaac behind me and squared my shoulders, 
  wishing we’d started sleeping with the shotgun, like we’d talked about.
  If I had honestly known what was in store for us, 
  I would have used it to finish us both, right then and there”
  `,

  `
  “Rose closed her eyes for a moment. 
  ‘They do whatever it takes to be back together, 
  no matter how impossible that might be for tiny notes stranded in an unknown body.’"
  
  “And just before I fell asleep, 
  I wondered if my family would have any doubts about me. Would they think I was a traitor? 
  What about the Agent? Would they believe they were just a fellow runner?”
  
  “Sometimes you risk everything for a life worth living, 
  even if you’re not the one who’ll be alive to live it”

  “I was lost in the memory of my people, 
  my family, out there somewhere. I was sure, in the same way 
  I knew my mother was long dead and gone, that they weren’t in here. 
  And that meant they must be looking for me”
  
  “‘But...but you were dead. 
  You...you died.’ ‘I didn’t. I got out.’ ‘But then…’ He leaned in, 
  looking clear into my eyes, tilting his head one way and then the other, 
  looking, searching for something—the truth of me, of who I was then”
  `,

  `
  “You snatched it away:/I speak like you/I think like you
  /I create like you/The scrambled ballad, about my word”
  
  “Two ways I talk/Both ways I say,/Your way is more powerful”
  
  “So gently I offer my hand and ask,/Let me find my talk/So I can teach you about me”
  `,

  `
  “‘We could get the chainsaw and cut it off close to the floor,’...
  ‘Do what you have to do, but do it quietly’”
  
  “‘The trick I think,’ said Larue, 
  ‘is to cut the pole down and then cover the stump with pruning paste. 
  That way it won’t grow back’
  
  “‘Maybe if we ignore it, it will stop singing,” 
  said Jimmy.’ It might even go away 
  or disappear or something”
  
  “After lunch, the totem pole in the corner of the gallery started shouting, 
  loud, explosive shouts that echoed through the 
  collection of sea scenes and made the paintings on 
  the wall tremble ever so slightly”
  
  “The next day, the totem pole in the corner was singing. 
  It started with a high, wailing, nasal sound and then fell back into a patient, 
  rhythmic drone that gave Walter a huge headache just 
  above his eyes and made him sweat.”
  `,

  `
  “I think you have to fail to get somewhere…shows that you are trying”
  
  “I didn’t think anyone was going to read it at all”
  
  “I almost died from COVID in December 2020, I was on oxygen machines”
  
  “I have to start taking chances with life, life is short, can be very short for some people”
  `,

  `
  “language isn't just something we use to get our points across as I said it's woven 
  into who we are as people and our notions of a 
  broader identity”

  “the language you speak fundamentally shapes your worldview and 
  everything that goes along with it”
  
  “English speaker said this is a woman walking whereas 
  German speaker said this is a woman walking to her car”
  
  “you see Nova Scotia, Nouvelle-Écosse, Canada we see Mi'kmaq, traditional territory, 
  Turtle island. It’s not either or, it’s both at the same time”
  `
]

const constellationSubtitles = [
  "The Marrow Thieves",
  "Hunting By Stars",
  "I Lost My Talk",
  "Totem",
  "Shane Hawk",
  "Two-Eyed Seeing"
]

function openLightbox(imageSrc, num) {
  console.log(num)
  lightboxImage.src = imageSrc;
  constellationTitle.innerText = "Constellation Reflection " + num; 
  constellationSubtitle.innerText = constellationSubtitles[num - 1];
  constellationReflection.innerText = reflections[num - 1];
  constellationReflection2.innerText = reflections2[num - 1];
  constellationReflection3.innerText = reflections3[num - 1];
  constellationQuote.innerText = quotes[num - 1];
  constellationQuote2.innerText = quotes2[num - 1];
  reflectionImage.src = reflectionBookImages[num - 1];
  backgroundScrollQuotes.innerText = backgroundQuotes[num - 1];
  backgroundScrollQuotes.style.transform = `translate(${Math.round(Math.random() * 100)}vw, 50vh)`

  if(num == 6)
  {
    constellationQuote4.innerText = quotes4[1];
    constellationReflection5.innerText = reflections5[1];
  }
  else if(num == 5)
  {
    constellationQuote3.innerText = quotes3[2];
    constellationReflection4.innerText = reflections4[2];
    constellationQuote4.innerText = quotes4[0];
    constellationReflection5.innerText = reflections5[0];
  }
  else if(num == 4)
  {
    constellationQuote3.innerText = quotes3[1];
    constellationReflection4.innerText = reflections4[1];
  }
  else if (num == 2)
  {
    constellationQuote3.innerText = quotes3[0];
    constellationReflection4.innerText = reflections4[0];
  }

  lightbox.style.display = "flex";
  lightbox.style.flexDirection = "column"
  lightbox.style.justifyContent = "flex-start"
  lightbox.scrollTop = 0;

  lightboxImage.animate(
    [
        {opacity: `0`}, 
        {opacity: `100`}
    ], 
    { 
        duration: 1000, 
        easing: "ease-in",
        iterations: 1 
    }
  );

  scrollText.animate(
    [
        {opacity: `0`}, 
        {opacity: `10`}
    ], 
    { 
        duration: 1000, 
        iterations: 1 
    }
  );
}

lightbox.onscroll = () => {
  let pos = lightbox.scrollTop;
  scrollText.style.top =  `-${pos/2}px`;
}

function closeLightbox() {
  lightboxImage.src = "";
  lightbox.style.display = "none";
  lightbox.style.flexDirection = "none"
  lightbox.style.justifyContent = "none"
  constellationReflection.innerText = "";
  constellationReflection2.innerText = "";
  constellationReflection3.innerText = "";
  constellationReflection4.innerText = "";
  constellationReflection5.innerText = "";
  constellationQuote.innerText = "";
  constellationQuote2.innerText = "";
  constellationQuote3.innerText = "";
  constellationQuote4.innerText = "";
}

function handleImageClick(e) {
  if(dragging)
  {
    return;
  }
  else
  {
    const imageSrc = e.target.src;
    const imageNum = e.target.id;
    lightboxOpened = true;
    setTimeout(() => {
      openLightbox(imageSrc, imageNum);
    }, 1000)
    images[e.target.id - 1].animate(
      [
          {opacity: `100`}, 
          {opacity: `0`},
      ], 
      { 
          duration: 1000, 
          easing: "ease-in",
          iterations: 1 
      }
    );
    track.animate(
      [
          {opacity: `100`}, 
          {opacity: `0`},
      ], 
      { 
          duration: 1000, 
          easing: "ease-in",
          iterations: 1 
      }
    );
    blob.animate(
      [
        {opacity: `100`}, 
        {opacity: `0`},
      ], 
      { 
          duration: 1000, 
          easing: "ease-in",
          iterations: 1 
      }
    )
    overall.animate(
      [
        {opacity: `100`}, 
        {opacity: `0`},
      ], 
      { 
          duration: 1000, 
          easing: "ease-in",
          iterations: 1 
      }
    )
  }
}

function handleOutsideClick(e) {
  if (e.target === lightbox) {
    lightboxOpened = false;
    lightboxImage.animate(
      [
          {opacity: `100`}, 
          {opacity: `0`}
      ], 
      { 
          duration: 1000, 
          easing: "ease-in",
          iterations: 1 
      }
    );
    lightbox.animate(
      [
        {opacity: `100`}, 
        {opacity: `0`}
      ], 
      { 
        duration: 1000, 
        easing: "ease-in",
        iterations: 1 
      }
    )
    setTimeout(() => {
      closeLightbox();
    }, 1000)
  }
}

images.forEach((image) => {
  image.addEventListener("mouseup", handleImageClick);
});

lightbox.addEventListener("click", handleOutsideClick);

function Stars(numberOfStars, divID){
  var chosenDiv = document.getElementById(divID)  
  chosenDiv.style.display = "none";
  chosenDiv.innerHTML = "";
  function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  var text = "";
  var i; 
  for (i = 0; i < numberOfStars; i++) {
      bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
      smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
      tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
      starTwinkleStage = randomFrom("9","13");
      var top = randomFrom(bigRange); 
      var right = randomFrom(bigRange); 
      var width = randomFrom(smallRange);
      text += "<style></style>";
      text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
      text += "animation: twinkling " + starTwinkleStage + "s infinite";
      text += ";box-shadow: 0px 0px 3vw rgba(255, 255, 255, 0.2);'></div>";
      chosenDiv.innerHTML = text;
      chosenDiv.style.display = "block";
  }
}
// Function(How many stars, id that you want populating)
Stars(40, "overall");


/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.onmouseup = e => handleOnUp(e);

window.onmousemove = e => handleOnMove(e);

