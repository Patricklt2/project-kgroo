import React, { useState, useEffect } from 'react';

//Pulls a random word from ninjaApi
const getRandomWord = async () => {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'JqsVofiDaUF8g07gSPhx6g==gPTKRZQ9dqfnmXMb',
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        return result.word;
    } catch (error) {
        throw new Error('Error fetching random word');
    }
};

//Pulls the randomWord's def from ninjaApi
const getWordDef = async (word) => {

    try {
        const response = await fetch('https://api.api-ninjas.com/v1/dictionary?word=' + word, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'JqsVofiDaUF8g07gSPhx6g==gPTKRZQ9dqfnmXMb',
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        console.log('Word Definition API Response:', result.definition);

        if (result.definition != null && result.definition.length > 0) {
            return result.definition;
        } else {
            return null;
        }
    } catch (error) {
        throw new Error('Error fetching word definition');
    }
};


//Function that returns both the word and its def.
function WordAndDef() {
    const [randomWord, setRandomWord] = useState('');
    const [definition, setDefinition] = useState('');

    useEffect(() => {
        const fetchRandomWordAndDefinition = async () => {
            try {
                const word = await getRandomWord();
                setRandomWord(word);

                const def = await getWordDef(word.toString());
                const arr = def.split("2.")
                setDefinition(arr[0]);

            } catch (error) {
                console.log(error);
            }
        };

        fetchRandomWordAndDefinition().then();
    }, []);
    return [randomWord,definition];
}


//Presents full frontEnd of the crucigram
function Crucigrama() {
    const [randomWord, definition] = WordAndDef();
    return (
        <>
            <div className="Crucigrama">
                <h1 className="CruciHead">Word: {randomWord}</h1>
                <p className="p">Definition: {definition}</p>
            </div>
        </>
    );
}
export default Crucigrama;