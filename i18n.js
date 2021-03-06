function getCookie(name) {
    let value = '; ' + document.cookie
    let parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop().split(';').shift()
}

function setCookie(cname, cvalue, exhours) {
    let d = new Date()
    d.setTime(Date.now() + (exhours * 60 * 60 * 1000))
    let expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function setBodyClassUserLang(userLang) {
    document.getElementsByTagName('body')[0].classList.add(`__i18n-${userLang}`)
}

const langElements = document.querySelectorAll('[data-i18n]')
const userLang = getCookie("lang") || navigator.language || navigator.userLanguage
setBodyClassUserLang(userLang)

const languages = [{
        "name": "brasileiro",
        "code": "br"
    },
    {
        "name": "english",
        "code": "en"
    },
    {
        "name": "deutsch",
        "code": "de"
    },
    {
        "name": "한국어",
        "code": "ko"
    },
    {
        "name": "ру́сский",
        "code": "ru"
    },
    {
        "name": "简体中文",
        "code": "cn"
    }
]
const i18n = {
    getString(name, arguments = null) {
        if (userLang in i18n[name]) {
            if (arguments) {
                return i18n[name][userLang](...arguments)
            }
            return i18n[name][userLang]
        }
        if (arguments) {
            return i18n[name]["br"](...arguments)
        }
        return i18n[name]["br"]
    },
    "lang": userLang,
    // quiz.html
    "quiz-loading": {
        "br": "Carregando",
        "de": "Laden…",
        "ko": "로딩중...",
        "ru": "Загрузка...",
        "cn": "载入中...",
        "en": "Loading..."

    },
    "quiz-strongly-agree": {
        "br": "Concordo Plenamente",
        "en": "Strongly Agree",
        "de": "Stimme voll zu",
        "ko": "매우 동의",
        "ru": "Полностью согласен",
        "cn": "强烈同意"
    },
    "quiz-agree": {
        "pt": "Concordo na maior parte",
        "en": "Agree",
        "de": "Stimme zu",
        "ko": "동의",
        "ru": "Скорее согласен",
        "cn": "同意"
    },
    "quiz-neutral": {
        "en": "Neutral/Unsure",
        "br": "Não me interesso/não sei sobre",
        "de": "Neutral/Unsicher",
        "ko": "중립/잘 모름",
        "ru": "Не знаю/Не уверен",
        "cn": "中立/不确定"
    },
    "quiz-disagree": {
        "br": "Discordo, não é bem assim",
        "en": "Disagree",
        "de": "Stimme nicht zu",
        "ko": "동의하지 않음",
        "ru": "Скорее не согласен",
        "cn": "反对"
    },
    "quiz-strongly-disagree": {
        "br": "Discordo Completamente",
        "en": "Strongly Disagree",
        "de": "Stimme überhaupt nicht zu",
        "ko": "결코 동의하지 않음",
        "ru": "Полностью не согласен",
        "cn": "强烈反对"
    },
    "quiz-back": {
        "br": "voltar",
        "en": "back",
        "de": "Zurück",
        "ko": "뒤로",
        "ru": "Назад",
        "cn": "返回"
    },
    "quiz-question-of": {
        br(qn, questions) { return `Questão ${qn + 1} de ${questions.length}` },
        en(qn, questions) { return `Question ${qn + 1} of ${questions.length}` },
        de(qn, questions) { return `Frage ${qn +1} von ${questions.length}` },
        ko(qn, questions) { return `${questions.length}개 질문 중 ${qn +1} 번째` },
        ru(qn, questions) { return `Вопрос ${qn + 1} из ${questions.length}` },
        cn(qn, questions) { return `第 ${qn + 1} 题，共 ${questions.length} 题` }
    },
    // instructions.html
    "inst-h2": {
        "br": "Instruções",
        "en": "Instructions",
        "de": "Instruktionen",
        "ko": "소개",
        "ru": "Инструкция",
        "cn": "说明"
    },
    "inst-p": {
        "br": "",
        "en": "You will be presented with a series of statements. For each one, click the button with your opinion on it.",
        "de": "Sie erhalten eine Reihe von Stellungnahmen. Klicken Sie jeweils auf die Schaltfläche mit Ihrer Meinung dazu.",
        "ko": "당신은 일련의 질문들을 받게 될 것입니다. 해당되는 답변을 클릭하세요.",
        "ru": "Вам будет предложен ряд утверждений. Для каждого нажмите на кнопку с вашим мнением о нём.",
        "cn": "你会看到一系列观点。对于每个观点，请选择你的看法。"
    },
    "inst-gotit": {
        "br": "Vamos lá",
        "en": "Got it!",
        "de": "Verstanden",
        "ko": "알겠습니다",
        "ru": "Понял!",
        "cn": "知道了！"
    },
    "inst-nvm": {
        "en": "Wait, nevermind!",
        "de": "Warte, vergiss es!",
        "ko": "그만둘래요.",
        "ru": "Вернуться",
        "cn": "等等，还是算了！"
    },
    // results.html
    "result-h1": {
        "en": "Results",
        "de": "Ergebnisse",
        "ko": "결과",
        "ru": "Результаты",
        "cn": "结果"
    },
    "result-url": {
        "en": "<br>You can send these results by copying and pasting the URL at the top of the page or using the image below.",
        "de": "<br>Sie können diese Ergebnisse senden, indem Sie die URL oben auf der Seite kopieren und einfügen oder das folgende Bild verwenden.",
        "ko": "<br>당신은 상단의 URL을 복사하거나 아래 이미지를 이용해 설문 결과를 공유할 수 있습니다.",
        "ru": "<br>Вы можете отправить эти результаты, скопировав и вставив URL в верхней части страницы или используя изображение ниже.",
        "cn": "<br>你可以复制粘贴页面顶端的URL或是使用下方的图片来分享结果。"
    },
    "result-h2-match": {
        "en": "Closest Match: <span class='weight-300' id='ideology-label'> </span>",
        "de": "Höchste Übereinstimmung: <span class='weight-300' id='ideology-label'> </span>",
        "ko": `가장 일치하는 성향: <span class="weight-300" id="ideology-label"> </span>`,
        "ru": "Ближайшее совпадение: <span class='weight-300' id='ideology-label'> </span>",
        "cn": "最接近的匹配: <span class='weight-300' id='ideology-label'> </span>"
    },
    "result-h2-next-matches": {
        "en": "Next closest matches",
        "de": "Nächst höchste Überstimmungen",
        "ko": "다음으로 일치하는 성향",
        "ru": "Следующие ближайшие совпадения",
        "cn": "次接近匹配"
    },
    "next-matches-percent": {
        "en": "With your closest match as 100% and farthest as 0%, here is how closely you matched the other ideologies.",
        "de": "Hier sind die Ideologien mit denen du am meisten übereinstimmst, wo volle Übereinstimmung 100% ist und keine 0%.",
        "ko": "당신과 가장 일치하는 성향을 100%로, 가장 일치하지 않는 성향을 0%로 둘 때, 아래 사상들은 당신의 성향에 가까운 다른 다른 사상들 입니다.",
        "ru": "С вашим самым близким соответствием в 100% и самым дальним на 0%, вот как близко вы подходите к другим идеологиям.",
        "cn": "这是你与其他意识形态之间的匹配程度，最接近的为100%，最远的为0%。"
    },
    "result-h2-score": {
        "en": "I don't like my scores!",
        "de": "Ich mag meine Ergebnisse nicht",
        "ko": "제 결과가 마음에 들지 않습니다.",
        "ru": "Мне не нравятся мои результаты!",
        "cn": "我不喜欢我的分数！"
    },
    "result-issues": {
        "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>short form</a> or open an issue on the <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub Page</a>.",
        "de": "Bitte denken Sie daran, dass Sie in keiner der Kategorien eine 100%-ige Punktzahl erzielen möchten. Ziel des Quiz ist es, Ihre Ansichten zu hinterfragen. Wenn Sie Anregungen oder konstruktive Kritik haben, füllen Sie bitte dieses <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>Kurzformular</a> aus oder öffnen Sie ein Problem auf der <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub-Seite</a>.",
        "ko": `어떠한 범주에서든 100%의 점수를 얻을 수 없다는 것을 기억하십시오. 이 설문의 목적은 당신 자신의 관점에 직면하는 것에 있습니다. 의견이나 건설적인 비판은 <a href="https://forms.gle/6WZYMb5GXkkDLhxr5">이 양식</a>이나 <a href="https://github.com/LeftValues/leftvalues.github.io">GitHub Page</a>의 이슈를 통해 개진할 수 있습니다.`,
        "ru": "Пожалуйста, помните, что вы не намерены получить 100%-ый результат ни в одной из осей. Смысл викторины заключается в том, чтобы оспорить ваши взгляды. Если у вас какие-либо предложения или конструктивная критика, то, пожалуйста, заполните эту <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>короткую форму</a> или откройте вкладку ''issue'' на <a href='https://github.com/LeftValues/leftvalues.github.io'>странице GitHub</a>.",
        "cn": "请记住，你没必要在任何一类中获得100%的分数。测试的重点是挑战你的观点。如果你有任何建议或是建设性的批评，请填写<a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>这份表格</a>或是在<a href='https://github.com/LeftValues/leftvalues.github.io'>该项目的GitHub Page</a>上开个issue。"
    },
    "result-a-label": {
        "en": ["Extremely Revolutionary", "Very Revolutionary", "Revolutionary", "Neutral", "Reformist", "Very Reformist", "Extremely Reformist"],
        "de": ["Extrem Revolutionär", "Sehr Revolutionär", "Revolutionär", "Neutral", "Reformistisch", "Sehr Reformistisch", "Extrem Reformistisch"],
        "ko": ["극단적 혁명주의", "강경한 혁명주의", "혁명주의", "중립", "개혁주의", "강경한 개혁주의", "극단적 개혁주의"],
        "ru": ["Крайне Революционный", "Очень Революционный", "Революционный", "Нейтральный", "Реформистский", "Очень Реформистский", "Крайне Реформистский"],
        "cn": ["极端革命派", "非常革命派", "革命派", "中立", "改良派", "非常改良派", "极端改良派"]
    },
    "result-b-label": {
        "en": ["Extremely Scientific", "Very Scientific", "Scientific", "Neutral", "Utopian", "Very Utopian", "Extremely Utopian"],
        "de": ["Extrem Wissenschaftlich", "Sehr Wissenschaftlich", "Wissenschaftlich", "Neutral", "Utopisch", "Sehr Utopisch", "Extrem Utopisch"],
        "ko": ["극단적 과학주의", "강경한 과학주의", "과학주의", "중립", "공상주의", "강경한 공상주의", "극단적 공상주의"],
        "ru": ["Крайне Научный", "Очень Научный", "Научный", "Нейтральный", "Утопичный", "Очень Утопичный", "Крайне Утопичный"],
        "cn": ["极端科学社会主义", "非常科学社会主义", "科学社会主义", "中立", "空想社会主义", "非常空想社会主义", "极端空想社会主义"]
    },
    "result-c-label": {
        "en": ["Extremely Centralist", "Very Centralist", "Centralist", "Neutral", "Decentralist", "Very Decentralist", "Extremely Decentralist"],
        "de": ["Extrem Zentralisiert", "Sehr Zentralisiert", "Zentralisiert", "Neutral", "Dezentralisiert", "Sehr Dezentralisiert", "Extrem Dezentralisiert"],
        "ko": ["극단적 중앙집권주의", "강경한 중앙집권주의", "중앙집권주의", "중립", "분권주의", "강경한 분권주의", "극단적 분권주의"],
        "ru": ["Крайне Централизованный", "Очень Централизованный", "Централизованный", "Нейтральный", "Децентрализованный", "Очень Децентрализованный", "Крайне Децентрализованный"],
        "cn": ["极端集权", "非常集权", "集权", "中立", "分权", "非常分权", "极端分权"]
    },
    "result-d-label": {
        "en": ["Extremely Internationalist", "Very Internationalist", "Internationalist", "Neutral", "Nationalist", "Very Nationalist", "Extremely Nationalist"],
        "de": ["Extrem Internationalistisch", "Sehr Internationalistisch", "Internationalistisch", "Neutral", "Nationalistisch", "Sehr Nationalistisch", "Extrem Nationalistisch"],
        "ko": ["극단적 세계주의", "강경한 세계주의", "세계주의", "중립", "국가주의", "강경한 국가주의", "극단적 국가주의"],
        "ru": ["Крайне Интернациональный", "Очень Интернациональный", "Интернациональный", "Нейтральный", "Национальный", "Очень Национальный", "Крайне Национальный"],
        "cn": ["极端国际主义", "非常国际主义", "国际主义", "中立", "民族主义", "非常民族主义", "极端民族主义"]
    },
    "result-e-label": {
        "en": ["Extremely Partisan", "Very Partisan", "Partisan", "Neutral", "Unionist", "Very Unionist", "Extremely Unionist"],
        "de": ["Extrem Parteiisch", "Sehr Parteiisch", "Parteiisch", "Neutral", "Gewerkschaftlich", "Sehr Gewerkschaftlich", "Extrem Gewerkschaftlich"],
        "ko": ["극단적 정당주의", "강경한 정당주의", "정당주의", "중립", "조합주의", "강경한 조합주의", "극단적 조합주의"],
        "ru": ["Крайне Партийный", "Очень Партийный", "Партийный", "Нейтральный", "Профсоюзный", "Очень Профсоюзный", "Крайне Профсоюзный"],
        "cn": ["极端倾向党派", "非常倾向党派", "倾向党派", "中立", "倾向工会", "非常倾向工会", "极端倾向工会"]
    },
    "result-f-label": {
        "en": ["Extremely Productivist", "Very Productivist", "Productivist", "Neutral", "Ecological", "Very Ecological", "Extremely Ecological"],
        "de": ["Extrem Produktivist", "Sehr Produktivist", "Produktivist", "Neutral", "Ökologisch", "Sehr Ökologisch", "Extrem Ökologisch"],
        "ko": ["극단적 생산주의", "강경한 생산주의", "생산주의", "중립", "생태주의", "강경한 생태주의", "극단적 생태주의"],
        "ru": ["Крайне Производственный", "Очень Производственный", "Производственный", "Нейтральный", "Экологический", "Очень Экологический", "Крайне Экологический"],
        "cn": ["极端生产主义", "非常生产主义", "生产主义", "中立", "生态主义", "非常生态主义", "极端生态主义"]
    },
    "result-g-label": {
        "en": ["Extremely Conservative", "Very Conservative", "Conservative", "Neutral", "Progressive", "Very Progressive", "Extremely Progressive"],
        "de": ["Extrem Konservativ", "Sehr Konservativ", "Konservativ", "Neutral", "Progressiv", "Sehr Progressiv", "Extrem Progressiv"],
        "ko": ["극단적 보수주의", "강경한 보수주의", "보수주의", "중립", "진보주의", "강경한 진보주의", "극단적 진보주의"],
        "ru": ["Крайне Консервативный", "Очень Консервативный", "Консервативный", "Нейтральный", "Прогрессивный", "Очень Прогрессивный", "Крайне Прогрессивный"],
        "cn": ["极端保守主义", "非常保守主义", "保守主义", "中立", "进步主义", "非常进步主义", "极端进步主义"]
    },
    "result-back": {
        "en": "Back",
        "de": "Zurück",
        "ko": "뒤로",
        "ru": "Назад",
        "cn": "返回"
    },
    // index.html
    "index-b-start": {
        "en": "Click here to start!",
        "de": "Klicke hier um anzufangen!",
        "ko": "클릭해서 시작하기!",
        "ru": "Начать тест",
        "cn": "点击这里开始！"
    },
    "index-h2-whatis": {
        "en": "What is LeftValues?",
        "de": "Was ist LeftValues?",
        "ko": "LeftValues가 무엇입니까?",
        "ru": "Что такое LeftValues?",
        "cn": "LeftValues是什么？"
    },
    "index-p-answer": {
        "en": "LeftValues is a leftist quiz inspired by and based upon the <a href='https://8values.github.io/'>8values</a> quiz that seeks to identify your position on the left-wing spectrum. " +
            "If you are not a leftist, this quiz is obviously not suited for you. You will be presented with a statement, and then you will answer with your opinion on the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>, with each answer slightly affecting your scores. The questions for each axes are presented in order, rather than scattered. At the end of the quiz, your answers will be compared to the maximum possible for each value, thus giving you a percentage. Answer honestly!<br/><br/>" +
            "There are <b><u><span id='numOfQuestions'></span></u></b> questions in the test.",
        "de": "LeftValues ist ein linkes Quiz, das von dem Quiz <a href='https://8values.github.io/'>8values</a> inspiriert ist und auf diesem basiert und versucht, Ihre Position im linken Spektrum zu bestimmen." +
            "Wenn Sie kein Linker sind, ist dieses Quiz offensichtlich nicht für Sie geeignet. Ihnen wird eine Erklärung vorgelegt, und Sie werden mit Ihrer Meinung zu den Fragen mit den Antworten <b>Stimme voll zu</b> bis <b>Stimme überhaupt nicht zu</b>, wobei sich jede Antwort geringfügig auf deine Punktzahl auswirkt. Die Fragen für die einzelnen Achsen werden nacheinander und nicht gestreut dargestellt. Am Ende des Quiz werden deine Antworten mit dem für jeden Wert maximal möglichen Wert verglichen. Damit geben Sie einen Prozentsatz. Antworte ehrlich! <br/> <br/>" +
            "Der Test enthält <b><u><span id='numOfQuestions'></span></u></b> Fragen.",
        "ko": `LeftValues는 <a href="https://8values.github.io/">8values</a>의 영감을 받아 좌익 스펙트럼 상에서 당신의 위치를 파악하기 위해 만들어진 좌익 설문입니다. 만약 당신이 좌파가 아니라면, 이 설문은 당신에게 적합하지 않을 것입니다.
        각 문항을 살펴보고 <b>매우 동의함</b>과 <b>결코 동의하지 않음</b> 사이의 답변을 선택하면, 각각의 답변이 당신의 점수에 조금씩 영향을 주게 될 것입니다.
        각 축에 해당하는 문항은 순서대로 표시됩니다.
        설문 마지막에 당신의 답변에 기초한 점수가 각각의 가치(values)가 가질 수 있는 최댓값에 대한 백분율로 표시됩니다.
        정직하게 답하십시오.<br/><br/> 이 설문에는 <b><u><span id="numOfQuestions"></span></u></b> 개의 문항이 있습니다.`,
        "ru": "LeftValues — это ''левая'' политическая викторина, вдохновлённая и основанная на викторине <a href='https://8values.github.io/'>8values</a>, цель которой — определить вашу позицию на левом политическом спектре. " +
            "Если вы не придерживаетесь левых взглядов, эта викторина, очевидно, не подходит для вас. Вам будут даны утверждения, по каждому из которых вы должны ответить своим мнением, от <b>Полностью согласен</b> до <b>Полностью не согласен</b>, каждый ответ будет слегка влиять на ваши значения по каждой оси. Вопросы по каждой из осей представлены по порядку, а не разбросаны в случайном порядке. В конце викторины, ваши ответы будут сравниваться с максимально возможным для каждого значения, таким образом, давая вам процент. Отвечайте честно!<br/><br/>" +
            "В данном тесте <b><u><span id='numOfQuestions'></span></u></b> вопросов.",
        "cn": "LeftValues是一个确定你在左翼光谱中的位置的左派测试，受<a href='https://8values.github.io/'>8values测试</a>启发并基于其制作。" +
            "如果你不是左派，这个测试明显不适合你。你会看到一系列观点，然后你需要回答你对这些观点的看法。从<b>强烈同意</b>到<b>强烈反对</b>，每个回答都会影响你的分数。关于每个坐标轴的问题将依次给出，而不是打乱的。测试结束时，你的答案会和每个价值观的最大可能值做比较，从而得出一个百分比。请诚实作答！<br/><br/>" +
            "测试中一共有<b><u><span id='numOfQuestions'></span></u></b>个问题。"
    },
    "index-h2-whatvalues": {
        "en": "What are the values?",
        "de": "Was sind die Werte?",
        "ko": "가치(values)는 무엇입니까?",
        "ru": "За что отвечают значения?",
        "cn": "这些价值观是什么？"
    },
    "index-sixaxes": {
        "en": "There are currently seven axes, each of which has two opposing values. They are:",
        "de": "Derzeit gibt es sechs Achsen, von denen jede zwei entgegengesetzte Werte hat. Sie sind:",
        "ko": "현재 6개의 축이 있습니다. 각각의 축은 아래와 같은 상반되는 두 개의 가치를 갖게 됩니다.:",
        "ru": "Есть семь независимых осей, и каждая имеет две противоположные ценности, присвоенные им.",
        "cn": "当前一共有七个坐标轴，其各自代表了一对相反的价值观。它们是："
    },
    "index-rev-desc": {
        "en": "<b style='color:#890000;'>Revolution</b> <b>vs.</b> <b style='color:#FC5959;'>Reform</b><br/>" +
            "Those with a higher revolution score tend to support a radical and rapid overthrow of the capitalist system through a mass uprising. Those with a higher reform score tend to favor inducing gradual changes within capitalist structures, such as liberal democracy, with the eventual goal of reaching socialism.",
        "de": "<b style='color:#890000;'>Revolution</b> <b>vs.</b> <b style='color:#FC5959;'>Reform</b><br/>" +
            "Diejenigen mit einem höheren Revolutionswert unterstützen tendenziell einen radikalen und raschen Sturz des kapitalistischen Systems durch einen Massenaufstand. Diejenigen mit einem höheren Reformwert tendieren dazu, allmähliche Veränderungen in kapitalistischen Strukturen wie der liberalen Demokratie herbeizuführen, mit dem eventuellen Ziel des Sozialismus.",
        "ko": `<b style="color:#890000;">혁명</b> <b>vs.</b> <b style="color:#FC5959;">개혁</b><br/>
        혁명 점수가 높은 사람들은 대중 봉기를 통한 자본주의체제의 급진적이고 빠른 전복을 지지하는 경향이 있습니다. 개혁 점수가 높은 사람들은 자유주의 민주주의와 같은 자본주의 구조 내에서 점진적으로 사회주의에 도달하려는 목표를 가지고 변화를 유도하는 경향이 있습니다.`,
        "ru": "<b style='color:#890000;'>Революция</b> <b>vs.</b> <b style='color:#FC5959;'>Реформы</b><br/>" +
            "Те, кто имеет более высокий балл Революции, склонны поддерживать радикальное и быстрое свержение капиталистической системы посредством массового восстания. Те, кто имеет более высокий балл Реформ, склонны выступать за постепенные изменения внутри капиталистических структур, таких как либеральная демократия, с конечной целью достижения социализма.",
        "cn": "<b style='color:#890000;'>革命</b> <b>vs.</b> <b style='color:#FC5959;'>改良</b><br/>" +
            "革命得分较高的人倾向于支持通过大规模起义来激进和迅速地推翻资本主义制度。改革得分较高的人倾向于支持在资本主义结构（如自由民主制）中引导渐进的变化，最终目标是实现社会主义。"
    },
    "index-sci-desc": {
        "en": "<b style='color:#88232B;'>Scientific</b> <b>vs.</b> <b style='color:#7F0037;'>Utopian</b><br/>" +
            "Those with a higher scientific score tend to support or sympathize with the Marxist analysis of society along the lines of dialectical materialism. Those with a higher utopian score tend to believe in a more idealistic analysis of society and reject materialist approaches.",
        "de": "<b style='color:#88232B;'>Wissenschaftlich</b> <b>vs.</b> <b style='color:#7F0037;'>Utopisch</b><br/>" +
            "Diejenigen mit einer höheren wissenschaftlichen Punktzahl neigen dazu, die marxistische Gesellschaftsanalyse im Sinne des dialektischen Materialismus zu unterstützen oder zu sympathisieren. Diejenigen mit einer höheren utopischen Bewertung neigen dazu, an eine idealistischere Analyse der Gesellschaft zu glauben und materialistische Ansätze abzulehnen.",
        "ko": `<b style="color:#88232B;">과학주의</b> <b>vs.</b> <b style="color:#7F0037;">공상주의</b><br/> 과학주의 점수가 높은 사람들은 변증법적 유물론의 기준으로 사회에 대한 마르크스주의 분석을 지지하거나 공감하는 경향이 있습니다. 공상주의 점수가 높은 사람들은 사회에 대한 이상적인 분석을 믿고 물질주의적 접근을 거부하는 경향이 있습니다.`,
        "ru": "<b style='color:#88232B;'>Научность</b> <b>vs.</b> <b style='color:#7F0037;'>Утопия</b><br/>" +
            "Те, кто имеет более высокий балл Научности, склонны поддерживать или симпатизировать Марксистскому анализу общества по линии диалектического материализма. Те, кто имеет более высокий балл Утопии, склонны верить в более идеалистический анализ общества и отвергать материалистические подходы.",
        "cn": "<b style='color:#88232B;'>科学社会主义</b> <b>vs.</b> <b style='color:#7F0037;'>空想社会主义</b><br/>" +
            "科学社会主义得分较高的人倾向于支持或赞同对社会采用马克思主义的辩证唯物主义分析。空想社会主义得分较高的人倾向于相信对社会采用更理想主义的分析，而拒绝唯物主义的方法。"
    },
    "index-cent-desc": {
        "en": "<b style='color:#560000;'>Central</b> <b>vs.</b> <b style='color:#000000;'>Decentral</b><br/>" +
            "Those with a higher central score tend to support an economic structure based around centralized national planning. Those with a higher decentral score tend to support an economic structure based around decentralized planning, usually on a more localized scale.",
        "de": "<b style='color:#560000;'>Zentralisiert</b> <b>vs.</b> <b style='color:#000000;'>Dezentralisiert</b><br/>" +
            "Diejenigen mit einer höheren zentralen Punktzahl neigen dazu, eine Wirtschaftsstruktur zu unterstützen, die auf einer zentralisierten nationalen Planung beruht. Diejenigen mit einer höheren dezentralen Punktzahl neigen dazu, eine Wirtschaftsstruktur zu unterstützen, die auf einer dezentralen Planung beruht, normalerweise in einem lokaleren Maßstab.",
        "ko": `<b style="color:#560000;">중앙집권주의</b> <b>vs.</b> <b style="color:#000000;">분권주의</b><br/> 중앙집권주의 점수가 높은 사람들은 중앙집중식 국가계획을 기반한 경제 구조를 지지하는 경향이 있습니다. 분권주의 점수가 높은 사람들은 분산계획을 중심으로 한 경제 구조를 지지하는 경향이 있습니다.`,
        "ru": "<b style='color:#560000;'>Централизация</b> <b>vs.</b> <b style='color:#000000;'>Децентрализация</b><br/>" +
            "Те, кто имеет более высокий балл Централизации, как правило, поддерживают экономическую структуру, основанную на централизованном национальном планировании. Те, кто имеет более высокий балл Децентрализации, как правило, поддерживают экономическую структуру, основанную на децентрализованном планировании, как правило, на более локальном уровне.",
        "cn": "<b style='color:#560000;'>集权</b> <b>vs.</b> <b style='color:#000000;'>分权</b><br/>" +
            "集权得分较高的人倾向于支持基于国家中央计划的经济结构。分权得分较高的人倾向于支持基于分散计划的经济结构，通常更侧重于地方。"
    },
    "index-int-desc": {
        "en": "<b style='color:#782F52;'>International</b> <b>vs.</b> <b style='color:#7F3300;'>National</b><br/>" +
            "Those with a higher international score tend to support forming an international socialist movement, often with the eventual goal of abolishing nations. Those with a higher national score tend to prioritize building socialism within existing borders and reject the goal of a world socialist republic.",
        "de": "<b style='color:#782F52;'>International</b> <b>vs.</b> <b style='color:#7F3300;'>National</b><br/>" +
            "Diejenigen mit einer höheren internationalen Punktzahl neigen dazu, die Bildung einer internationalen sozialistischen Bewegung zu unterstützen, oft mit dem Ziel, Nationen abzuschaffen. Diejenigen mit einer höheren nationalen Punktzahl neigen dazu, den Aufbau des Sozialismus innerhalb der bestehenden Grenzen zu priorisieren und das Ziel einer sozialistischen Weltrepublik abzulehnen.",
        "ko": `<b style="color:#782F52;">세계</b> <b>vs.</b> <b style="color:#7F3300;">국가</b><br/> 세계주의 점수가 높은 사람들은 종종 국가를 폐지하겠다는 궁극적 목표를 가지고 국제 사회주의 운동을 지원하는 경향이 있습니다. 높은 국가주의 점수를 받은 사람들은 기존 국경 내에서 사회주의 구축을 우선하고 국제 사회주의 공화국의 목표는 거부하는 경향이 있습니다.`,
        "ru": "<b style='color:#782F52;'>Интернационализм</b> <b>vs.</b> <b style='color:#7F3300;'>Национализм</b><br/>" +
            "Те, кто имеет более высокий балл Интернационализма, как правило, поддерживают формирование международного социалистического движения, зачастую с конечной целью ликвидации государств. Те, кто имеет более высокий балл Национализма, склонны отдавать приоритет построению социализма в рамках существующих границ и отвергать цель мировой социалистической республики.",
        "cn": "<b style='color:#782F52;'>国际主义</b> <b>vs.</b> <b style='color:#7F3300;'>民族主义</b><br/>" +
            "国际主义得分较高的人倾向于支持建立国际社会主义运动，其最终目标往往是废除国家。民族主义得分较高的人倾向于优先在现有国界内建设社会主义，而拒绝世界社会主义共和国的目标。"
    },
    "index-party-desc": {
        "en": "<b style='color:#963B33;'>Party</b> <b>vs.</b> <b style='color:#7F333B;'>Union</b><br/>" +
            "Those with a higher party score tend to favor using political parties as the basis of a socialist movement. Those with a higher union score tend to favor using trade unions and other forms of mass organization as a basis of a socialist movement. Being pro-party does not necessarily mean you oppose unions and vice versa, it is more about preference.",
        "de": "<b style='color:#963B33;'>Partei</b> <b>vs.</b> <b style='color:#7F333B;'>Gesellschaft</b><br/>" +
            "Diejenigen mit einer höheren Parteibewertung bevorzugen es, politische Parteien als Grundlage einer sozialistischen Bewegung zu verwenden. Diejenigen mit einer höheren Gewerkschaftsbewertung bevorzugen es, Gewerkschaften und andere Formen der Massenorganisation als Grundlage einer sozialistischen Bewegung zu verwenden. Partei bedeutet nicht unbedingt, dass Sie gegen Gewerkschaften sind und umgekehrt, es geht mehr um Präferenzen.",
        "ko": `<b style="color:#963B33;">정당</b> <b>vs.</b> <b style="color:#7F333B;">조합</b><br/> 정당주의 점수가 높은 사람들은 정당을 사회주의 운동의 기초로 삼는 것을 선호하는 경향이 있습니다. 조합주의 점수가 높은 사람들은 조합과 다른 형태의 대중조직을 사회주의 운동의 기초로 삼는 것을 좋아합니다. 정당이라고 해서 반드시 조합에 반대한다는 의미는 아니며 그 반대 또한 마찬가지입니다.`,
        "ru": "<b style='color:#963B33;'>Партия</b> <b>vs.</b> <b style='color:#7F333B;'>Профсоюзы</b><br/>" +
            "Те, кто имеет более высокий балл Партии, склонны отдавать предпочтение использованию политических партий в качестве основы социалистического движения. Те, кто имеет более высокий балл Профсоюзов, склонны отдавать предпочтение использованию профсоюзов и других форм массовой организации как основы социалистического движения. Быть пропартийным не обязательно означает выступать против профсоюзов, и наоборот, речь идёт скорее о предпочтениях.",
        "cn": "<b style='color:#963B33;'>党派</b> <b>vs.</b> <b style='color:#7F333B;'>工会</b><br/>" +
            "党派得分较高的人倾向于把政党作为社会主义运动的基础。工会得分较高的人倾向于把工会和其他形式的群众组织作为社会主义运动的基础。倾向党派并不一定意味着你反对工会，反之亦然，这更多的是体现一种偏好。"
    },
    "index-prod-desc": {
        "en": "<b style='color:#804E00;'>Production</b> <b>vs.</b> <b style='color:#76890B;'>Nature</b><br/>" +
            "Those with a higher production score tend to prioritize industrial output and self-sustainability over ecological goals. Those with a higher nature score tend to support an environmentally oriented economy with strict ecological protections.",
        "de": "<b style='color:#804E00;'>Produktion</b> <b>vs.</b> <b style='color:#76890B;'>Ökologie</b><br/>" +
            "Diejenigen mit einem höheren Produktionsfaktor tendieren dazu, die Industrieproduktion und die Selbstverträglichkeit vor ökologischen Zielen zu priorisieren. Diejenigen mit einem höheren ökologischen Faktor tendieren dazu, eine umweltorientierte Wirtschaft mit strengen ökologischen Schutzmaßnahmen zu unterstützen.",
        "ko": `<b style="color:#804E00;">생산</b> <b>vs.</b> <b style="color:#76890B;">생태</b><br/> 생산주의 점수가 높을 수록 생태학적 목표보다 산업 생산량과 산업의 지속가능성을 우선시하는 경향이 있습니다. 높은 생태주의 점수를 가진 사람들은 엄격한 생태 보호를 통한 환경 지향적 경제를 지지하는 경향이 있습니다.`,
        "ru": "<b style='color:#804E00;'>Производство</b> <b>vs.</b> <b style='color:#586808;'>Природа</b><br/>" +
            "Те, кто имеет более высокий балл Производства, склонны отдавать предпочтение промышленному производству и самообеспеченности перед экологическими целями. Те, кто имеет более высокий балл Природы, имеют тенденцию поддерживать экологически ориентированную экономику со строгой экологической защитой.",
        "cn": "<b style='color:#804E00;'>生产</b> <b>vs.</b> <b style='color:#76890B;'>自然</b><br/>" +
            "生产得分较高的人倾向于将工业产出和自给自足置于生态目标之上。自然得分较高的人倾向于支持采取严格的生态保护措施的环境导向型经济。"
    },
    "index-cons-desc": {
        "en": "<b style='color:#27577A;'>Conservative</b> <b>vs.</b> <b style='color:#C4A717;'>Progressive</b><br/>" +
            "Those with a higher conservative score tend to favor more socially conservative policies and views. Those with a higher progressive score tend to support more socially progressive policies and views.",
        "de": "<b style='color:#27577A;'>Konservativ</b> <b>vs.</b> <b style='color:#C4A717;'>Progressiv</b><br/>" +
            "Diejenigen mit einer höheren konservativen Bewertung tendieren dazu, sozial konservativere Strategien und Ansichten zu bevorzugen. Diejenigen mit einer höheren progressiven Punktzahl unterstützen tendenziell eine sozial progressivere Politik und Sichtweise.",
        "ko": `<b style="color:#27577A;">보수</b> <b>vs.</b> <b style="color:#C4A717;">진보</b><br/> 보수주의 점수가 높은 사람들은 사회적으로 보수적인 정책과 견해를 선호하는 경향이 있습니다. 진보주의 점수가 높은 사람들은 사회적으로 진보적인 정책과 견해를 지지하는 경향이 있습니다.`,
        "ru": "<b style='color:#27577A;'>Консерватизм</b> <b>vs.</b> <b style='color:#C4A717;'>Прогрессивизм</b><br/>" +
            "Те, кто имеет более высокий балл Консерватизма, склонны отдавать предпочтение более социально консервативной политике и взглядам. Те, кто имеет более высокий балл Прогрессивизма, склонны поддерживать более социально прогрессивную политику и взгляды.",
        "cn": "<b style='color:#27577A;'>保守主义</b> <b>vs.</b> <b style='color:#C4A717;'>进步主义</b><br/>" +
            "保守主义得分较高的人倾向于支持在社会方面更保守的政策和观点。进步主义得分较高的人倾向于支持在社会方面更进步的政策和观点。"
    },
    "index-h2-closest": {
        "en": "What does \"Closest Match\" mean in the results?",
        "de": "Was bedeutet \"Nächste Übereinstimmung\" in den Ergebnissen?",
        "ko": `결과의 "가장 일치하는 성향"이 무엇을 의미합니까?`,
        "ru": "Что означает \"Ближайшее совпадение\" в результатах?",
        "cn": "结果中的\“最接近的匹配\”意味着什么？"
    },
    "index-p-similar": {
        "en": "Similar to 8values, this quiz will attempt to match you with a specific leftist ideology. There are currently thirteen possible ideologies, with more to come in the future. This is a work in progress and may not work as intended. Suggestions are very welcome. The current ideologies are: Marxism-Leninism, Orthodox Marxism, Eco-Marxism, Centrist Marxism, Council Communism, Left Communism, Anarcho-Communism, Eco-Anarchism, Market Anarchism, Utopian Socialism, Democratic Socialism, Social Democracy and Left-Wing Nationalism.",
        "de": "Ähnlich wie bei 8values wird dieses Quiz versuchen, Sie mit einer bestimmten linken Ideologie in Einklang zu bringen. Derzeit gibt es zwölf mögliche Ideologien, von denen in Zukunft weitere folgen werden. Dies ist eine laufende Arbeit und funktioniert möglicherweise nicht wie beabsichtigt. Vorschläge sind sehr willkommen. Die gegenwärtigen Ideologien sind: Marxismus-Leninismus, orthodoxer Marxismus, Öko-Marxismus, zentristischer Marxismus, Kommunismus des Rates, Linkskommunismus, Anarcho-Kommunismus, Öko-Anarchismus, Marktanarchismus, utopischer Sozialismus, demokratischer Sozialismus, Sozialdemokratie und Linksnationalismus.",
        "ko": "8Values와 비슷하게, 이 설문은 특정한 좌파 이념과 당신을 짝지으려 할 것입니다. 현재 12개의 가능한 이념이 있고, 미래에는 더 많은 이념들이 있을 수 있습니다. 이는 진행중인 작업이며, 의도한대로 작동하지 않을 수도 있습니다. 제안은 언제나 환영합니다. 현재 준비된 이념은 마르크스-레닌주의, 정통 마르크스주의, 생태-마르크스주의, 중도 마르크스주의, 평의회 공산주의, 좌익 공산주의, 아나코-코뮤니즘, 생태-아나키즘, 시장 아나키즘, 공상적 사회주의, 민주사회주의, 사회민주주의 등이 있습니다.",
        "ru": "Подобно 8values, эта викторина также пытается сопоставить вас с политической идеологией. В настоящее время в тесте существует тринадцать идеологий, и в будущем их будет ещё больше. Это незавершённая работа и гораздо менее точная, чем значения и оси, так что не воспринимайте её слишком серьезно. Предложения по улучшению также очень приветствуются. В настоящее время существуют следующие идеологии: Марксизм-ленинизм, Ортодоксальный марксизм, Экосоциализм, Центристский марксизм, Коммунизм рабочих советов, Левый коммунизм, Анархо-коммунизм, Зелёный анархизм, Рыночный анархизм, Утопический социализм, Демократический социализм, Социал-демократия и Левый национализм.",
        "cn": "类似于8Values，这个测验试图将你与一种特定的左派意识形态相匹配。当前有13种可能的意识形态，未来还会有更多。这是一个正在进行的项目，可能无法按预期工作。非常欢迎提出建议。当前的意识形态有:<br/>马克思列宁主义（Marxism-Leninism）、正统马克思主义（Orthodox Marxism）、生态马克思主义（Eco-Marxism）、中间派马克思主义（Centrist Marxism）、委员会共产主义（Council Communism）、左翼共产主义（Left Communism）、无政府共产主义（Anarcho-Communism）、生态无政府主义（Eco-Anarchism）、市场无政府主义（Market Anarchism）、空想社会主义（Utopian Socialism）、民主社会主义（Democratic Socialism）、社会民主主义（Social Democracy）和左翼民族主义（Left-Wing Nationalism）。"
    },
    "index-h2-scores": {
        "en": "I don't like my scores!",
        "de": "Ich mag meine Ergebnisse nicht!",
        "ko": "제 점수가 마음에 들지 않습니다",
        "ru": "Мне не нравятся мои результаты!",
        "cn": "我不喜欢我的分数！"
    },
    "index-p-scores": {
        "en": "Please remember that you are not intended to get a 100% score in any of the categories. The point of the quiz is to challenge your views. If you have any suggestions or constructive criticism please fill out this <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>short form</a> or open an issue on the <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub Page</a>.",
        "de": "Bitte denken Sie daran, dass Sie in keiner der Kategorien eine 100%-ige Punktzahl erzielen möchten. Ziel des Quiz ist es, Ihre Ansichten zu hinterfragen. Wenn Sie Anregungen oder konstruktive Kritik haben, füllen Sie bitte dieses <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>Kurzformular</a> aus oder öffnen Sie ein Problem auf der <a href='https://github.com/LeftValues/leftvalues.github.io'>GitHub-Seite</a>.",
        "ko": `어떠한 범주에서든 100%의 점수를 얻을 수 없다는 것을 기억하십시오. 이 설문의 목적은 당신 자신의 관점에 직면하는 것에 있습니다. 의견이나 건설적인 비판은 <a href="https://forms.gle/6WZYMb5GXkkDLhxr5">이 양식</a>이나 <a href="https://github.com/LeftValues/leftvalues.github.io">GitHub Page</a>의 이슈를 통해 개진할 수 있습니다.`,
        "ru": "Пожалуйста, помните, что вы не намерены получить 100%-ый результат ни в одной из осей. Смысл викторины заключается в том, чтобы оспорить ваши взгляды. Если у вас какие-либо предложения или конструктивная критика, то, пожалуйста, заполните эту <a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>короткую форму</a> или откройте вкладку ''issue'' на <a href='https://github.com/LeftValues/leftvalues.github.io'>странице GitHub</a>.",
        "cn": "请记住，你没必要在任何一类中获得100%的分数。测验的重点是挑战你的观点。如果你有任何建议或是建设性的批评，请填写<a href='https://forms.gle/6WZYMb5GXkkDLhxr5'>这份表格</a>或是在<a href='https://github.com/LeftValues/leftvalues.github.io'>该项目的GitHub Page</a>上开个issue。"
    },
    "index-h2-tracked": {
        "en": "Am I being tracked?",
        "de": "Werde ich getracked?",
        "ko": "제가 추적되고 있습니까?",
        "ru": "За мной следят?",
        "cn": "我被追踪了吗？"
    },
    "index-p-tracked": {
        "en": "LeftValues does utilize very basic tracking to get an idea of the amount of visitors. No personal information is collected and answers/results are not saved. If you do not believe me, the code is open source and available for all to see. For transparency purposes, the collected data for the first week since release can be viewed on this <a href='https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing'>Google Document</a>.",
        "de": "LeftValues verwendet ein sehr einfaches Tracking, um sich einen Überblick über die Anzahl der Besucher zu verschaffen. Es werden keine persönlichen Informationen gesammelt und Antworten/Ergebnisse werden nicht gespeichert. Wenn Sie mir nicht glauben, ist der Code Open Source und für alle sichtbar.",
        "ko": `LeftValues는 방문자 수를 파악하기 위해 매우 기본적인 추적 기능을 사용하고 있습니다. 개인 정보는 수집되지 않으며 응답과 결과는 저장되지 않습니다. 이 서비스를 위해 사용한 코드는 모든 사람들에게 오픈되어 있으므로 만일 당신이 우릴 믿지 못하겠다면 살펴볼 수 있습니다. 우리가 수집하는 정보의 투명성을 위해 이 서비스가 오픈된 지 첫 주동안 수집된 데이터를 <a href="https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing">Google Document</a>에 공개해두었습니다.`,
        "ru": "LeftValues использует очень простое отслеживание, чтобы получить представление о количестве посетителей. Личная информация не собирается, а ответы/результаты не сохраняются. Если вы нам не верите, код открыт и доступен для всех. В целях обеспечения прозрачности, собранные данные за первую неделю с момента выпуска можно просмотреть в этом <a href='https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing'>Гугл-документе</a>.",
        "cn": "LeftValues确实使用了非常基本的追踪方法来了解访问者的数量。不会收集任何个人信息，也不会保存答案/结果。如果你不相信我，代码是开源的，可供所有人查看。为了透明起见，发布后第一周收集的数据可以在这份<a href='https://docs.google.com/document/d/1pcnZdMkEmGXgLMS8izvqd_JEcgjuFgUnfqCRO32q2go/edit?usp=sharing'>Google文档</a>中查看。"
    }
}

langElements.forEach((element) => {
    let value = element.getAttribute("data-i18n")
    if (value in i18n && userLang in i18n[value]) {
        element.innerHTML = i18n[value][userLang]
    }
})

let langPicker = document.getElementById("langPicker")
languages.forEach(language => {
    let option = document.createElement("option");
    option.text = language.name
    option.value = language.code
    langPicker.add(option);
})
if (langPicker) {
    for (let option of langPicker.options) {
        if (option.value == userLang) {
            langPicker.value = userLang
        }
    }

    langPicker.onchange = function() {
        let language = langPicker.options[langPicker.selectedIndex].value
        setCookie("lang", language, 5)
        location.reload()
    }
}