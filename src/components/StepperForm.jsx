import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography } from "@mui/material";
import Form1 from "./Forms/Forms1";
import Form2 from "./Forms/Forms2";
import Form3 from "./Forms/Forms3";
import Form4 from "./Forms/Forms4";

function getStepContent(activeStep,handlechg,handlechgBack) {
    console.log(activeStep)
    switch (activeStep) {
        case 0:
            return <Form1 handlechg={handlechg}/>
        case 1:
            return <Form2 handlechg={handlechg} handlechgBack={handlechgBack}/>
        case 2:
            return <Form3 handlechg={handlechg}/>
        case 3:
            return <Form4 handlechg={handlechg}/>
        default:
            return "Invalid Data"
    }
}

function StepperForm() {

    const [activestep1, setActiveStep] = useState(0)

    const steps = [
        "Eductaion information",
        "Personal details",
        "Country details",
        "Interest"
    ];

    const handlechg = () => {
        setActiveStep(activestep1 + 1)
    }
    const handlechgBack = () =>{
        setActiveStep(activestep1 - 1)
    }

    return (
        <>
            <div className=''>
                <Stepper activeStep={activestep1} alternativeLabel>
                    {
                        steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                </Stepper>

                {activestep1 == steps.length
                    ? "submit"
                    :
                    <>
                        <Typography>
                            {getStepContent(activestep1,handlechg,handlechgBack)}
                        </Typography>
                    </>
                }
            </div>
        </>
    )
}

export default StepperForm;