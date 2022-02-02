import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Grid} from "@mui/material";

function App() {

    let k = 0;
    let n = 0;
    let masA = [];
    let masNumbers = [];
    const [output, setOutput] = useState('');


    function isEven(question) {
        return question % 2 === 0;
    }

    function sum(arr,  startIdx,  deep,  currSum) {
        if (deep === 1){
            for (let i = startIdx; i < arr.length; i++)
                if (isEven(currSum + arr[i]))
                    masNumbers.push(currSum + arr[i]);
        } else {
            for (let i = startIdx; i < arr.length; i++)
                sum(arr, i + 1, deep - 1, currSum + arr[i]);
        }
    }

    function activateButton() {
        setOutput('');
        masNumbers = [];
        sum(masA, 0, k, 0);
        return setOutput(String(Math.max.apply(null,masNumbers)))
    }

    function setMasA(event) {
        masA.length=0;
        masA = event.target.value.split(" ");
        n = masA.length;
        for (let i=0; i<n; i++)
            masA[i] = Number(masA[i]);
    }

    function setK(event) {
        k = event.target.value;
    }

    return (
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 3, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <TextField sx={{ pb: 2 }} onInput={setMasA} label="Массив А - через пробел" variant="outlined"/>
            <TextField onInput={setK} label="Целое число К" variant="outlined" />
            <Button  sx={{ my: 2 }} onClick={activateButton} variant="contained">Вычислить</Button>
            <TextField
                disabled
                label="Ответ"
                value={output}
            />
        </Grid>
    </Box>
  );
}

export default App;
