const questions = [
    {
        text: "Як ти зазвичай реагуєш на стрес?",
        options: [
            { text: "Спочатку напружуюсь, але тримаю контроль.", type: "tension" },
            { text: "Зберігаю стабільність і дію планово.", type: "stable" },
            { text: "Важко, але я намагаюся змінити щось у собі.", type: "recovering" },
            { text: "Стрес дає мені поштовх до розвитку.", type: "breakthrough" }
        ]
    },

    {
        text: "Що ти робиш, коли ситуація невизначена?",
        options: [
            { text: "Мене це виснажує, але я рухаюсь далі.", type: "recovering" },
            { text: "Вмикаю режим виживання та контролюю все.", type: "tension" },
            { text: "Я спокійно адаптуюсь.", type: "stable" },
            { text: "Бачу можливості та гнучко змінюю стратегію.", type: "breakthrough" }
        ]
    },

    {
        text: "Що ти робиш, коли щось іде не за планом?",
        options: [
            { text: "Переплановую і йду далі.", type: "stable" },
            { text: "Сильно переживаю, але не зупиняюсь.", type: "tension" },
            { text: "Вчуся приймати інакший результат.", type: "recovering" },
            { text: "Вмикаю креатив і знаходжу нове рішення.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти ставишся до конфліктів?",
        options: [
            { text: "Уникаю, але потім аналізую.", type: "recovering" },
            { text: "Тримаю кордони і вирішую конструктивно.", type: "stable" },
            { text: "Мене швидко тригерить.", type: "tension" },
            { text: "Відчуваю сили говорити прямо і чесно.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти відновлюєшся після складного дня?",
        options: [
            { text: "Дисципліна: сон, порядок, тиша.", type: "stable" },
            { text: "Відновлення важке, потрібен час.", type: "recovering" },
            { text: "Відволікаюсь, але ресурс не повертається швидко.", type: "tension" },
            { text: "Знаходжу нове джерело сили та натхнення.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти приймаєш важкі рішення?",
        options: [
            { text: "Через аналіз і логіку.", type: "stable" },
            { text: "Через емоції і напругу.", type: "tension" },
            { text: "Через внутрішні зміни та самоусвідомлення.", type: "recovering" },
            { text: "Через інтуїцію та внутрішній імпульс.", type: "breakthrough" }
        ]
    },

    {
        text: "Твій внутрішній діалог звучить як:",
        options: [
            { text: "“Я мушу впоратися.”", type: "tension" },
            { text: "“Я розберусь спокійно.”", type: "stable" },
            { text: "“Я змінююсь і це нормально.”", type: "recovering" },
            { text: "“Настав мій час рухатися вперед.”", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти реагуєш на критику?",
        options: [
            { text: "Я спокійна: аналізую, беру корисне.", type: "stable" },
            { text: "Мене це чіпляє, але я тримаюсь.", type: "tension" },
            { text: "Прикро, але я працюю з цим.", type: "recovering" },
            { text: "Використовую як паливо для зростання.", type: "breakthrough" }
        ]
    },

    {
        text: "Що для тебе означає безпека?",
        options: [
            { text: "Фінансова стабільність і прогнозованість.", type: "stable" },
            { text: "Коли мене не тиснуть і не вимагають.", type: "tension" },
            { text: "Коли я сама будую нові опори.", type: "recovering" },
            { text: "Коли я впевнено рухаюся до великої мети.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти дієш, коли не знаєш, що робити?",
        options: [
            { text: "Розбираю на маленькі кроки.", type: "stable" },
            { text: "Панікую всередині, але дію.", type: "tension" },
            { text: "Шукаю підтримку та вчуся.", type: "recovering" },
            { text: "Роблю сміливий крок вперед.", type: "breakthrough" }
        ]
    },

    {
        text: "Твоя реакція на великі зміни:",
        options: [
            { text: "Я адаптуюсь, мені ок.", type: "stable" },
            { text: "Мені важко, але я тримаюся.", type: "tension" },
            { text: "Я вчуся не боятись і приймати нове.", type: "recovering" },
            { text: "Я бачу шанс змінити життя.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти ставишся до відповідальності?",
        options: [
            { text: "Несу спокійно, системно.", type: "stable" },
            { text: "Від неї буває важко дихати.", type: "tension" },
            { text: "Вчуся ставити межі.", type: "recovering" },
            { text: "Можу брати більше, коли маю візію.", type: "breakthrough" }
        ]
    },

    {
        text: "Твоя реакція на провали:",
        options: [
            { text: "Не люблю, але спокійно приймаю.", type: "stable" },
            { text: "Відчуваю сильне напруження.", type: "tension" },
            { text: "Переосмислюю і вчуся.", type: "recovering" },
            { text: "Провали — частина мого зростання.", type: "breakthrough" }
        ]
    },

    {
        text: "Як ти приймаєш допомогу?",
        options: [
            { text: "Мені складно, я звикла сама.", type: "tension" },
            { text: "Вчуся приймати.", type: "recovering" },
            { text: "Приймаю, коли це доречно.", type: "stable" },
            { text: "Легко приймаю, коли це веде до мети.", type: "breakthrough" }
        ]
    },

    {
        text: "Що дає тобі відчуття сили?",
        options: [
            { text: "Чіткість, структура, порядок.", type: "stable" },
            { text: "Коли я витримую чергове випробування.", type: "tension" },
            { text: "Коли я бачу, як змінююсь.", type: "recovering" },
            { text: "Коли я рухаюся до великої мрії.", type: "breakthrough" }
        ]
    },

    {
        text: "Твій шлях зараз схожий на:",
        options: [
            { text: "Стабільну рівну дорогу.", type: "stable" },
            { text: "Гору, яку я тягну на собі.", type: "tension" },
            { text: "Дорогу змін, де я вчуся новому.", type: "recovering" },
            { text: "Розгін перед великим стрибком.", type: "breakthrough" }
        ]
    }
];

let currentQuestion = 0;
let score = {
    stable: 0,
    tension: 0,
    recovering: 0,
    breakthrough: 0
};

function selectOption(type) {
    score[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        renderQuestion();
        updateProgress();
        updateStepNumber();
    } else {
        localStorage.setItem("resilienceScore", JSON.stringify(score));
        window.location.href = "result.html";
    }
}

function renderQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.text;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(opt.type);
        optionsContainer.appendChild(btn);
    });
}

function updateStepNumber() {
    document.getElementById("step-indicator").textContent =
        `Питання ${currentQuestion + 1} з ${questions.length}`;
}


function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar-fill").style.width = progress + "%";
}

window.onload = () => {
    renderQuestion();
    updateProgress();
};
