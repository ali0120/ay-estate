import React from 'react'
import BsStarFill from '@/public/svg/fillStar.svg'

interface StarsProps {
    rating: number;
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => {
                const number = index + 0.5; // Threshold for half star
                return (
                    <span key={index}>
                        {rating >= index + 1 ? (
                            <BsStarFill /> // Full star
                        ) : rating >= number ? (
                            <BsStarFill /> // Half star
                        ) : (
                            <BsStarFill /> // Empty star
                        )}
                    </span>
                );
            })}
        </>
    );
};
export default Stars
