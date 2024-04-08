import React, { useState } from 'react';

const StepsCard = ({ recipeData }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        if (currentStep < recipeData.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };
    const handlePrevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 min-h-64 bg-blue-200  rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <button onClick={handlePrevStep} disabled={currentStep === 0} className="text-blue-500 font-semibold text-lg">
                    &lt; Prev
                </button>
                <span className="text-gray-800 font-semibold text-xl">Step {currentStep + 1}/{recipeData.length}</span>
                <button onClick={handleNextStep} disabled={currentStep === recipeData.length - 1} className="text-blue-500 font-semibold text-lg">
                    Next &gt;
                </button>
            </div>
            <div className="rounded-lg bg-white p-4 mb-4 my-10 min-h-32">
                <p className="text-gray-800 text-2xl">{recipeData[currentStep]}</p>
            </div>
        </div>
    );
}

export default StepsCard;
