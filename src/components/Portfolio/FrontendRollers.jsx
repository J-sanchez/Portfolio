import { comCode } from '../../assets/index';
import { threeMod } from '../../assets/index'
import { Wireframe } from '../../assets/index'
import { topPage } from '../../assets/index'
import { useState, useEffect } from 'react';
export const FrontendRollers = () => {
    const INTERVAL_LENGTH = 6000;
    const AUTOPLAY = true;
  
    // Array of image sources
    const items = [
        <img
            src={comCode}
            alt="First Image"
            className="w-full h-auto object-cover md:rounded-3xl"
        />,
        <img
            src={threeMod}
            alt="Second Image"
            className="w-full h-96 object-cover md:rounded-3xl"
        />,
        <img
            src={Wireframe}
            alt="Third Image"
            className="w-full h-96 object-cover md:rounded-3xl"
        />,
        <img
        src={topPage}
        alt="Third Image"
        className="w-full h-auto object-cover md:rounded-3xl"
    />
    ];
  
    const [currentItem, setCurrentItem] = useState(0);
  
    const prev = () =>
        setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    const next = () =>
        setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));
  
    useEffect(() => {
        if (!AUTOPLAY) return;
        const interval = setInterval(next, INTERVAL_LENGTH);
        return () => clearInterval(interval);
    }, [AUTOPLAY]);
  
    return (
            <section className="relative h-[800px] w-full overflow-hidden text-center">
              {items.map((item, index) => (
                <div
                key={index}
                className={
                  'absolute w-full transition-all ease-in-out duration-1000 ' +
                  (currentItem === index
                    ? 'opacity-100 translate-x-0 rotate-[0deg]'
                    : 'opacity-0 -translate-x-full rotate-[10deg]')
                }
                >
                  {item}
                </div>
              ))}
              {/* Controls */}
              {/* <div className="absolute w-full h-full items-center flex justify-between">
                <button
                  className="m-4 h-8 w-8 rounded-full bg-slate-200"
                  onClick={prev}
                >
                  {"<"}
                </button>
                <button
                  className="m-4 h-8 w-8 rounded-full bg-slate-200"
                  onClick={next}
                >
                  {">"}
                </button>
              </div>
               Indicator 
              <div className="absolute bottom-4 flex w-full justify-center gap-4">
                {items.map((_, index) => (
                  <div
                    key={index}
                    className={
                      'h-[4px] w-8 ' +
                      (index === currentItem ? 'bg-slate-800' : 'bg-slate-300')
                    }
                  />
                ))}
              </div> */}
            </section>
          );
        }

export default FrontendRollers;