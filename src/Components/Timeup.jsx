import React from 'react'

function Timeup() {

    const handleReload = () => {
        window.location.reload(); // Reloads the current page
    };

    return (
        <div className="relative w-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="absolute w-full bottom-2 border border-[#7A68FF] bg-[#35284E] p-5 rounded-[38px] shadow-lg text-center">
                <h2 className="text-2xl font-bold"> You Ran Out Of Time</h2>
                <p>No worries just try again, you got this!</p>
                
                <button   onClick={handleReload}
                    className="mt-4 bg-[#7A68FF] text-white py-2 px-4 rounded-[18px] w-full"
                >
                    Start Over 👊
                </button>
                
            </div>
        </div>
    )
}

export default Timeup
