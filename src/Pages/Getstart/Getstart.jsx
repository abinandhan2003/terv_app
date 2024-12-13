import React from 'react'
import Emoji from '../../Asserts/img/intro.png';
import { Link } from 'react-router-dom';

function Getstart() {
    return (

        <div className='w-full h-full flex flex-col justify-between items-center' >
            <div></div>

            <div className='text-center flex flex-col justify-center items-center'>

                <img src={Emoji} alt="welcome_emoji" className='w-[80%]' />

                <h1 className='text-3xl font-bold mt-5'> Ready for a <span className='text-[#7A68FF]'>Quick</span>Quiz ?</h1>
                <div className='mt-2 text-[#9A9A9A] w-[85%]'>
                    Gear up for a QuikQuiz sprint! You've got just 30 seconds per question. Tap the info icon 🛈 at the top right to check out the module each question comes from. Let's see what you've got! - <span className='text-[#7A68FF]'> Goodluck! </span>
                </div>
            </div>

            <Link to="/quiz" className='w-full flex justify-center'>
                <div className='w-[90%] font-semibold flex justify-center items-center bg-[#7A68FF] h-14 rounded-[18px]'>
                    Start A New Quiz  <span className='-rotate-90 ml-1'> ✏️</span>
                </div>
            </Link>
        </div>
    )
}

export default Getstart 
