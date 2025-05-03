import React from 'react'; 
import { useParams } from "react-router-dom";
import FloatingFlowers from "./FloatingFlowers";
import BrideMusicPlayer from "./BrideMusicPlayer"; // 🎶 New Component
import "../assets/css/BrideDetails.css";


import MainImg1 from "../assets/images/ReteshWedding.jpg";
import MainImg2 from "../assets/images/NewImg4.jpg";
import MainImg3 from "../assets/images/Preeneti.jpg";
import MainImg4 from "../assets/images/NewImg2.jpg";
import MainImg5 from "../assets/images/NewImg3.jpg";
import MainImg6 from "../assets/images/SidKiara.jpg";
import MainImg7 from "../assets/images/AliaRanbirMarriage.jpg";
import MainImg8 from '../assets/images/Katrina Kaif Vicky Kaushal.jpg'


import Music1 from "../assets/music/pal pal soch mein aana na   tujhe meri kasam (1).mp3";
import Music2 from "../assets/music/Kyaa Dil Ne Kahaa Title Song (Lyrical Video)  Tusshar Kapoor  Esha  Udit Narayan  Alka Yagnik.mp3";
import Music3 from "../assets/music/Meri Tarah Tum Bhi  Alka Yagnik  Babul Supriyo  Kya Yehi Pyaar Hai (2002).mp3";
import Music4 from "../assets/music/Lal Chunariya (Full Song) Film - God Tussi Great Ho.mp3";
import Music5 from "../assets/music/Jogi - Lyrical  Shaadi Mein Zaroor Aana  Rajkummar Rao, Kriti Kharbanda  Arko ft Aakanksha Sharma.mp3";
import Music6 from "../assets/music/Moh Moh Ke Dhaage  Full Song  Dum Laga Ke Haisha  Ayushmann, Bhumi  Papon, Monali  Anu Malik.mp3";
import Music7 from "../assets/music/Suno Na Sangemarmar Full Song Youngistaan  Arijit Singh  Jackky Bhagnani, Neha Sharma.mp3";
import Music8 from "../assets/music/Kesariya - Brahmāstra  Ranbir Kapoor  Alia Bhatt  Pritam  Arijit Singh  Amitabh Bhattacharya4K.mp3";




const brides = [
    {
      id: 1,
    //   name: "Traditional Bride",
      image: MainImg1,
    //   details: "She shines like a jewel, adorned in exquisite gold and diamond jewelry, reflecting elegance and prosperity.",
    // videoUrl: "https://www.youtube.com/embed/nxH-x_OjGvQ",

      music: Music1,
      lyrics: `Pal Pal Soch Mein Aa Na Na

Huclhul Dil Mein Machana Na

Dekho Meri Neende Udana Na

Dhere Dhere Saapno Mein Aa Na Na

Tujhe Meri Kasam

Tujhe Meri Kasam

Pal Pal Soch Mein Aa Na Na

Huclhul Dil Mein Machana Na

Dekho Meri Neende Udana Na

Dhere Dhere Saapno Mein Aa Na Na

Tujhe Meri Kasam

Tujhe Meri Kasam

Woh Hua Jo Pehle Kabhi Na Hua

Kahin Bhi Dil Na Lage

Yeh Tune Aisa Kya Kiya

Har Chehre Mein Ab Tu Hi Tu

Aati Nazar Hai

Yu Mast Hawa Teri Khushboo

Laati Idhar Hai

Shesha Mein Mere Hai Saaya Tera

Itna Na Satao Sanam

Pal Pal Soch Mein Aa Na Na

Huclhul Dil Mein Machana Na

Dekho Meri Neende Udana Na

Dhere Dhere Saapno Mein Aa Na Na

Tujhe Meri Kasam

Tujhe Meri Kasam

Aahatein Haseen Ke Saath Aati Hai

Mujhe To Lagta Hai Yeh Ke Jaise Tu Aayi Hai

Teri Tasveeron Se Bhi Baatein Hone Lagi Hai

Kab Suraj Nikla Aur Kab Chaand Khabar Bhi Nahin Hai

Hone Hi Lage Shayad Tere Hum Haal Tera Hai Kya O Sanam

Pal Pal Soch Mein Aa Na Na

Huclhul Dil Mein Machana Na

Dekho Meri Neende Udana Na

Dhere Dhere Saapno Mein Aa Na Na

Tujhe Meri Kasam

Tujhe Meri Kasam`
    },
    {
      id: 2,
    //   name: "Modern Diva",
      image: MainImg2,
    //   details: "She steals the spotlight with her beauty, confidence, and modern bridal fashion.",
    //   videoUrl: "https://www.youtube.com/embed/XCvRgM8fziw",
      music: Music2,
      lyrics: `La la la la la la la,
la la la la la la..
La la la la la la la,
la la la la la la..

Kya dil ne kaha, mm mm mm mm hm

Kya dil ne kaha, kya tumne suna

♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡


Palkein jhuki hain saansein ruki hain
Koi hamein pukaare
Anjaani raahein thaame hain baahein
Hum hi nahin hamaare, oh yaara
Kya dil ne kaha, kya tumne suna
Kya dil ne kaha, kya tumne suna..

Milte bichhadte yun chalte chalte
Hum ho gaye tumhaare
Kaisa asar hai hum bekhabar hai
Badle hain yeh sitaarein, oh yaara
Kya dil ne kaha, kya tumne suna

Kya dil ne kaha, kya tumne suna...

♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡


Hm, tanha tanha jeete the,
khud se baatein karte the
Tum sa koi mil jaayega,
dil pe likhte rehte the
Tanha tanha jeete the,
khud se baatein karte the
Tum sa koi mil jaayega,
dil pe likhte rehte the
Dil pe yeh likhte rehte the

Nazrein churaana laage suhaana
Baali umar hai jaana, oh yaara
Kya dil ne kaha, kya tumne suna


Jo dil ne kaha haan maine suna..

♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡


Oh, main to bhanwra hoon
sorry, kaliyon ki karta chori
Baandhe kyoon preet ki
dori, rehne de thodi doori
Main to bhanwra hoon sorry,
kaliyon ki karta chori
Baandhe kyoon preet ki
dori, rehne de thodi doori

Rehne de thodi si doori

Arre teri to jaane maine hai baandhe
Saaton janam ke dhaage, oh yaara
Kya dil ne kaha, kya tumne suna

Jo dil ne kaha haan maine suna

Palkein jhuki hain saansein ruki hain
Koi hamein pukaare

Anjaani raahein thaame hain baahein
Hum hi nahin hamaare

Oh yaara
Kya dil ne kaha, kya tumne suna

Jo dil ne kaha haan maine suna....`
    },
    {
      id: 3,
    //   name: "Floral Dream",
      image: MainImg5,
    //   details: "Her charm is mesmerizing, with intricate embroidery and floral designs symbolizing romance and grace.",
    //   videoUrl: "https://www.youtube.com/embed/fENiGoK-vi0",
      music: Music3,
      lyrics:
`Meri tarah tum bhee kabhi pyaar kar ke dekho naa
      Hmm, meri tarah tum bhee kabhi pyaar kar ke dekho naa
      Chaahat ka mujse, sanam, iqaraar kar ke dekho naa
      Kithna mazaa hai, kaisa nasha hai
      Kithna mazaa hai, kaisa nasha hai
      Pyaar kar ke dekho naa
      Meri tarah tum bhee kabhi pyaar kar ke dekho naa
      Pyaar dil ka sapnaa hai, pyaar tujh se karnaa hai
      Pyaar ke rango se aaj apanae dil ko rangana hai
      Aaj tak jo kehna tha, aaj tujh se kehna hai
      Dil mein ab cchopa le too, dil mein tere rahana hai
      Dil ne kahaa hai, dil ne sunaa hai
      Dil ne kahaa hai, dil ne sunaa hai
      Pyaar karke dekho naa
      Meri tarah tum bhee kabhi pyaar kar ke dekho naa
      Chaahat ka mujse, sanam, iqaraar kar ke dekho naa
      Is tarah se dekho tum, saadagi bikhar jae
      Aaj meri aankhon se bekhudi bikhar jae
      Chaand jaise mukhde par chaandanee bikhar jae
      Zindagi ke chehare par aashiqui bikhar jae
      Tumko pata hai, kitni vafaa hai
      Tumko pata hai, kitni vafaa hai
      Pyaar karke dekho naa
      Meri tarah tum bhee kabhi pyaar kar ke dekho naa
      Chaahat ka mujse, sanam, iqaraar kar ke dekho naa
      Kithna mazaa hai, kaisa nasha hai
      Kithna mazaa hai, kaisa nasha hai
      Pyaar kar ke dekho naa`




    },
    {
      id: 4,
    //   name: "Fusion Queen",
      image: MainImg8,
    //   details: "She sets new fashion trends by blending traditional and contemporary styles, making a bold statement.",
    //   videoUrl: "https://www.youtube.com/embed/bp2aThDTL2I",
      music: Music4,
      lyrics: `… Chanda chhup jaane laga
Taare sharmane lage
Gori ka mukhda dekho
Ambar jhuk jaane laga
Lamhe ruk jaane lage
Gori ka mukhda dekho
… Laal chunariya odh li maine
Jab se piya ke naam ki
Laal chunariya odh li maine
Jab se piya ke naam ki
… Laal chunariya odh li maine
Jab se piya ke naam ki
Mere piya bhi kehne lage hain
Main na rahi kisi kaam ki
… Laal chunariya odh li tune
Jab se piya ke naam ki
Laal chunariya odh li tune
Jab se piya ke naam ki
… Tere piya bhi kehne lage hain
"Le, yeh jaan tere naam ki"
Laal chunariya odh li maine
Jab se piya ke naam ki
… Mehenga pada re mujhe dil ka lagana
Kar na saki re main toh koi bahana
Bole yeh choodi, bole yeh kangna
"Jaana hai, jaana tujhe piya ji ke angna"
… Kisi ko padi hai ab, mere saajan
Chaahat ke anjaam ki
… Tere piya bhi kehne lage hain
"Le, yeh jaan tere naam ki"
Laal chunariya odh li maine
Jab se piya ke naam ki
… Gori ke haathon rachi mehendi hai jaari
Jachti hai kaise, dekho, dulhan humari
Chanda baaraati, taare baaraati
Hum-tum bane hain, dekho, janmon ke saathi
… Rang-birangi qismat hai ab
Meri subah-o-shaam ki
… Mere piya bhi kehne lage hain
Main na rahi kisi kaam ki
Laal chunariya odh li tune
Jab se piya ke naam ki`
    },
    {
      id: 5,
    //   name: "Royal Sparkle",
      image: MainImg7,
    //   details: "She dazzles in her elegance, often adorned with Swarovski embellishments and royal lehengas.",
    //   videoUrl: "https://www.youtube.com/embed/JdjFI9ASbBg",
      music: Music5,
      lyrics:  
      `Main ta tere naal hi rehna ji
      Har gham sang tere sehna ji
      
      Main ta tere naal hi rehna ji
      Har gham sang tere sehna ji
      Jo jag se kaha na jaaye woh
      Mujhko bas tujhse kehna ji…
      
      
      Sohna sohna itna bhi Kaise tu sohna...
      Sohna sohna itna bhi Kaise tu sohna...
      Tere ishq mein jogi
      hona Mainu jogi hona...
      Sohna sohna itna bhi Kaise tu sohna...
      Tere ishq mein jogi
      hona Mainu jogi hona…
      
      Mainu jogi hona (3x)
      📤_Uploaded_by_sahin_📤
      🎼_Muzix_🎼
      
      
      Ho… ishq ka rang safaid piya
      Na chhal na kapad na bhed piya
      Sau rang mile tu ikk warga
      Aatish hoya ret piya, ret piya
      🍁🎶_🎼_🎶🍁
      
      Jis jang mein tera ho rutba
      Uss jang ka main toh
      Junaid piya, junaid piya
      
      Sohna sohna itna bhi Kaise tu sohna
      Tere ishq mein jogi hona Mainu jogi hona
      
      
      Main laakh sambhal ke jaani
      Tu nadiya aur main paani
      Ikk tujhme hi behne ka raasta
      Sau baar samajh ke maani
      Mera qissa teri kahaani
      Jo jud jaaye toh mukammal vaasta..haye!
      Phir se mujhe, ikk dafa
      Hai bas tujhe, dekhna…
      Sohna sohna itna bhi Kaise tu sohna
      Tere ishq mein jogi hona Mainu jogi hona
      Mainu jogi hona (x4)
      
      
      Ho… main ta tere naal hi rehna ji
      Har gham sang tere sehna ji
      Jo jag se kaha na jaaye woh
      Mujhko bas tujhse kehna ji
      Jo jag se kaha na jaaye
      Bas tujhse kehna ji…`
    },
    {
      id: 6,
    //   name: "Queenly Saree Bride",
      image: MainImg6,
    //   details: "She carries herself like a queen, wearing royal silk sarees and heirloom jewelry.",
    //   videoUrl: "https://www.youtube.com/embed/R35thns4IAw",
      music: Music6,
      lyrics: `Moh moh
Moh moh ke dhaage
Ye moh-moh ke dhaage teri ungliyon se ja uljhe
Ye moh-moh ke dhaage teri ungliyon se ja uljhe
Koyi toh-toh naa laage kis tarah girah ye sulajhe
Hai rome-rome ik taaraa
Hai rome-rome ik taaraa jo baadlon mein se guzare
Ye moh-moh ke dhaage teri ungliyon se ja uljhe
Koyi toh-toh naa laage kis tarah girah ye sulajhe
Too hoga zaraa paagal tune mujko hai chunaa
Too hoga zaraa paagal tune mujko hai chunaa
Kaise tune ankaha tune ankaha saba sunaa
Too hoga zaraa paagal tune mujko hai chunaa
Too din sa hai main raat
Aa naa donon mil jaaen shaamon kee tarah
Ye moh-moh ke dhaage teri ungliyon se ja uljhe
Koyi toh-toh naa laage kis tarah girah ye sulajhe
Ke aisa beparwaah man pehle to naa tha
Ke aisa beparwaah man pehle to naa tha
Chitthiyon ko jaise mil gaya jaise ik naya sa pata
Ke aisa beparwaah man pehle to naa tha
Khaali raahen ham aankh munde jaaen
Pahuchen kaheen to bewajah
Ye moh-moh ke dhaage teri ungliyon se ja uljhe
Koyi toh-toh naa laage kis tarah girah ye sulajhe`
    },
    {
      id: 7,
    //   name: "Classic Beauty",
      image: MainImg3,
    //   details: "Grace and elegance define her, as she opts for classic designs with timeless appeal.",
    //   videoUrl: "https://www.youtube.com/embed/p-gdhnGmhZU",
      music: Music7,
      lyrics: ` Suno na sangemarmar ki yeh minaare

Kuch bhi nahi hai aage tumhaare

Aaj se dil pe mere raaj tumhaara

Taj tumhara

Suno na sangemarmar ki yeh minaare

Kuch bhi nahi hai aage tumhaare

Aaj se dil pe mere raaj tumhaara

Taj tumhara

Suno na sangmarmar ki yeh minaare

Bin tere maddham maddham
bhi chal rahi thi dhadkan

Jab se mile tum humein

Aanchal se tere bandhe

Dil ud raha hai

Suno na aasmaano ke yeh sitaare

Kuch bhi nahi hai aage tumhaare

Yeh dekho sapne mere

Neendon se hoke tere

Raaton se kehte hain lo

Hum toh savere hai wo

Sach gaye jo

Suno na do jahaano ke yeh nazaare

Kuch bhi nahi hai aage tumhaare

Aaj se dil pe mere raaj tumhara

Taj tumhara..

Suno na sangemarmar ki yeh minaare
`
    },
    {
      id: 8,
    //   name: "Maharashtrian Bride",
      image: MainImg4,
    //   details: "She wears a traditional Nauvari saree, a Nath (nose ring), and green bangles, symbolizing prosperity and marital bliss.",
    //   videoUrl: "https://www.youtube.com/embed/e14qfHSiXik",
      music: Music8,
      lyrics: `Mujhko itna bataaye koyi
Kaise tujh se dil na lagaaye koyi
Rabba ne tujhko banaane mein
Kar di hain husn ki khali tijoriyaan
Kaajal ki siyaahi se likhi
Hain tune jaane kitno ki love storiyan
Kesariya tera ishq hai, piya
Rang jaaun jo main haath lagaaun
Din beete saara teri fikr mein
Rain saari teri khair manaaun
Kesariya tera ishq hai, piya
Rang jaaun jo main haath lagaaun
Din beete saara teri fikr mein
Rain saari teri khair manaaun
Patjhad ke mausam mein bhi rangi chanaaron jaisi
Jhanke sannaaton mein tu veena ke taaron jaisi
Mmm, sadiyon se bhi lambi ye mann ki amaavasein hain
Aur tu phuljhadiyon waale tyohaaron jaisi
Chanda bhi deewaana hai tera
Jalti hain tujhse saari chakoriyaan
Kaajal ki siyaahi se likhi
Hain tune jaane kitnon ki love storiyan
Kesariya tera ishq hai, piya
Rang jaaun jo main haath lagaaun
Din beete saara teri fikr mein
Rain saari teri khair manaaun
Kesariya tera ishq hai, piya
Rang jaaun jo main haath lagaaun
Din beete saara teri fikr mein
Rain saari teri khair manaaun
Kesariya tera ishq hai, piya, ishq hai, piya
Kesariya tera ishq hai, piya, ishq hai, piya
Piya, ishq hai, piya, ishq hai, piya
Kesariya tera ishq hai, piya
Rang jaaun jo main haath lagaaun`
    }
  ];
  

  const BrideDetails = () => {
    const { id } = useParams();
    const brideId = parseInt(id);
    const bride = brides.find((b) => b.id === brideId);
  
    if (!bride) {
      return <div>No bride found!</div>;
    }

  
  return (
    <div className="bride-content">
      {bride.music && <BrideMusicPlayer music={bride.music} />}
      <img src={bride.image} alt={bride.name} className="bride-image" />
      
       <div className="bride-text">
        {/* <h2>Bride Name: {bride?.name || "Not Available"}</h2>
        <p><strong>Details:</strong> {bride?.details || "No details provided"}</p> */}

        {/* Lyrics with animation */}
        {bride?.lyrics && (
          <div className="bride-lyrics">
            <h3>🎵 Lyrics:</h3>
            <div className="lyrics-container">
              {bride.lyrics.split(" ").map((word, index) => (
                <span
                  key={index}
                  className="lyric-word"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
  
      {/* YouTube Video Embed */}
      <div className="bride-video">
        <iframe
          width="560"
          height="315"
          src={bride.videoUrl}
          title={bride.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
  
      <FloatingFlowers />
      {/* <BridalQuote /> */}
    </div>
  );
}  

export default BrideDetails





