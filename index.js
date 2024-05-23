const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PythonShell } = require('python-shell');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const modelScript = 'model.py';


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public", 'form.html'));
});

// Define route for form submission
app.post('/', (req, res) => {
    console.log('Form submitted');
    const { answers, tipi_answers, education, urban, gender, age_group, religion, orientation, race, married } = req.body;

    // Prepare data for model input
    const inputData = {
        answers: answers.split(','),
        tipi_answers: tipi_answers.split(','),
        education,
        urban,
        gender,
        age_group,
        religion,
        orientation,
        race,
        married
    };

    // Call Python script for model prediction
    PythonShell.run(modelScript, { args: [JSON.stringify(inputData)] }, (err, result) => {
        if (err) {
            console.error('Python script execution error:', err);
            res.status(500).send('Internal server error');
        } else {
            console.log('Prediction result:', result);
            res.render('result.html', { result: result[0] });
        }
    });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
