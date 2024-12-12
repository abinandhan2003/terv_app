import React from 'react'

function QuitPopup({ onClose }) {
    return (
        <div className="relative w-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="absolute w-full bottom-2 border border-[#7A68FF] bg-[#35284E] p-5 rounded-[38px] shadow-lg text-center">
            <h2 className="text-2xl font-bold"> Sure You Want To Quit? </h2>
            <p> If you leave now you’ll lose your progress </p>
            
            <button 
                className="mt-4 bg-[#D44D4D] text-white py-2 px-4 rounded-[18px] w-full"
            >
                Quit Quiz 💀
            </button>

            <button className='w-full py-2 px-4'
             onClick={onClose}
            >
           
            Continue Quiz 👊
            </button>
            
        </div>
    </div>
    )
}

export default QuitPopup
