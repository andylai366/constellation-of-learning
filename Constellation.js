const body = document.getElementById("overall");

const track = document.getElementById("image-track");
let lightboxOpened = false;
let dragging = false;

const handleOnDown = e => {
  dragging = false;
  track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
  console.log(dragging)
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
          nextPercentage = Math.round(Math.max(Math.min(nextPercentageUnconstrained, 0), -100) * 1000000) / 1000000;
    
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

const constellationTitle = document.getElementById("constellation-title")
const constellationReflection = document.getElementById("constellation-reflection")
const constellationReflection2 = document.getElementById("constellation-reflection2")
const constellationReflection3 = document.getElementById("constellation-reflection3")
const constellationReflection4 = document.getElementById("constellation-reflection4")
const constellationReflection5 = document.getElementById("constellation-reflection5")

const constellationReflectionExtra = document.getElementById("constellation-reflectionextra")


const constellationQuote = document.getElementById("constellation-quote")
const constellationQuote2 = document.getElementById("constellation-quote2")
const constellationQuote3 = document.getElementById("constellation-quote3")
const constellationQuote4 = document.getElementById("constellation-quote4")

const constellationQuoteExtra = document.getElementById("constellation-quoteextra")

let scrollText = document.querySelector(".scroll-text");




const reflections = [
    `Throughout this novel, one recurring idea stood out to me: the trauma and treatment which the characters face. In particular, many of the Indigenous characters within The Marrow Thieves experience trauma to different extents. Fundamentally, they all face trauma and negative treatment from the fact that they are Indigenous peoples which carry the ability to dream. They are consistently hunted for their lives which contributes to the trauma they face. Within this broad description of the trauma they face, there is poor mental and physical treatment which includes being captured, being subject to emotional pain, betrayal, and even the loss of family members. Reading through these events challenged my thinking as it pushed me to understand the truth behind the Indigenous peoples. Furthermore, it also prompted me to reflect on how lucky I am in the modern day. I do not need to worry about being threatened and having the thoughts of trauma from situations such as being hunted. Lastly, this text connected to the course because it reveals the mistreatment and marginalization Indigenous people face which is what this course is about. The text and course strives for truth and reconciliation for a better future
    
    One example of the trauma and negative treatment the characters face would be French’s loss of Mitch and RiRi. These situations which French experiences first hand builds mental trauma within his mind which ultimately leaves him to suffer emotionally. 

    French experiences Mitch’s capture and states that, 
    `,

    `With Hunting By Stars being a sequel to Marrow Thieves, this book was appealing to me because it reinforces the unique and important ideas based on the prequel. In particular, the idea of the importance of family and community strongly resonates with me after reading this book. The connections and relationships which Dimaline creates between two characters completely changed the way I think about what it means to belong to a family or community. In the past, one of the biggest misconceptions when understanding family and communities is that they were simply a group of people that are related or live in the same area. However, the characters in the story, especially French and Rose, prove that these relationships are far more profound and complex. 
    
    For instance, Rose, who is one of the more independent characters further proves that family and community comes first in life because of how valuable it is. 
    
    She expresses that, 
    `,

    `After reading and listening to the story behind “I Lost My Talk” and the poem by Rita Joe, I found that it was a very meaningful and powerful poem relating to the pure uniqueness and individuality each person has. In particular, Rita Joe utilizes very few words in her poem to convey that although there are some similarities between people, the majority of people are different through their cultural identity and voice. These differences within people encourages inclusion and allows people to feel valued and embrace one’s own beliefs or cultures for who they are. Unfortunately, there are also times when people take or ignore the differences from others due to complete ignorance. Therefore, Rita also educates that we need to be more inclusive, learn, and reclaim the identity or voice from others, otherwise people become more split or hostile. This poem challenged my thinking because I originally thought being unique and that individuality means to just be someone who stood out. Instead, individuality is more about being true to oneself and accepting the beliefs and cultures that make up themselves. 
    
    As an example, Rita once had individuality, but the residential schools took this away resulting in becoming systematized. 
    
    She states that, 
    `,

    `Following reading “Totem” by Thomas King, I immediately thought of numerous ways which the text could be interpreted. At first, the text appears to only have one significant theme or meaning; however, upon further analysis, there are different perspectives you may take to extrapolate a variety of interpretations when reading this text. For instance, the most obvious perspective I saw in this text was from the colonizer point of view establishing the discrimination, oppression, and hate towards the Indigenous peoples. The second perspective which I saw in this story was from the Indigenous peoples resisting the changes and morally incorrect actions. With the many symbols and this story being an allegory for many meanings, this text helped me to learn that there are numerous perspectives that one can use to interpret a story. Each person may view this story completely differently from me which makes this text unique.
    
    For example, the first perspective or meaning which I extrapolated from the text was the colonization point of view. In the story, the characters collectively agree on the decision to cut the totem pole, a symbol for the Indigenous peoples, despite the fact that they recognize it may seem significant. 
    
    During the story, it mentions that, 
    `,

    `In the interview between Fiorentino's class and Shane Hawk, he tells his own story of how he came to become a successful English teacher and author. One recurring theme I found was that he talks a lot about the motivation and resilience in his life. He explained certain events such as surviving COVID, a lack of book audience, and failing college in order to portray that he overcame incredibly difficult life challenges. I believe that Shane Hawk has developed the emotional strength and the ability to persevere through many obstacles because that is how he got to the point of talking to us today. His way to bounce back from setbacks is inspirational considering that he is sharing his experiences which may help me in the future. His overall message through his speech also deeply connects to the course texts because the other books such as The Marrow Thieves or Hunting By Stars exemplify strong resilience and motivation by certain characters. 
    
    Shane Hawk’s resilience in his life is demonstrated through the many events he recalls. In particular, he did not have it easy after graduating high school. During the beginning of college, 
    
    Shane Hawk states that,
    `,

    `This TED talk from Rebecca Thomas provides a very interesting and unique perspective on the significance of language. For me, this TED talk was not as exciting compared to some of the other ones I watched, but nonetheless, I found the video quite important because it highlights how language is interwoven into the majority of aspects of life. In particular, certain interactions, community, and culture, are all profoundly altered by language. This particular view on language from Thomas challenged my thinking because I never thought about how big of a role language may play. As a person who does not speak too many languages, I cannot comment on how the fundamental understanding of things may change when you speak a different language, so this topic made me consider how others or myself may have experienced this. Also, I noticed that this TED talk is closely connected to other text and ideas in the course because it touches on the concept of decolonization through emphasizing the importance of learning other languages. All in all, language is not only a means of communication, but it completely shapes the worldview for individuals including myself.
    
    In particular, language, especially Indigenous languages, can shape one’s worldview and identity because languages for us humans provides us with a foundation to think upon. Different languages have varying grammatical structures and nuances which influence the way we perceive the world. 
    
    As Rebecca explains in one example,
    `
];

const reflections2 = [
  `These horrific situations are not easy for anyone to get through and overcome mentally, let alone French when he is developing to become a man. These two losses that French has experienced first hand changes his actions and emotions dramatically. For example, he killed the kidnapper while the rest of the family said he should not have. This reveals the internal struggle which French faces with his mind. Even after a long time period, French commonly recalls these events again because they become extremely detrimental to mental health. Overall, these experiences deeply impact French emotionally, and portrays that traumatic events are devastating for long periods of time to a person.
    
  In addition, the coming-to stories of multiple characters reveal the poor physical treatment that results from them being themselves: an Indigenous individual. 
  
  In Wab’s coming to story, she recalls that, 
  `,

  `She utilizes an analogy relating to the way a symphony plays as the reason behind why she is trying to save French. This analogy made me understand that in their relationship with their family and community, everyone is linked closely together because they all provide a positive impact and care for one another. Despite the size, structure, and conflicts, each and every person supports one another just like how the instruments in a symphony would. Through Dimaline’s analogy, it has truly opened my thinking to the real significance of family and community. It is the fundamental structure which supports and drives a person’s life.
  
  Furthermore, at one point when French has put in a significant amount of effort into escaping the schools, he thinks, 
  `,

  `The residential schools took away her culture, traditions, and her thoughts or talk which made her no longer unique. This is why she writes that she states that she is “like” the people who run the residential schools: ordinary and common. These descriptive lines with imagery highlight for me the pure importance of being different. If each and every person in the world was the same, we would all be akin to robots: uncollaborative and emotionless. This is why I find the residential schools completely ridiculous and shocking because “normalizing” the Indigenous peoples to speak and act modern is ignorant and absurd. Also, the poem made me think about how Rita Joe was unable to embrace and nurture her voice or thoughts due to the conformity she must adhere to. She references herself to a “scrambled ballad” as a metaphor because she no longer can express her talk and cultural thoughts, proving the significance of individuality and how it means to be true to oneself.   
    
  Moreover, Rita also mentions that, 
  `,

  `The employees of the Museum cut off the totem pole because it was disturbing them through a gurgling or grunting noise. This is a hidden allegory and symbol towards the way the Canadian government treated the Indigenous peoples. The Canadian government tortured and killed the Indigenous peoples by putting them in residential schools, similar to French in the institutions in Hunting By Stars. This represents the totem pole being cut down by Jimmy and then suggested by Larue that it won’t grow back using pruning paste. Also, the Canadian government relocated the Indigenous peoples onto designated areas or reserves which did not bother the rest of the colonizing people. This represents the meaning of the allegory that stems from how the totem pole was cut and moved away to the basement. This colonization perspective reinforces just one of the many other perspectives one may view the text with, and it displays the strong allegory or symbols this story contains.
    
  Additionally, the second view that was immediately apparent was the Indigenous peoples resistance to colonization. The totem pole which represented the Indigenous peoples continuously grew back and fought against the employees of the museum.
  `,

  `He also mentions that he got kicked out of two colleges in total. Despite all of this, Shane Hawk bounces back as he returns to college a few years later to get a degree for teaching.

  Following this, he decides to start writing books; however, he says that
  `,

  `It is apparent through the German language that they feel the necessity to add a destination because they do not have the ability to be only action-oriented. The values or the ways in which the German language is organized is completely different from English. This is a shocking concept to me as from what I know, we do not think in a language. We communicate in a way we understand for ourselves, but somehow languages change the way we view as soon as we express our thoughts. 
  
  As Rebecca states, `
  


]

const reflections3 = [
  `Wab was running and delivering letters for people, a valuable service at the time. However, a group sexually assaulted Wab because they were trying to start a new business. With Wab being an Indigenous person, she faces the trauma and negative treatment of being hunted for little reason. This similarly builds trauma which Wab holds for most likely the rest of her life which can affect her actions physically and mentally. Furthermore, Miig experiences trauma as well because he loses Isaac to the residential schools. Miig experiences emotional trauma as his loved one is lost, but he also experiences a fear from the trauma that it may happen to him. Miig, throughout the whole book misses Issaac which demonstrates the emotional scar he carries for being Indigenous. Overall, these situations made me reflect that trauma can wreck someone physically and mentally, and impact one’s psychological thinking for a long time. It also connected to the course as it compelled myself to recognize a variety of different communities, similar to the objective of the course. 

  To conclude, The Marrow Thieves highlights the profound effects of trauma the characters face, representing the negative bias or target towards the Indigenous peoples and communities.
  `,

  `French understands the true value and meaning of being back together with his family. Even though he has done things which go against his family’s morals, he did them in order to get back to them. It is later in the story that Miig knows that French had to betray them in order to come back, but he understands the reason why. French’s connection and relationship to his family and the Indigenous community is remarkably strong. He has a sense of belonging, support, and security by trying to get back to his family. 
  
  Parts of the book, such as this, challenges me to think as I reflect that family and community ultimately helps each other navigate, bring a sense or purpose, and dependability. Family and community is not just those close to you who help you live, instead it is knowing that you always know somebody who cares and supports you despite any mental or physical challenges. This is a characteristic which is undoubtedly one of the most important in life.
  `,

  `After all that she experienced at the residential schools, Rita takes the initiative to offer those behind the residential schools to learn about her identity. This is an opportunity for her to reclaim her culture and identity to feel valued and included again. She strives for individuality which is about embracing her own beliefs, traditions, and cultures even if they differ from the norms around her. This further challenged my thinking as I am shocked that Rita Joe would be so open to reclaiming her culture and identity after the torture she has sustained. I learned that it is better not to hold onto any grudges as they will only prevent yourself from returning to the unique individual you once are. 
  
  Lastly, this poem closely aligns when Hunting By Stars as Rita Joe is very similar to French. They leave the residential school and now they are fighting to go back to their families, cultures, and traditions. Rita and French want to return to the unique person who was proud of their identity prior to visiting the residential schools. Overall, Rita Joe writes a brilliant poem emphasizing the critical aspect of individuality and the impact it has when one loses it.
  `,

  `This act from the totem alludes and is a symbol for the way the Indigenous peoples resisted and were resilient to the Canadian government’s horrific acts. The Indigenous peoples continuously tried to escape the system and fight for their own freedom instead of being assimilated into the Canadian’s government form of society. Much like the characters in Hunting By Stars, the culture and traditions were very important to the Indigenous peoples, and so any impedance would cause great resistance or resilience to immoral obstacles. 
  
  Overall, in fact, both perspectives helped me to expand my thinking because it demonstrates how certain literary devices such as allegory and symbolism can play a large role in providing much more information to a text. Without recognizing these devices, the text would be fairly mundane and meaningless. This text also challenged myself to look for different ways to view how another person may view an important story. It is important to remind myself that a broad and open mindset can help identify new things to analyze. Thus, with the many symbols and allegory meanings, this lays out the numerous lenses which a person may look through to extrapolate the significance of the story.
  `,

  `Barely any customers or people, even including his family, read his book. He puts a significant amount of time in each text, soo going through this may be heartbreaking. Regardless, he works hard to reach out to bigger authors and ultimately gets his book further widely spread. Both of the situations exemplify the resilience he has since he maintains a positive outlook and takes in the setbacks to adapt and ultimately succeed.
  
  As he puts it,
  `,

  `I find that this concept of language shaping our worldviews to be very powerful as it reveals languages are not only something that you use to get your points across.
    
  Additionally, Rebecca brings out another very important concept of seeing with two eyes. She states that it is about embracing multiple perspectives and knowledge from more than one side. 
  
  For example, she states that, `



]

const reflections4 = [
  `I believe it is amazing he is currently an English teacher and has sold many books around the world starting from the challenges he faced. My thinking is challenged as I would like to have the work ethic and resilience he has, so I need to also identify how I may do this in the future. Overall, Shane Hawk’s perseverance and resilience is amazing because there are few people in the world who would not give up like him.
    
  On top of resilience, his interview or speech highlights motivation. He explains his driving force to continue writing and doing what he loves. During the peak of COVID, Shane Hawk contracted the disease and he was going to pass away. 
  
  He recalls that he was`,

  `This concept is meant to encourage individuals to have an open mind in order to move beyond binary thinking, and instead engage in collaboration and learning in other languages. This actually made me reflect that as primarily an English speaker, I may be limited on understanding the worldviews of others. As I can only speak some Chinese, I am primarily embracing only the English perspective from day to day life. Two-eyed seeing is a reminder of the necessity to connect with other languages and cultures, especially Indigenous in order to expand our knowledge and perspectives.
  
  All in all, language plays a significant role in shaping the way we think. Rebecca Thomas brings up that we should strive to see with two eyes in order to communicate and connect with more cultures and traditions. To take the time to understand the perspectives through more than one language, we can build relationships to expand the way we view the world`
]

const reflections5 = [
  `Although it may seem cliche, I think that Shane Hawk has a very strong point. For his life, he just understood that life moves on whether you do something or not. Therefore, Shane Hawk started taking positive risks in his life because you don’t know how long your life may be. He reached out to bigger authors, starting talking with them, and ultimately it paid off. Through himself almost passing away due to COVID, it brought him the clarity to view that life is too valuable to be sitting on a couch. This is the motivation which brought Shane Hawk to where he is today: writing books to students like us, and teaching kids to prepare them for the future. This genuinely challenges my thinking because I used to believe that motivation is solely dependent on external factors such as awards and recognition. Shane Hawk has instead opened my mind to realize that it is instead driven by personal internal events, values, thoughts, and passion. His speech has shifted my thinking to strive for motivation that stems from myself instead of other things or people.
  
  Reflection on the concepts or resilience and motivation from Shane Hawk has been brilliant. He challenged my thinking, expanded the way I approach challenges, and overall cultivated inspiration from his success.`

]

const reflectionExtra = [
  `Following being cut down numerous times, the totem pole became an even greater obstacle against the museum. 
  `,

]

const quotes = [
  `“Yelling while they dragged [Mitch] down the ladder and onto the grass…Then the door slid shut. And an engine clicked on and whirred to life .And I was alone” (Dimaline 3). French also experiences RiRi’s death and reminds himself saying, “We’d run and mourned for hours…crying out when the image of RiRi came to mind.” (Dimaline 118).`,

  `“‘They do whatever it takes to be back together, no matter how impossible that might be for tiny notes stranded in an unknown body’ ” (Dimaline 70).`,

  `“You snatched it away:/I speak like you/I think like you/I create like you/The scrambled ballad, about my word” (Joe 5-9).`,

  `“‘We could get the chainsaw and cut it off close to the floor,’...‘Do what you have to do, but do it quietly’” (King 2), and “‘The trick I think,’ said Larue, ‘is to cut the pole down and then cover the stump with pruning paste. That way it won’t grow back’ (King 3).`,

  `“I just kept getting bad grades, I kept, you know, not going. Over time, I just stopped going to college” (Hawk 0:40).`,

  `“[an] English speaker said this is a woman walking whereas German speaker said this is a woman walking to her car” (Thomas 1:14-1:20).`

]

const quotes2 = [
  `“He moved fast, too quickly for me to do anything but close my eyes again. I didn’t feel the slice. Just the wet on my cheek, and neck, and chest. Then  he  was  pulling off  my  pants. Then I stopped feeling all together” (Dimaline 72).`,

  `“And just before I fell asleep, I wondered if my family would have any doubts about me. Would they think I was a traitor? What about the Agent? Would they believe they were just a fellow runner?” (Dimaline 228).`,

  `“So gently I offer my hand and ask,/Let me find my talk/So I can teach you about me” (Joe 13-15).`,

  `The totem pole “started shouting, loud, explosive shouts that echoed through the collection of sea scenes and made the paintings on the wall tremble ever so slightly” (King 3).`,

  `“I didn’t think anyone was going to read it at all” (Hawk 4:05).`,

  `“the language you speak fundamentally shapes your worldview and everything that goes along with it” (Thomas 0:13-0:20). `

]

const quotes3 = [
  `“I think you have to fail to get somewhere…shows that you are trying” (Hawk 1:15).`,

  `“you see Nova Scotia, Nouvelle-Écosse, Canada we see Mi'kma'ki, traditional territory, Turtle island. It’s not either or, it’s both at the same time” (Thomas 8:58-9:12).`
]

const quotes4 = [
  `“on oxygen machines” (Hawk 11:10) and he also states that “Life is short” (Hawk 11:53).`

]


const quoteExtra = [
  `The pole “was singing. It started with a high, wailing, nasal sound and then fell back” (King 3).`,
]

// QUOTES AND REFLETIONS NEED TO BE UPDATED

function openLightbox(imageSrc, num) {
  lightboxImage.src = imageSrc;
  constellationTitle.innerText = "Constellation Reflection " + num; 
  constellationReflection.innerText = reflections[num - 1];
  constellationReflection2.innerText = reflections2[num - 1];
  constellationReflection3.innerText = reflections3[num - 1];
  

  constellationQuote.innerText = quotes[num - 1];
  constellationQuote2.innerText = quotes2[num - 1];

  if(num == 6)
  {
    constellationQuote3.innerText = quotes3[1];
    constellationReflection4.innerText = reflections4[1];
  }

  else if(num == 5)
  {
    constellationReflection4.innerText = reflections4[0];
    constellationReflection5.innerText = reflections5[0];
    constellationQuote3.innerText = quotes3[0];
    constellationQuote4.innerText = quotes4[0];
  }
  

  else if(num == 4)
  {
    constellationReflectionExtra.innerText = reflectionExtra[0];
    constellationQuoteExtra.innerText = quoteExtra[0];
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
        duration: 10000, 
        iterations: 1 
    }
  );
}

lightbox.onscroll = () => {
  let pos = lightbox.scrollTop;
  console.log(pos);
  scrollText.style.top =  `-${pos/2}px`;
}

function closeLightbox() {
  lightboxImage.src = "";
  lightbox.style.display = "none";
  lightbox.style.flexDirection = "none"
  lightbox.style.justifyContent = "none"
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

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);