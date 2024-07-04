
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';  
// import * as tf from '@tensorflow/tfjs';


// let model;
// async function loadModel() {
//   model = await tf.loadLayersModel('../../../public/autocorrect_model.json');
// }
// loadModel();

// async function predict(data) {
//   // Asegúrate de que tus datos estén en el formato correcto
//   const tensorData = tf.tensor(data);

//   // Usa el modelo para hacer la predicción
//   const prediction = model.predict(tensorData);

//   // Imprime la predicción
//   prediction.print(model);
// }

// export default function ComboBox() {
//   return (

//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={predict()}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Movie" />}
//     />
//   );
// }

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   {
//     label: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { label: 'The Good, the Bad and the Ugly', year: 1966 },
//   { label: 'Fight Club', year: 1999 },
//   {
//     label: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//   },
//   {
//     label: 'Star Wars: Episode V - The Empire Strikes Back',
//     year: 1980,
//   },
//   { label: 'Forrest Gump', year: 1994 },
//   { label: 'Inception', year: 2010 },
//   {
//     label: 'The Lord of the Rings: The Two Towers',
//     year: 2002,
//   },
//   { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { label: 'Goodfellas', year: 1990 },
//   { label: 'The Matrix', year: 1999 },
//   { label: 'Seven Samurai', year: 1954 },
//   {
//     label: 'Star Wars: Episode IV - A New Hope',
//     year: 1977,
//   },
//   { label: 'City of God', year: 2002 },
//   { label: 'Se7en', year: 1995 },
//   { label: 'The Silence of the Lambs', year: 1991 },
//   { label: "It's a Wonderful Life", year: 1946 },
//   { label: 'Life Is Beautiful', year: 1997 },
//   { label: 'The Usual Suspects', year: 1995 },
//   { label: 'Léon: The Professional', year: 1994 },
//   { label: 'Spirited Away', year: 2001 },
//   { label: 'Saving Private Ryan', year: 1998 },
//   { label: 'Once Upon a Time in the West', year: 1968 },
//   { label: 'American History X', year: 1998 },
//   { label: 'Interstellar', year: 2014 },
//   { label: 'Casablanca', year: 1942 },
//   { label: 'City Lights', year: 1931 },
//   { label: 'Psycho', year: 1960 },
//   { label: 'The Green Mile', year: 1999 },
//   { label: 'The Intouchables', year: 2011 },
//   { label: 'Modern Times', year: 1936 },
//   { label: 'Raiders of the Lost Ark', year: 1981 },
//   { label: 'Rear Window', year: 1954 },
//   { label: 'The Pianist', year: 2002 },
//   { label: 'The Departed', year: 2006 },
//   { label: 'Terminator 2: Judgment Day', year: 1991 },
//   { label: 'Back to the Future', year: 1985 },
//   { label: 'Whiplash', year: 2014 },
//   { label: 'Gladiator', year: 2000 },
//   { label: 'Memento', year: 2000 },
//   { label: 'The Prestige', year: 2006 },
//   { label: 'The Lion King', year: 1994 },
//   { label: 'Apocalypse Now', year: 1979 },
//   { label: 'Alien', year: 1979 },
//   { label: 'Sunset Boulevard', year: 1950 },
//   {
//     label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     year: 1964,
//   },
//   { label: 'The Great Dictator', year: 1940 },
//   { label: 'Cinema Paradiso', year: 1988 },
//   { label: 'The Lives of Others', year: 2006 },
//   { label: 'Grave of the Fireflies', year: 1988 },
//   { label: 'Paths of Glory', year: 1957 },
//   { label: 'Django Unchained', year: 2012 },
//   { label: 'The Shining', year: 1980 },
//   { label: 'WALL·E', year: 2008 },
//   { label: 'American Beauty', year: 1999 },
//   { label: 'The Dark Knight Rises', year: 2012 },
//   { label: 'Princess Mononoke', year: 1997 },
//   { label: 'Aliens', year: 1986 },
//   { label: 'Oldboy', year: 2003 },
//   { label: 'Once Upon a Time in America', year: 1984 },
//   { label: 'Witness for the Prosecution', year: 1957 },
//   { label: 'Das Boot', year: 1981 },
//   { label: 'Citizen Kane', year: 1941 },
//   { label: 'North by Northwest', year: 1959 },
//   { label: 'Vertigo', year: 1958 },
//   {
//     label: 'Star Wars: Episode VI - Return of the Jedi',
//     year: 1983,
//   },
//   { label: 'Reservoir Dogs', year: 1992 },
//   { label: 'Braveheart', year: 1995 },
//   { label: 'M', year: 1931 },
//   { label: 'Requiem for a Dream', year: 2000 },
//   { label: 'Amélie', year: 2001 },
//   { label: 'A Clockwork Orange', year: 1971 },
//   { label: 'Like Stars on Earth', year: 2007 },
//   { label: 'Taxi Driver', year: 1976 },
//   { label: 'Lawrence of Arabia', year: 1962 },
//   { label: 'Double Indemnity', year: 1944 },
//   {
//     label: 'Eternal Sunshine of the Spotless Mind',
//     year: 2004,
//   },
//   { label: 'Amadeus', year: 1984 },
//   { label: 'To Kill a Mockingbird', year: 1962 },
//   { label: 'Toy Story 3', year: 2010 },
//   { label: 'Logan', year: 2017 },
//   { label: 'Full Metal Jacket', year: 1987 },
//   { label: 'Dangal', year: 2016 },
//   { label: 'The Sting', year: 1973 },
//   { label: '2001: A Space Odyssey', year: 1968 },
//   { label: "Singin' in the Rain", year: 1952 },
//   { label: 'Toy Story', year: 1995 },
//   { label: 'Bicycle Thieves', year: 1948 },
//   { label: 'The Kid', year: 1921 },
//   { label: 'Inglourious Basterds', year: 2009 },
//   { label: 'Snatch', year: 2000 },
//   { label: '3 Idiots', year: 2009 },
//   { label: 'Monty Python and the Holy Grail', year: 1975 },
// ];

import * as tf from '@tensorflow/tfjs';
const ALPHA_LEN = 26;
const sample_len = 1;
const max_len = 10;
let model;
// const tf = require('@tensorflow/tfjs');

let pred_labels;
export async function setup() {
    model = await create_model(max_len, ALPHA_LEN);

    model = await loadModelFromFile();

    document.getElementById('filled-basic').addEventListener('keyup', async () => {
        const pattern = new RegExp('^[a-z]{1,' + max_len + '}$');
        let pred_features = [];
        pred_features.push(document.getElementById('filled-basic').value);
        if (pred_features[0].length < sample_len + 1 || !pattern.test(pred_features[0])) {
            document.getElementById('pred_labels').style.display = 'none';
            document.getElementById('pred_labels').innerHTML = '';
            return;
        }
        pred_features = preprocessing_stage_2(pred_features, max_len);
        pred_features = preprocessing_stage_5(pred_features, max_len, ALPHA_LEN);
        pred_labels = await model.predict(pred_features);
        pred_labels = postprocessing_stage_1(pred_labels)
        pred_labels = postprocessing_stage_2(pred_labels, max_len)[0]
        pred_labels = pred_labels.join("");
        document.getElementById('pred_labels').style.display = 'block';
        document.getElementById('pred_labels').innerHTML = pred_labels;
    });

    document.getElementById('pred_labels').addEventListener('click', () => {
        document.getElementById('filled-basic').value = document.getElementById('pred_labels').innerHTML;

        document.getElementById('pred_labels').style.display = 'none';
    });
}

// funcion del script de html (scripts)

function preprocessing_stage_2(words,max_len){
    let int_words = [];
    for (let i in words){
        int_words.push(word_to_int(words[i],max_len))
    }
    return int_words;
}
function preprocessing_stage_5(words, max_len, alpha_len) {
    return tf.oneHot(tf.tensor2d(words, [words.length, max_len], 'int32'), alpha_len);
}
function postprocessing_stage_1(words){
    return words.argMax(-1).arraySync();
}
function postprocessing_stage_2(words,max_len){
    let results = [];
    for (let i in words){
        results.push(int_to_word(words[i],max_len));
    }
    return results;
}



function word_to_int (word,max_len){
    let encode = [];
    for (let i = 0; i < max_len; i++) {
        if(i<word.length){
        let letter = word.slice(i, i+1);
        encode.push(letter.charCodeAt(0)-96);
        }else{
        encode.push(0)
        }
    }
    return encode;
}

function int_to_word (word,max_len){
    // int [] = word
    // int = max_len
    let decode = []
    for (let i = 0; i < max_len; i++) {
        if(word[i]===0){
            decode.push("");
        }else{
            decode.push(String.fromCharCode(word[i]+96))
        }
        
    }
    return decode;
}
async function create_model(max_len,alpha_len){
    var model = tf.sequential();
    await model.add(tf.layers.lstm({
        units:alpha_len*2,
        inputShape:[max_len,alpha_len],
        dropout:0.2,
        recurrentDropout:0.2,
        useBias: true,
        returnSequences:true,
        activation:"relu"
    }))
    await model.add(tf.layers.timeDistributed({
        layer: tf.layers.dense({
        units: alpha_len,
        dropout:0.2,
        activation:"softmax"
        })
    }));
    model.summary();
    return model
}

async function loadModelFromFile() {
    try {
        const modelUrl = 'http://localhost:3000/autocorrect_model.json'

        return await tf.loadLayersModel(tf.io.browserHTTPRequest(modelUrl));
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
}


