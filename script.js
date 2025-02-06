const questions = [
    
    {
        question: "Ano ang tamang paliwanag tungkol sa sex?",
        options: [
            "A. Tumutukoy ito sa biyolohikal at pisyolohikal na katangian na nagtatakda ng pagkakaiba sa babae at lalaki.",
            "B. Ito ay mga katangiang naglalarawan sa iba't ibang kasarian tulad ng lalaki, babae, bakla, lesbian, at transgender.",
            "C. Tumutukoy ito sa papel ng babae at lalaki sa lipunang ginagalawan.",
            "D. Inilalarawan nito ang kilos at gampanin na itinakda ng lipunan."
        ],
        answer: 0
    },
    {
        question: "Si Zandro ay may matinding paghanga at pisikal na atraksyon sa kanyang kaibigang babae na si Grace. Ano ang kanyang oryentasyong sekswal?",
        options: [
            "A. Bisexual",
            "B. Homosexual",
            "C. Heterosexual",
            "D. Asexual"
        ],
        answer: 2
    },
    {
        question: "Aling sitwasyon ang nagpapakita ng tamang pakahulugan ng gender?",
        options: [
            "A. Nagsimula nang magkaroon ng buwanang dalaw si Precious.",
            "B. Nagbago ang boses ni Kobe dahil siya ay nagbibinata.",
            "C. Si Toby ay kinikilala bilang isang matapang at mahusay na pulis sa kanilang bayan.",
            "D. Nagkaroon ng pormadong pangangatawan si Katarina matapos siyang magdalaga."
        ],
        answer: 2
    },
    {
        question: "Si Mateo ay nakakaranas ng pisikal at sekswal na atraksyon sa parehong kasarian. Ano ang tamang oryentasyong sekswal para sa kanya?",
        options: [
            "A. Bakla",
            "B. Bisexual",
            "C. Queer",
            "D. Homosexual"
        ],
        answer: 1
    },
    {
        question: "Alin sa sumusunod ang nagpapakita ng Gender Identity o Pagkakakilanlang Pangkasarian?",
        options: [
            "A. Si Gabriel ay umibig sa kapwa niya lalaki.",
            "B. Si Ellen DeGeneres ay isang tanyag na host na kinikilala bilang lesbian.",
            "C. Nakaranas si Jake ng atraksyon sa parehong babae at lalaki.",
            "D. Pinili ni Juana na sumailalim sa operasyong pagtanggal ng suso at uminom ng gamot upang maging isang lalaki."
        ],
        answer: 3
    },
    {
        question: "Anong pahayag ang HINDI angkop na paglalarawan ukol sa LGBTQIA+?",
        options: [
            "A. Ang lesbian ay mga lalaki na ang kilos at damdamin ay panlalaki.",
            "B. Ang bisexual ay mga taong nakararamdam ng atraksyon sa dalawang kasarian.",
            "C. Ang gay ay mga lalaking nakararamdam ng atraksyon sa kanilang kapwa lalaki.",
            "D. Ang transgender ay taong nakararamdam na siya ay nabubuhay sa maling katawang na ang pag-iisip at ang pangangatawan ay hindi magkatugma."
        ],
        answer: 0
    },
    
    {
        question: "Anong pahayag ang nagpapaliwanag tungkol sa kaibahan ng gender at sex?",
        options: [
            "A. Ang sex ay tumutukoy sa biyolohikal, habang ang gender naman ang itinakda na gampanin ng kanilang magulang.",
            "B. Ang sex ay gampaning panlipunan habang ang gender naman ay mga kilos o gawain na itinakda ng lipunan.",
            "C. Ang sex ay tumutukoy sa pisyolohikal na katangian at ang gender naman ay ang panlipunang gampanin ng isang tao.",
            "D. Ang sex ay tungkol sa mga gampanin o kilos sa lipunan, habang ang gender ay ang nagtatakda sa kaibahan ng babae at lalaki."
        ],
        answer: 2
    },
    {
        question: "Ayon sa Boxer Codex, bakit hindi pantay ang pagtrato sa mga kababaihan kumpara sa mga kalalakihan?",
        options: [
            "A. Nakadepende lamang ang mga kababaihan sa mga kalalakihan.",
            "B. May pagkakataong pumirmi ang mga kalalakihan sa kanilang tahanan.",
            "C. Mas matalino at malakas ang mga lalaki kaya binibigyan sila ng importansya.",
            "D. Pinapaburan ang mga gampanin ng mga kalalakihan noon kaysa sa mga kababaihan."
        ],
        answer: 3
    },
    {
        question: "Bakit naiiba ang mga kababaihan sa mga kalalakihan sa tribong T’chambuli batay sa kanilang mga gampanin?",
        options: [
            "A. Abala ang mga kalalakihan sa kanilang mga anak at ari-arian nito.",
            "B. Dominante ang mga kababaihan at sila ang naghahanap ng pagkain para sa pamilya.",
            "C. Mas maalaga ang mga kalalakihan kaysa sa mga kababaihan at nasa tahanan lamang.",
            "D. Higit na binibigyang halaga ang mga ginagawa ng mga kalalakihan dahil sa pagiging kooperatibo nito."
        ],
        answer: 1
    },
    {
        question: "Anong gampanin ang ipinagbabawal na gawain sa mga kababaihan sa Kanlurang Asya at Africa?",
        options: [
            "A. Bawal humingi ng pera sa kanilang asawa.",
            "B. Pinagkaitan ng karapatang bumoto ng mga lider sa kanilang bansa.",
            "C. Bawal maging isang ina ang babae kapag walang pahintulot ng kanilang magulang.",
            "D. Hindi pinapayagan ang mga kababaihan na magpaganda o anumang pag-aayos sa sarili."
        ],
        answer: 1
    },
    {
        question: "Batay sa ulat ng United Nations COVID-19 Response noong 2020, bakit mayroong kasapi ng LGBTQIA+ ang nakaranas ng iba’t ibang karahasan?",
        options: [
            "A. Maliit lamang ang atensiyong binibigay sa kanila ng pamahalaan.",
            "B. Higit nakatuon sa social media platform na nakaaapekto sa aspetong sikolohikal.",
            "C. May pagkakataong nasasagot at nababastos na nila ang magulang at iba pang kasapi ng pamilya.",
            "D. Dulot ng mahigpit na pananatili sa loob ng tahanan at kawalan ng pagtanggap at pagkilala sa iilan."
        ],
        answer: 3
    },
    {
        question: "Anong pahayag ang HINDI naglalarawan sa paglabag karapatang-pantao ng mga kababaihan?",
        options: [
            "A. Pinagkasundo ng mga magulang noong unang panahon ang kanyang babaeng anak sa isang mayamang lalaki upang maging asawa sa pamamagitan ng fixed marriage.",
            "B. Sa paniniwalang mapapanatili na walang bahid dungis ang kababaihan sa Aprika, sila ay dumaan sa proseso ng Female Genital Mutilation (FGM).",
            "C. Kapag namatay ang asawang lalaki ay kasamang susunugin ang asawang byuda na tinawag na Suttee.",
            "D. May karapatang bumoto at makilahok sa aspektong pulitika ang mga kababaihan na ngayon."
        ],
        answer: 3
    },
    {
        question: "Anong pahayag ang nagpapakita ng diskriminasyon sa LGBTQIA+?",
        options: [
            "A. Kinukutya na mahina ang isang boksingero matapos matalo sa paligsahan.",
            "B. Isang sikat na mang-aawit ay tinanggalan ng proyekto matapos umaming bisexual.",
            "C. Ang mga kababaihan noon sa Saudi Arabia ay pinagbawalang magmaneho ng sasakyan.",
            "D. Ang mga lalaki, babae, at ang LGBTQIA+ ay may kaniya-kaniyang tinatamasang karapatang-pantao."
        ],
        answer: 1
    },
    {
        question: "Ang sumusunod na pahayag ay nagpapakita ng karahasan sa LGBTQIA+ MALIBAN sa isa:",
        options: [
            "A. Pangungutya o pang-aalipusta sa mga LGBTQIA+ bilang salot sa lipunan.",
            "B. Ang iilang mga LGBTQIA+ ay nakaranas ng diskriminasyon sa oportunidad sa trabaho.",
            "C. Pagpatay sa mga LGBTQIA+ kahit patuloy ang panawagan sa pagkapantay-pantay at kalayaan.",
            "D. Binibigyan ng patas na karapatan ang mga LGBTQIA+ sa lahat na gusto nilang gawin sa kapwa tao."
        ],
        answer: 3
    },
    {
        question: "Ang sumusunod ay nagpapakita ng mga karapatan ng kababaihan MALIBAN sa:",
        options: [
            "A. Malayang makapag-aral.",
            "B. May trabaho sa iba’t ibang sektor.",
            "C. Kabahagi na sa pakikipaglaban.",
            "D. Pagmamay-ari ng mga kalalakihan."
        ],
        answer: 3
    },
    {
        question: "Anong sitwasyon ang maituturing na karahasan sa mga bakla, bisexual, at transgender?",
        options: [
            "A. Inihalal na lider dahil sila ay magaling.",
            "B. Hindi pinapansin sapagkat akala nila mas angat ka.",
            "C. Minamaliit, binu-bully at tinawag na salot daw ng lipunan.",
            "D. Pinagseselosan ng mga kababaihan dahil mas magaling at matalino raw sila."
        ],
        answer: 2
    },
    {
        question: "Isa sa karahasan ng mga kababaihan ay pagkitil sa kanilang kalayaan. Alin sa sumusunod ang HINDI kabilang sa mga pahayag?",
        options: [
            "A. Pagbibigay ng karapatan sa paglahok upang makaboto ang mga kababaihan noong unang panahon.",
            "B. Sa pamamagitan ng foot binding, nagpapakita ito sa estado ng kagandahan lalo na sa mga kababaihan ng Tsina.",
            "C. Para maiwasan ang maagang pagbubuntis sa mga kababaihan sa Aprika, ang mga kababaihan ay dumaan sa proseso ng breast ironing o flattening.",
            "D. Pinanatili na walang bahid dungis ang mga kababaihan sa Aprika sa pamamagitan ng Female Genital Mutilation (FGM)."
        ],
        answer: 0
    },
    {
        question: "Kailan maituturing na may direktang emosyonal o sikolohikal na karahasan ang isang sitwasyon?",
        options: [
            "A. Pagtali sa poste.",
            "B. Iniwan sa loob ng nakasaradong kotse.",
            "C. Pagpalo at pagbugbog ng iyong kaibigan.",
            "D. Pinagbantaang patayin ang iyong buong pamilya."
        ],
        answer: 3
    },
    {
        question: "Anong sitwasyon ang HINDI nagpapakita ng karahasan sa mga kalalakihan?",
        options: [
            "A. Pangangaliwa o pagkakaroon ng kabit.",
            "B. Pang-iinsulto ng asawa sa harap ng madla.",
            "C. Pagiging kaagapay sa pagpapaplano para sa pamilya.",
            "D. Sobrang pagdududa ng asawa na nauuwi sa sikolohikal na problema."
        ],
        answer: 2
    },
    {
        question: "Ayon sa Anti-VAWC o R.A 9262, anong pahayag ang maituturing na pang-ekonomikong pang-aabuso sa mga kababaihan sa loob ng isang pamilya o relasyon?",
        options: [
            "A. Hindi gustong magtrabaho ang mga babae.",
            "B. Umaasa lamang sa mga magulang ang mga babae para sa pang-araw-araw na pangangailangan.",
            "C. Binabantaan na babawiin ng asawang lalaki ang suportang pinansyal para sa kanyang asawa at anak nito.",
            "D. Sinisira ang mga ari-arian at negosyo ng kanilang mga magulang upang walang perang mapagkikitaan ang babae."
        ],
        answer: 2
    },
    {
        question: "Bakit ginawa ang batas na R.A 9262 o Anti-Violence Against Women and their Children?",
        options: [
            "A. May mga kabataan na nakararanas ng diskriminasyon.",
            "B. Maraming nagbabawal sa mga kababaihan na gawin ang kanilang gustong propesyon.",
            "C. Gusto nilang lamangan ang mga batas na ginawa at ipinatupad para sa mga kalalakihan.",
            "D. Proteksiyonan ang mga kababaihan at anak nito laban sa iba’t ibang uri ng karahasan."
        ],
        answer: 3
    },
    {
        question: "Bakit maaaring magsampa ng kaso ang ibang tao na may kaalaman sa krimeng ginawa kahit hindi ito ang biktima?",
        options: [
            "A. Ang batas na ito ay public crime.",
            "B. Alam nila kung saan ang Regional Trial Court.",
            "C. Hindi magawang magsampa ng kaso ang mga biktima.",
            "D. Takot ang mga biktima sa mga posibleng gawin sa kanila kapag nagsampa ito."
        ],
        answer: 0
    },
    {
        question: "Hindi saklaw ng R.A. 9262 ang kasong sikolohikal na pang-aabuso ng empleyadong lalaki sa empleyadong babae dahil_________________",
        options: [
            "A. ito ay hindi maituturing na karahasan.",
            "B. walang relasyon ang mga kasangkot.",
            "C. ginawa lamang sa loob ng isang tahanan.",
            "D. hindi sakop ng batas na ito ang sikolohikal na pang-aabuso."
        ],
        answer: 1
    },
    {
        question: "Bakit tinawag na 'primary duty bearer' ang pamahalaan sa batas na R.A. 9710 o Magna Carta of Women?",
        options: [
            "A. May kakayahan na kontrolin ang mga posibleng magsagawa ng krimen.",
            "B. May pangunahing kaalaman sa mga nangyayari sa mga kababaihan sa bansa.",
            "C. Mayroon itong kaalaman sa mga karahasan at diskriminasyong nararanasan ng babae.",
            "D. Responsibilidad nito na maitaguyod ang mga programa at proteksiyon sa mga kababaihan."
        ],
        answer: 3
    },
    {
        question: "Ano ang maituturing na HINDI layunin ng pagkakaroon ng batas na Magna Carta of Women?",
        options: [
            "A. Pagkaroon ng pagkapantay-pantay na trato sa lalaki at babae.",
            "B. Pagtaguyod sa kahusayan at potensiyal na galing ng mga kababaihan.",
            "C. Pagtanggap ng karapatan lamang ng kalalakihan ang karapatang pantao.",
            "D. Pagbibigay proteksyon sa mga kababaihan laban sa karahasan at diskriminasyon."
        ],
        answer: 2
    },
    {
        question: "Bakit maituturing na kabilang sa mga saklaw ng Magna Carta of Women ang mga kababaihan na nakakulong at nasa armadong sigalot?",
        options: [
            "A. Pinili at sinali sila upang hindi sila mahirapan sa kanilang kalagayan.",
            "B. Isa sila sa mga Marginalized Women na nasa mahirap na kalagayan.",
            "C. Saklaw ng batas na ito ang ano pa mang katayuan sa buhay ng mga kababaihan.",
            "D. Sila ang mga Women in Especially Difficult Circumstances na nasa mapanganib na katayuan."
        ],
        answer: 3
    },
    {
        question: "Paano mo dapat pakitunguhan ang iyong kaibigan na kabilang sa LGBTQIA+?",
        options: [
            "A. Itatakwil at baliwalain ko ang aming samahan at pagkakaibigan.",
            "B. Kumbinsihin ko sila na magbago ng kanilang perspektibo sa buhay.",
            "C. Iiwas ako dahil marahil maimpluwensiyahan ang aking kilos at gawi.",
            "D. Pakisamahan ng may respeto, paggalang at kusang pagtanggap sa oryentasyong sekswalidad."
        ],
        answer: 3
    },
    {
        question: "Ikaw ay may kaalaman sa pang-aabusong pisikal ng iyong kaibigang si Jullie mula sa kanyang ama. Paano mo siya matutulungan at maproteksiyonan?",
        options: [
            "A. Humingi ng protection order sa Regional Trial Court.",
            "B. Patuluyin ang biktima sa inyong bahay at doon muna mamalagi.",
            "C. Pumunta sa tanggapan ng PNP Women’s Desk at i-report ang pangyayari.",
            "D. Ipaalam ang pangyayari sa mga kapitbahay upang mabantayan ang biktima."
        ],
        answer: 2
    },
    {
        question: "Paano mo ibahagi ang iyong kaalaman sa mga kasapi ng inyong pamilya ukol sa R.A 9262?",
        options: [
            "A. Papayuhan ang kapatid na lalaki tungkol sa batas na ito.",
            "B. Hindi na kailangan ibahagi sapagkat alam na nila ang usaping ito.",
            "C. Paaalahanan sila sa mga karahasan at diskriminasyong nagaganap sa lipunan.",
            "D. Kausapin sila tungkol sa mga detalye ng batas upang magkaroon ng kaalaman at pag-unawa."
        ],
        answer: 3
    },
    {
        question: "Paano mo maisulong ang mga batas kagaya ng R.A. 9262 at Magna Carta of Women?",
        options: [
            "A. Pagbawalan ang mga abusadong lalaki na alamin ang batas.",
            "B. Tuturuan ang mga kapwa kong kabataan tungkol sa mga nararapat gawin.",
            "C. Paaalahanan ang mga kabataang babae lamang tungkol sa mga batas na ito.",
            "D. Ibahagi ang mga mahahalagang impormasyon tungkol sa mga batas na ito sa komunidad."
        ],
        answer: 3
    },
    {
        question: "Ang Safe Spaces Act of 2019 o 'Bawal Bastos Law' ay naglalayong _________.",
        options: [
            "A. protektahan ang mga indibidwal mula sa mga pang-aabuso, harassment, at diskriminasyon sa pampublikong lugar at mula sa social media platforms.",
            "B. isulong ang karapatan ng kababaihan dahil sila ay mahihina at hindi kayang maproteksyunan ang sarili.",
            "C. pangalagaan ang mga kabataan mula sa mga pang-aabuso, harassment, at diskriminasyon.",
            "D. protekysonan ang mga LGBTQIA+ laban sa mga homophobic."
        ],
        answer: 0
    },
    {
        question: "Anong hakbang ng pamahalaan ang may pinakaangkop na paraan para sa kapakanan ng mga biktima sa iba’t ibang uri ng diskriminasyon at karahasan?",
        options: [
            "A. Gumawa ng mga konkretong batas na nagtaguyod ng proteksiyon sa mga biktima ng diskriminasyon at karahasan.",
            "B. Bumuo ng mga propaganda na layong ibsan ang mga karahasan at diskriminasyon.",
            "C. Paigtingin ang pandaigdigang samahan laban sa diskriminasyon at karahasan.",
            "D. Hikayatin ang mamamayan na maging mapanuri at mapagmatyag."
        ],
        answer: 0
    },
    {
        question: "Alin ang pinakamabuting solusyon upang masugpo ang diskriminasyon at karahasang nangyayari sa lipunan?",
        options: [
            "A. Magkaroon ng organisasyong bayanihan.",
            "B. Bumuo ng campaign drive sa Instagram lamang.",
            "C. Mag-aral nang mabuti upang lumawak ang kaalaman sa mga batas.",
            "D. Magsagawa nang malawakang symposia hinggil sa isyu ng diskriminasyon at karahasan."
        ],
        answer: 3
    },
    {
        question: "Aling sitwasyon ang nagpapakita ng paglabag sa batas na R.A. 11313 o ang Bawal Bastos Law?",
        options: [
            "A. Sinabihan ni Jun si May na maganda dahil sa pag-aayos nito sa sarili.",
            "B. Pinagbabawalan ni Mar ang mga lalaki na lalapit sa kanyang kapatid na babae.",
            "C. Nagkomentaryo si Gary sa mga larawan ni Maika na pino-post sa social media.",
            "D. Kinacat-call si Jess ng mga tambay nang dumaan siya sa harap ng kanyang kompanya."
        ],
        answer: 3
    },
    {
        question: "Alin ang nararapat gawin upang itaguyod ang paggalang at pagkapantay-pantay sa kasarian sa paaralan?",
        options: [
            "A. Isumbong ko sa guro ang bakla kong kaklase.",
            "B. Makisali ako sa protesta laban sa karahasan sa kababaihan.",
            "C. Igalang ko ang sexual orientation at gender expression ng aking kaklase.",
            "D. Magpost ako sa social media tungkol sa mga binubully sa aming paaralan."
        ],
        answer: 2
    },
    {
        question: "Alin ang nagpapakita ng tunay na gender equality o pagkapantay-pantay ng lahat ng kasarian?",
        options: [
            "A. Pinahintulutan si Eyah na maging sundalo na magbibigay seguridad sa bansa.",
            "B. Mayroong third restroom ang paaralan ngunit mga bakla lamang ang pinapapasok dito.",
            "C. Si Marly, isang transgender, ay sumunod pa rin sa patakaran ng paaralan hinggil sa paghihigpit sa mga may mahabang buhok.",
            "D. Pinili ng Punong-baranggay si Junnie kaysa kay Kris na maging pinuno ng isang komite dahil may kakayahan ito."
        ],
        answer: 3
    },
    {
        question: "Si Jec ay nagkagusto sa kanyang kapwa babae. Ngunit nang nalaman ito ng mga kaklase, ipinagkalat nila. Makatwiran ba ang gawi at kilos ng kanyang mga kaklase?",
        options: [
            "A. Oo, dahil kailangang malaman ito ng iba.",
            "B. Oo, sapagkat malaya silang ibulgar ito sa madla.",
            "C. Hindi, sapagkat ang usaping ito ay personal na desisyon at kalayaan.",
            "D. Hindi, dahil nasira ang relasyon ng bawat isa."
        ],
        answer: 2
    },
    {
        question: "Sang-ayon ka ba sa mga batas na isinasagawa ng pamahalaan upang tugunan ang mga hamong pangkasarian?",
        options: [
            "A. Oo, dahil nadama ng iilan ang suporta at pagpapahalaga ng pamahalaan.",
            "B. Oo, may proteksiyon at seguridad na ang mga kababaihan.",
            "C. Hindi, dahil may mga kaso pa ring diskriminasyon at karahasan sa kasalukuyan.",
            "D. Hindi, sapagkat laganap pa rin ang paglabag sa mga karapatang-pantao."
        ],
        answer: 1
    },
    {
        question: "Makabuluhan ba ang pagpapatupad ng pamahalaan sa mga batas tulad ng Anti-Violence Against Women and their Children at Magna Carta of Women?",
        options: [
            "A. Oo, dahil may pagkakataon na ang mga biktima na magsumbong sa mga karahasan at diskriminasyong nararanasan.",
            "B. Oo, upang tuluyang masugpo at matuldukan ang mga karahasan at diskriminasyong nangyayari sa lipunan.",
            "C. Hindi, dahil ang mga karahasan at diskriminasyon ay nanatili pa rin sa ngayon.",
            "D. Hindi, sapagkat iilan lamang ang nakakikinabang nito."
        ],
        answer: 1
    },
    {
        question: "Makatwiran bang gamitin ang social media platforms sa pagbabahagi ng anti-discrimination campaign?",
        options: [
            "A. Oo, dahil madaling suportahan at ikalat ang ganitong aktibidad sa lahat ng madla.",
            "B. Oo, sapagkat madali lamang itong makahikayat ng mga batang viewers.",
            "C. Hindi, dahil magkakaroon ito ng pagkakahati ng iba’t ibang opinyon o saloobin sa usapin.",
            "D. Hindi, sapagkat mahirap itong ipatupad sa lahat, lalung-lalo na sa walang access sa internet."
        ],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');

    optionsEl.innerHTML = ''; // Clear previous options

    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(index);
        optionsEl.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const scoreEl = document.getElementById('score');

    // Update score
    if (selectedIndex === currentQuestion.answer) {
        score++;
    } else {
        score--;
    }
    scoreEl.textContent = score;

    // Move to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // Quiz finished
        alert(`Quiz finished! Your final score is: ${score}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Load the first question on page load
window.onload = loadQuestion;
