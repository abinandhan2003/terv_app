import React, { useState, useEffect } from 'react';
import Info from '../../Asserts/img/info.png';
import Q1img from '../../Asserts/img/q1img.png';
import Q2img from '../../Asserts/img/q2img.png';
import Q3img from '../../Asserts/img/q3img.png';
import Timeup from '../../Components/Timeup';
import QuitPopup from '../../Components/QuitPopup';

const QuizPage = () => {
    const questions = [
        {
            question: "Identify this artist, known for merging traditional Japanese art with pop culture.",
            answers: ["Takashi Murakami", "Jeff Koons", "Yoshitomo Nara"],
            correctAnswer: "Takashi Murakami",
            image: Q1img,
        },
        {
            question: "How many wins does Floyd Mayweather have in his professional boxing career?",
            answers: ["50 wins, 0 losses, 0 draws", "50 wins, 1 loss, 0 draws", "49 wins, 0 losses, 1 draw"],
            correctAnswer: "50 wins, 0 losses, 0 draws",
            image: Q2img,
        },
        {
            question: "How long has Apple reportedly been developing the new Vision Pro for?",
            answers: ["5 years", "+15 years", "10 years"],
            correctAnswer: "+15 years",
            image: Q3img,
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30); // Timer starts at 30 seconds
    const [showTimeoutPopup, setShowTimeoutPopup] = useState(false);
    const [showQuitPopup, setShowQuitPopup] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        if (timeLeft > 0 && !isAnswered) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !isAnswered) {
            setShowTimeoutPopup(true);
        }
    }, [timeLeft, isAnswered]);

    const handleAnswerClick = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
        }
    };

    const handleLockClick = () => {
        setIsAnswered(true);
    };



    const handleNextClick = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        setShowTimeoutPopup(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(30); // Reset timer for the next question
        } else {
            console.log("Quiz completed!");
        }
    };

    const handleCloseIconClick = () => {
        setShowQuitPopup(true);
    };

    const handleClosePopup = () => {
        setShowQuitPopup(false); // Hide quit popup
    };

    return (
        <div className="h-full bg-[#2B223E] px-5 flex flex-col items-center justify-between">

            {/* Header */}
            <div className="flex w-full justify-between items-center">
                <button
                    id="close_icon"
                    className="font-bold text-xl"
                    onClick={handleCloseIconClick}
                >
                    &#x2715;
                </button>


                <div id="countdown" className="bg-[#7A68FF] rounded-lg w-9 h-9 flex justify-center items-center">
                    {timeLeft}
                </div>

                <span className="flex items-center gap-1 mt-1">
                    <img src={Info} alt="info" className="h-min" /> {currentQuestionIndex + 1} / {questions.length}
                </span>
            </div>

            {/* Question section */}
            <div>
                <h2 className="mt-4 text-lg font-semibold text-center">
                    {currentQuestion.question}
                </h2>
                <div className="mt-4">
                    <img
                        src={currentQuestion.image}
                        alt="Question"
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>
                <div className="mt-6 space-y-3">
                    {currentQuestion.answers.map((answer) => (
                        <button
                            key={answer}
                            onClick={() => handleAnswerClick(answer)}
                            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${selectedAnswer === answer && !isAnswered
                                ? "bg-[#35284E] border border-purple-800"
                                : isAnswered
                                    ? answer === currentQuestion.correctAnswer
                                        ? "bg-[#284E3E] border border-[#29DA30]"
                                        : answer === selectedAnswer
                                            ? "bg-[#4E2828] border border-[#D44D4D]"
                                            : "bg-[#35284E]"
                                    : "bg-[#35284E]"
                                }`}
                            disabled={isAnswered}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>

            {/* Button */}
            <div className="text-center w-[90%]">
                {isAnswered ? (
                    <button
                        onClick={handleNextClick}
                        className="bg-[#7A68FF] w-full h-14 rounded-[18px]"
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                    </button>
                ) : (
                    <button
                        onClick={handleLockClick}
                        className="bg-[#7A68FF] text-white w-full h-14 rounded-[18px]"
                        disabled={!selectedAnswer}
                    >
                        Lock It In &#x1F512;
                    </button>
                )}
            </div>

            {/* Timeout Popup */}
            {showTimeoutPopup && (
                <Timeup />
            )}

            {showQuitPopup && (
               <QuitPopup  onClose={handleClosePopup} />
            )}


        </div>
    );
};

export default QuizPage;
