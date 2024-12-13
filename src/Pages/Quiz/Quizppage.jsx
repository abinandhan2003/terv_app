import React, { useState, useEffect } from 'react';
import Info from '../../Asserts/img/info.png';
import Q1img from '../../Asserts/img/q1img.png';
import Q2img from '../../Asserts/img/q2img.png';
import Q3img from '../../Asserts/img/q3img.png';
import Timeup from '../../Components/Timeup';
import QuitPopup from '../../Components/QuitPopup';
import { Link } from 'react-router-dom';
import correctSound from '../../Asserts/sound/correct.mp4';
import wrongSound from '../../Asserts/sound/wrong.mp4';

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

    const correctAudio = new Audio(correctSound);
    const wrongAudio = new Audio(wrongSound);

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
        if (selectedAnswer === currentQuestion.correctAnswer) {
            correctAudio.play(); // Play correct answer sound
        } else {
            wrongAudio.play(); // Play wrong answer sound
        }
    };

    const handleNextClick = () => {
        setIsAnswered(false);
        setSelectedAnswer(null);
        setShowTimeoutPopup(false);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(30);
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


                <div id="countdown" className="bg-[#7A68FF] rounded-lg w-9 h-9 flex justify-center items-center translate-x-5">
                    {timeLeft}
                </div>

                <span className="flex items-center gap-1 mt-1">
                    <img src={Info} alt="info" className="h-min rounded-[16px]" /> {currentQuestionIndex + 1} / {questions.length}
                </span>
            </div>

            {/* Question section */}
            <div>
                <h2 className="mt-4 text-xl font-semibold text-center">
                    {currentQuestion.question}
                </h2>
                <div className="mt-4">
                    <img
                        src={currentQuestion.image}
                        alt="Question"
                        className="w-full h-48 object-cover border border-gray-500 rounded-lg"
                    />
                </div>

                <div className="mt-6 space-y-3">
                    {currentQuestion.answers.map((answer) => (
                        <button
                            key={answer}
                            onClick={() => handleAnswerClick(answer)}
                            className={`w-full h-14 rounded-[18px] font-medium transition-colors flex justify-between items-center px-5 ${selectedAnswer === answer && !isAnswered
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
                            <div>{answer}</div>
                            <div id="checkbox">
                                {isAnswered
                                    ? answer === currentQuestion.correctAnswer
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#29DA30]">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                        </svg>


                                        : answer === selectedAnswer
                                            ?
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#D44D4D]">
                                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
                                            </svg>

                                            : "⚪"
                                    : selectedAnswer === answer
                                        ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-[#7A68FF]">
                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                        </svg>

                                        : "⚪"}
                            </div>
                        </button>
                    ))}
                </div>

            </div>

            {/* Button */}
            <div className="text-center w-full">
                {isAnswered ? (
                    <button
                        onClick={handleNextClick}
                        className="bg-[#7A68FF] w-full h-14 rounded-[18px]"
                    >
                        {currentQuestionIndex < questions.length - 1 ? "Next Question" :

                            <Link to="/complete">
                                Finish Quiz
                            </Link>
                        }

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
            {
                showTimeoutPopup && (
                    <Timeup />
                )
            }

            {
                showQuitPopup && (
                    <QuitPopup onClose={handleClosePopup} />
                )
            }


        </div >
    );
};

export default QuizPage;
