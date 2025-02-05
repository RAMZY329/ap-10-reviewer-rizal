const questions = [
    
    {
        question: "Alin sa sumusunod na pahayag ang nagpapaliwanag tungkol sa sex?",
        options: [
          { text: "A. Ang biyolohikal at pisyolohikal na katangian na nagtatakda ng pagkakaiba sa babae at lalaki.", image: null },
          { text: "B. Mga katangian na nagtatakda ng lalaki, babae, bakla, lesbian, at transgender. ", image: null },
          { text: "C. Ang naglalarawan sa katayuan ng babae at lalaki sa lipunang kinabibilangan", image: null },
          { text: "D. Mga gampanin at kilos na tinatakda ng lipunan.", image: null }
        ],
        answer: 0
      },
      {
        question: "Kinikilala si Zandro na siya ay may lubusang paghanga at pisikal na atraksyon sa kaniyang kaibigang babae na si Grace. Anong oryentasyong sekswal ang ipinapaliwanag dito?",
        options: [
          { text: "A. Bisexual", image: null },
          { text: "B. Homosexual", image: null },
          { text: "C. Heterosexual", image: null },
          { text: "D. Asexual", image: null }
        ],
        answer: 2
      },
      {
        question: "Anong sitwasyon ang naglalahad nang wastong pakahulugan sa konsepto ng gender?",
        options: [
          { text: "A. Si Precious ay nakaranas na ng buwanang regla.", image: null },
          { text: "B. Nagbabago ang boses ni Kobe dahil siya ay nagbibinata na.", image: null },
          { text: "C. Si Toby ay itinuturing na mahusay at magiting na pulis ng kanilang bayan.", image: null },
          { text: "D. Nagkaroon ng pormadong pangangatawan si Marco sa edad na 16.", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang pagkakaiba ng gender identity at gender role?",
        options: [
          { text: "A. Ang gender identity ay tumutukoy sa pangkat na kinasasakupan ng isang tao.", image: null },
          { text: "B. Ang gender role ay tumutukoy sa mga gampanin at kilos na tinatakda ng lipunan.", image: null },
          { text: "C. Ang gender identity ay kung paano nakikilala at pinipili ng isang tao ang kaniyang sekswalidad.", image: null },
          { text: "D. Ang gender role at gender identity ay parehong tumutukoy sa sekswal na kalikasan ng isang tao.", image: null }
        ],
        answer: 1
      },
      {
        question: "Anong tawag sa oryentasyong sekswal na nararamdaman ng isang tao sa parehong kasarian at sa kabilang kasarian?",
        options: [
          { text: "A. Homosexual", image: null },
          { text: "B. Bisexual", image: null },
          { text: "C. Asexual", image: null },
          { text: "D. Heterosexual", image: null }
        ],
        answer: 1
      },
      {
        question: "Si Angelica ay may natatanging sekswal na atraksyon sa kapwa babae. Alin sa mga sumusunod na oryentasyong sekswal ang ipinapakita?",
        options: [
          { text: "A. Heterosexual", image: null },
          { text: "B. Homosexual", image: null },
          { text: "C. Bisexual", image: null },
          { text: "D. Asexual", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang tawag sa isang tao na hindi nakakaramdam ng sekswal na atraksyon?",
        options: [
          { text: "A. Bisexual", image: null },
          { text: "B. Homosexual", image: null },
          { text: "C. Asexual", image: null },
          { text: "D. Heterosexual", image: null }
        ],
        answer: 2
      },
      {
        question: "Alin sa mga sumusunod ang nagpapakita ng epekto ng gender role sa isang tao?",
        options: [
          { text: "A. Ang lalaki ay nagtatrabaho at ang babae ay nag-aalaga ng mga anak.", image: null },
          { text: "B. Ang babae ay nagiging matagumpay sa negosyo.", image: null },
          { text: "C. Ang lalaki ay magaling magluto sa kanilang bahay.", image: null },
          { text: "D. Ang babae ay sumasali sa mga gawaing panlalaki.", image: null }
        ],
        answer: 0
      },
      {
        question: "Ang isang indibidwal ay may kakayahang magtakda ng sarili nitong gender identity. Ano ang tawag sa ganitong proseso?",
        options: [
          { text: "A. Gender expression", image: null },
          { text: "B. Gender role", image: null },
          { text: "C. Gender fluidity", image: null },
          { text: "D. Gender equality", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang tawag sa kakayahan ng isang tao na maipahayag ang kasarian sa pamamagitan ng kaniyang kasuotan, kilos, at wika?",
        options: [
          { text: "A. Gender expression", image: null },
          { text: "B. Gender role", image: null },
          { text: "C. Gender fluidity", image: null },
          { text: "D. Gender equality", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang ibig sabihin ng 'gender non-conforming'?",
        options: [
          { text: "A. Ang pagiging akma sa mga tradisyunal na gampanin sa kasarian", image: null },
          { text: "B. Ang pagiging hindi tumutok sa gender identity", image: null },
          { text: "C. Ang hindi pagtanggap sa kasarian ng isang tao", image: null },
          { text: "D. Ang hindi pagsunod sa mga inaasahang gampanin at pag-uugali sa kasarian", image: null }
        ],
        answer: 3
      },
      {
        question: "Ano ang tawag sa isang tao na walang takdang sekswal na pagkakakilanlan?",
        options: [
          { text: "A. Bisexual", image: null },
          { text: "B. Genderfluid", image: null },
          { text: "C. Asexual", image: null },
          { text: "D. Homosexual", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang ibig sabihin ng 'cisgender'?",
        options: [
          { text: "A. Ang isang tao na hindi tumutugma ang kasarian sa kanilang itinakdang pag-uugali", image: null },
          { text: "B. Ang isang tao na ang kasarian ay tumutugma sa kanilang ipinanganak na sex", image: null },
          { text: "C. Ang isang tao na walang kasarian", image: null },
          { text: "D. Ang isang tao na may ibang gender kaysa sa kanilang ipinanganak na kasarian", image: null }
        ],
        answer: 1
      },
      {
        question: "Alin sa mga sumusunod ang nagpapakita ng gender equality?",
        options: [
          { text: "A. Ang parehong lalaki at babae ay may pantay na karapatan sa pag-aari", image: null },
          { text: "B. Ang lalaki ay may trabaho habang ang babae ay nananatili sa bahay", image: null },
          { text: "C. Ang mga kababaihan ay limitado lamang sa pag-aalaga ng pamilya", image: null },
          { text: "D. Ang lalaki ay hindi pinapayagan na magluto", image: null }
        ],
        answer: 0
      },
      {
        question: "Alin sa mga sumusunod na kasarian ang may kakayahang magbuntis?",
        options: [
          { text: "A. Lalaki", image: null },
          { text: "B. Babae", image: null },
          { text: "C. Lalaki at babae", image: null },
          { text: "D. Wala sa nabanggit", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang ibig sabihin ng term na 'transgender'?",
        options: [
          { text: "A. Isang tao na ang kasarian ay hindi tumutugma sa kanilang ipinanganak na sex", image: null },
          { text: "B. Isang tao na hindi nararamdaman ang anumang uri ng kasarian", image: null },
          { text: "C. Isang tao na may dalawang kasarian", image: null },
          { text: "D. Isang tao na wala nang sekswal na atraksyon", image: null }
        ],
        answer: 0
      },
      {
        question: "Paano makakatulong ang gender equality sa lipunan?",
        options: [
          { text: "A. Pinapalakas ang pagkakaiba-iba sa lahat ng kasarian", image: null },
          { text: "B. Pinapalaganap ang pantay na oportunidad at karapatan para sa lahat ng kasarian", image: null },
          { text: "C. Pinapaboran ang lalaki sa mga gawain sa bahay", image: null },
          { text: "D. Pinipigilan ang kababaihan na magkaroon ng karera", image: null }
        ],
        answer: 1
      },
      {
        question: "Alin sa mga sumusunod ang hindi kabilang sa mga dahilan ng gender inequality?",
        options: [
          { text: "A. Ang mga kababaihan ay hindi pinapayagan sa mga posisyon ng pamumuno", image: null },
          { text: "B. Ang lalaki lamang ang maaaring magtaglay ng mga ari-arian", image: null },
          { text: "C. Ang mga kababaihan ay binibigyan ng pantay na oportunidad sa edukasyon", image: null },
          { text: "D. Ang kababaihan ay hindi binibigyan ng parehong sahod sa mga lalaki sa parehong trabaho", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang tawag sa paggamit ng kasarian sa paggawa ng mga polisiya at hakbangin sa gobyerno?",
        options: [
          { text: "A. Gender bias", image: null },
          { text: "B. Gender equality", image: null },
          { text: "C. Gender mainstreaming", image: null },
          { text: "D. Gender stereotyping", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang ibig sabihin ng 'intersectionality' sa konteksto ng gender?",
        options: [
          { text: "A. Ang paraan ng pagtukoy ng pagkakapareho ng lahat ng kasarian", image: null },
          { text: "B. Ang ugnayan ng iba't ibang uri ng diskriminasyon na nararanasan ng isang tao batay sa kanilang kasarian, lahi, relihiyon, at iba pang aspeto", image: null },
          { text: "C. Ang proseso ng paghahanap ng mga solusyon sa gender equality", image: null },
          { text: "D. Ang mga karapatan ng mga kababaihan sa lipunan", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang tawag sa kalagayan kung saan ang isang tao ay may parehong mga kasarian o gender?",
        options: [
          { text: "A. Gender non-conforming", image: null },
          { text: "B. Gender fluid", image: null },
          { text: "C. Androgynous", image: null },
          { text: "D. Cisgender", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang pangunahing layunin ng Feminist Movement?",
        options: [
          { text: "A. Ang magtanggol sa mga karapatan ng kalalakihan", image: null },
          { text: "B. Ang isulong ang pantay na karapatan para sa kababaihan", image: null },
          { text: "C. Ang baguhin ang mga tradisyonal na kasarian", image: null },
          { text: "D. Ang magtulungan ang lahat ng kasarian", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang ibig sabihin ng 'patriarchy'?",
        options: [
          { text: "A. Isang sistema ng lipunan na nagbibigay ng kapangyarihan sa mga kababaihan", image: null },
          { text: "B. Isang sistema ng lipunan na binibigyan ng higit na kapangyarihan ang mga lalaki", image: null },
          { text: "C. Isang sistema ng lipunan na pinapalaganap ang pagkakapantay-pantay", image: null },
          { text: "D. Isang sistema ng lipunan na nag-aalis ng mga stereotypes ng kasarian", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang tawag sa hakbangin na naglalayong bigyan ng pantay na oportunidad ang mga kababaihan at kalalakihan?",
        options: [
          { text: "A. Feminism", image: null },
          { text: "B. Gender equality", image: null },
          { text: "C. Gender roles", image: null },
          { text: "D. Patriarchy", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang ibig sabihin ng 'sexism'?",
        options: [
          { text: "A. Ang pagpapakita ng pabor sa mga kababaihan sa lahat ng aspeto", image: null },
          { text: "B. Ang hindi pagkakapantay-pantay ng mga karapatan batay sa kasarian", image: null },
          { text: "C. Ang pagtanggap sa iba't ibang uri ng kasarian", image: null },
          { text: "D. Ang pagiging hindi interesado sa mga isyu ng kasarian", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang ibig sabihin ng 'gender stereotyping'?",
        options: [
          { text: "A. Ang pag-aakusa ng mga tao sa isang tiyak na papel base sa kanilang kasarian", image: null },
          { text: "B. Ang pagbabago ng kasarian ng isang tao", image: null },
          { text: "C. Ang pagsuporta sa mga kababaihan sa lahat ng aspeto ng buhay", image: null },
          { text: "D. Ang pagsuporta sa mga kalalakihan upang magtagumpay sa kanilang buhay", image: null }
        ],
        answer: 0
      },
      {
        question: "Alin sa mga sumusunod na pahayag ang tama tungkol sa kasarian?",
        options: [
          { text: "A. Ang gender ay isang likas na katangian na hindi maaaring baguhin", image: null },
          { text: "B. Ang gender ay tumutukoy lamang sa biological na katangian ng isang tao", image: null },
          { text: "C. Ang gender ay maaaring magbago at mag-evolve depende sa mga sosyal at kultural na aspeto", image: null },
          { text: "D. Ang gender ay palaging tumutugma sa sekswal na pagnanasa ng isang tao", image: null }
        ],
        answer: 2
      },
      {
        question: "Ano ang ibig sabihin ng 'gender fluid'?",
        options: [
          { text: "A. Ang pagiging walang kasarian", image: null },
          { text: "B. Ang kakayahan ng isang tao na baguhin ang kanilang kasarian batay sa nararamdaman nila", image: null },
          { text: "C. Ang pagkakaroon ng parehong kasarian", image: null },
          { text: "D. Ang hindi pagsunod sa mga pamantayan ng kasarian", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang tawag sa pagkakapantay-pantay ng mga karapatan ng lalaki at babae sa lugar ng trabaho?",
        options: [
          { text: "A. Gender discrimination", image: null },
          { text: "B. Gender equality", image: null },
          { text: "C. Gender bias", image: null },
          { text: "D. Gender roles", image: null }
        ],
        answer: 1
      },
      {
        question: "Ano ang tawag sa pagsuporta sa mga kababaihan sa pamamagitan ng mga hakbangin upang matamo ang pantay na karapatan?",
        options: [
          { text: "A. Feminism", image: null },
          { text: "B. Patriarchy", image: null },
          { text: "C. Misogyny", image: null },
          { text: "D. Sexism", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang ibig sabihin ng 'cisgender'?",
        options: [
          { text: "A. Isang tao na may kasarian na tumutugma sa kanilang asignadong kasarian mula sa kapanganakan", image: null },
          { text: "B. Isang tao na hindi sumusunod sa mga pamantayan ng kasarian", image: null },
          { text: "C. Isang tao na nagbago ng kasarian", image: null },
          { text: "D. Isang tao na may hindi tiyak na kasarian", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang tawag sa proseso ng pagtanggap sa kasarian ng isang tao, anuman ang kanilang biolohikal na kasarian?",
        options: [
          { text: "A. Gender identity", image: null },
          { text: "B. Gender fluidity", image: null },
          { text: "C. Gender bias", image: null },
          { text: "D. Gender roles", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang ibig sabihin ng 'transgender'?",
        options: [
          { text: "A. Isang tao na hindi tumutugma ang kasarian sa kanilang biolohikal na kasarian", image: null },
          { text: "B. Isang tao na sumusunod sa mga tradisyonal na kasarian", image: null },
          { text: "C. Isang tao na may parehong kasarian", image: null },
          { text: "D. Isang tao na naniniwala sa gender equality", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang tawag sa ideya na ang mga kalalakihan at kababaihan ay may mga natural na papel sa lipunan batay sa kanilang kasarian?",
        options: [
          { text: "A. Gender stereotyping", image: null },
          { text: "B. Gender identity", image: null },
          { text: "C. Gender equality", image: null },
          { text: "D. Patriarchy", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang tawag sa pananaw na ang mga kababaihan ay dapat magkaroon ng pantay na karapatan at oportunidad sa lahat ng aspeto ng buhay?",
        options: [
          { text: "A. Feminism", image: null },
          { text: "B. Gender fluidity", image: null },
          { text: "C. Patriarchy", image: null },
          { text: "D. Sexism", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang ibig sabihin ng 'gender binary'?",
        options: [
          { text: "A. Ang pagkakaroon lamang ng dalawang kasarian: lalaki at babae", image: null },
          { text: "B. Ang pagtanggap sa iba't ibang uri ng kasarian", image: null },
          { text: "C. Ang proseso ng pagpapalit ng kasarian", image: null },
          { text: "D. Ang ideya ng pagkakaroon ng tatlong kasarian", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang tawag sa diskriminasyon laban sa mga kababaihan?",
        options: [
          { text: "A. Misogyny", image: null },
          { text: "B. Sexism", image: null },
          { text: "C. Homophobia", image: null },
          { text: "D. Racism", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang ibig sabihin ng 'gender equality'?",
        choices: [
          { text: "A. Ang pantay na oportunidad at karapatan para sa lahat ng kasarian", image: null },
          { text: "B. Ang higit na karapatan para sa kalalakihan", image: null },
          { text: "C. Ang higit na karapatan para sa kababaihan", image: null },
          { text: "D. Ang pag-aalis ng lahat ng kasarian", image: null }
        ],
        answer: 0
      },
      {
        question: "Ano ang tawag sa mga pag-uugali, pananaw, at inaasahan na nakatali sa isang tiyak na kasarian sa isang lipunan?",
        options: [
          { text: "A. Gender roles", image: null },
          { text: "B. Gender stereotypes", image: null },
          { text: "C. Gender bias", image: null },
          { text: "D. Gender identity", image: null }
        ],
        answer: 0
      }  
   
    
     
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const questionImg = document.getElementById('question-image');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    // Set the question image if available
    if (currentQuestion.image) {
        questionImg.src = currentQuestion.image;
        questionImg.style.display = "block";
    } else {
        questionImg.style.display = "none";
    }

    // Loop through options and create elements
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option.text;
        li.onclick = () => checkAnswer(index);

        // Add option image if available
        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = "Option Image";
            li.prepend(img);
        }

        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    document.getElementById('score').textContent = score;

    // Move to next question or show results
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question when the page loads
window.onload = loadQuestion;
