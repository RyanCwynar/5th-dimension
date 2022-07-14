import { useEffect, useState } from "react";
import { MintButton } from '../../../components/Elements/Button/MintButton'

function CountDownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-07-14T17:00:00") - +new Date();
    console.log(difference);
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="App">

      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
      
        <p>
          <span className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold font-semibold text-white">{timeLeft.hours}</span>
          <span className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold font-semibold text-white">:</span>
          <span className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold font-semibold text-white">{timeLeft.minutes}</span>
          <span className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold font-semibold text-white">:</span>
          <span className="mt-5 tablet:mt-9 mb-[10px] xl:mt-[29px] xl:mb-[30px] text-center text-3.75 tablet:text-5 xl:text-content font-RedHatBold font-semibold text-white">{timeLeft.seconds}</span>
        </p>
      ) : (
        <MintButton />
      )}
    </div>
  );
}

export default CountDownTimer;
