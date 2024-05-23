const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const { PythonShell } = require('python-shell');

const app = express();

const questions = [
    "I found myself getting upset by quite trivial things.",
    "I was aware of dryness of my mouth.",
    "I couldn't seem to experience any positive feeling at all.",
    "I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion).",
    "I just couldn't seem to get going.",
    "I tended to over-react to situations.",
    "I had a feeling of shakiness (eg, legs going to give way).",
    "I found it difficult to relax.",
    "I found myself in situations that made me so anxious I was most relieved when they ended.",
    "I felt that I had nothing to look forward to.",
    "I found myself getting upset rather easily.",
    "I felt that I was using a lot of nervous energy.",
    "I felt sad and depressed.",
    "I found myself getting impatient when I was delayed in any way (eg, elevators, traffic lights, being kept waiting).",
    "I had a feeling of faintness.",
    "I felt that I had lost interest in just about everything.",
    "I felt I wasn't worth much as a person.",
    "I felt that I was rather touchy.",
    "I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertion.",
    "I felt scared without any good reason.",
    "I felt that life wasn't worthwhile.",
    "I found it hard to wind down.",
    "I had difficulty in swallowing.",
    "I couldn't seem to get any enjoyment out of the things I did.",
    "I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat).",
    "I felt down-hearted and blue.",
    "I found that I was very irritable.",
    "I felt I was close to panic.",
    "I found it hard to calm down after something upset me.",
    "I feared that I would be 'thrown' by some trivial but unfamiliar task.",
    "I was unable to become enthusiastic about anything.",
    "I found it difficult to tolerate interruptions to what I was doing.",
    "I was in a state of nervous tension.",
    "I felt I was pretty worthless.",
    "I was intolerant of anything that kept me from getting on with what I was doing.",
    "I felt terrified.",
    "I could see nothing in the future to be hopeful about.",
    "I felt that life was meaningless.",
    "I found myself getting agitated.",
    "I was worried about situations in which I might panic and make a fool of myself.",
    "I experienced trembling (eg, in the hands).",
    "I found it difficult to work up the initiative to do things."
]

const tipi_questions = [
    "Extraverted, enthusiastic.",
    "Critical, quarrelsome.",
    "Dependable, self-disciplined.",
    "Anxious, easily upset.",
    "Open to new experiences, complex.",
    "Reserved, quiet.",
    "Sympathetic, warm.",
    "Disorganized, careless.",
    "Calm, emotionally stable.",
    "Conventional, uncreative."
]

app.use(bodyParser.urlencoded({ extended: true }));

// const modelScript = 'model.py';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,"public", 'form.html'));
    res.render('home', {questions : questions, tipi_questions : tipi_questions});
});

// Define route for form submission
app.post('/', (req, res) => {
    console.log('Form submitted');
    const { answers, tipi_answers, education, urban, gender, age_group, religion, orientation, race, married } = req.body;

    const inputData = {
        answers,
        tipi_answers,
        education,
        urban,
        gender,
        age_group,
        religion,
        orientation,
        race,
        married
    };

    console.log(inputData);
    // console.log(typeof inputData)

    res.render("result", {result : "Normal"});

    // Call Python script for model prediction
    // PythonShell.run(modelScript, { args: [JSON.stringify(inputData)] }, (err, result) => {
    //     if (err) {
    //         console.error('Python script execution error:', err);
    //         res.status(500).send('Internal server error');
    //     } else {
    //         console.log('Prediction result:', result);
    //     }
    // });
});

// Serve static files (HTML, CSS, JS)


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
