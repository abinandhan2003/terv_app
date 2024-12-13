import React from 'react';
import Completeimg from '../../Asserts/img/Complete.png';
import { Link } from 'react-router-dom';

function Complete() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'QuickQuiz Results',
                    text: 'I just completed a QuickQuiz! Check it out and test your knowledge too!',
                    url: window.location.href, // Replace with your app's specific URL if needed
                });
                console.log('Results shared successfully!');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Sharing is not supported on this browser.');
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div></div>

            <div className="text-center flex flex-col justify-center items-center">
                <img src={Completeimg} alt="complete_emoji" className="w-[80%]" />

                <h1 className="text-3xl font-bold mt-5">
                    <span className="text-[#7A68FF]">Quick</span>Quiz Complete!
                </h1>
                <div className="mt-2 text-[#9A9A9A] w-[85%]">
                    Awesome job completing a QuikQuiz. Your results are zooming their way to your inbox. Sharing is caring, don't forget to show off your knowledge to friends and fam!
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <Link to="/" className="w-full flex justify-center">
                    <div className="w-[90%] font-semibold flex justify-center items-center bg-[#7A68FF] h-14 rounded-[18px]">
                        Start Over 👊
                    </div>
                </Link>

                <div
                    className="w-[90%] font-semibold flex justify-center items-center h-14 cursor-pointer rounded-[18px]"
                    onClick={handleShare}
                >
                    Share My Results 📣
                </div>
            </div>
        </div>
    );
}

export default Complete;
