import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const Example = () => {
  return (
    <section className="grid place-content-center">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  // Initial rotation angles
  const initialRotation = { x: 15, y: -40 };
  const [rotation, setRotation] = useState(initialRotation);
  const phoneRef = useRef(null);

  const handleMouseMove = (e) => {
    if (phoneRef.current) {
      // Get the bounding rectangle of the phone
      const rect = phoneRef.current.getBoundingClientRect();
      // Calculate center of the phone
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Calculate rotation based on mouse position
      const angleX = ((e.clientY - centerY) / rect.height) * 50; // Adjust sensitivity (50) as needed
      const angleY = ((e.clientX - centerX) / rect.width) * -50; // Adjust sensitivity (-50) as needed

      setRotation({ x: angleX, y: angleY });
    }
  };

  const handleMouseLeave = () => setRotation(initialRotation);

  useEffect(() => {
    const phoneElement = phoneRef.current;

    if (phoneElement) {
      phoneElement.addEventListener("mousemove", handleMouseMove);
      phoneElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (phoneElement) {
        phoneElement.removeEventListener("mousemove", handleMouseMove);
        phoneElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={phoneRef}
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
        transition: "transform 0.2s ease-out", // Optional: Smooth transition
      }}
      className="rounded-[24px] bg-[rgba(0,0,0,0.5)] shadow-[0_10px_5px_rgba(0,0,0,0.3)]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-00 bg-neutral-600 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <svg width="173" height="68" viewBox="0 0 173 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.9506 34.7955L47.1415 48.8815" stroke="#0BAA45" strokeWidth="5.53338"/>
        <path d="M46.4242 11.8831C16.5534 -0.256522 13.3374 34.44 15.1119 54.296C25.2582 53.8004 33.1797 52.4055 39.2865 50.3869C52.2861 46.0899 57.0628 38.9668 57.5723 31.6762C57.9515 26.2494 55.2832 21.0489 52.2893 16.6619C50.8417 14.5408 48.8032 12.85 46.4242 11.8831Z" stroke="#036683" strokeWidth="5.53338"/>
        <path d="M44.2628 26.9988C44.157 33.1514 39.0835 38.0534 32.9308 37.9476C30.8261 37.9114 28.8756 37.2967 27.2187 36.2591C24.0099 34.2496 21.9123 30.6648 21.982 26.6156C22.0516 22.5664 24.2712 19.0559 27.5472 17.1579C29.2388 16.1779 31.2093 15.6306 33.314 15.6668C39.4666 15.7726 44.3686 20.8461 44.2628 26.9988Z" stroke="#0BAA45" strokeWidth="5.53338"/>
        <path d="M76.9017 45V22.6H85.1257C86.9177 22.6 88.3897 22.9093 89.5417 23.528C90.7151 24.1253 91.5897 24.9467 92.1657 25.992C92.7417 27.016 93.0297 28.1573 93.0297 29.416C93.0297 30.7813 92.6671 32.0293 91.9417 33.16C91.2377 34.2907 90.1284 35.112 88.6137 35.624L93.2537 45H88.5497L84.3897 36.168H80.9977V45H76.9017ZM80.9977 33.16H84.8697C86.2351 33.16 87.2377 32.8293 87.8777 32.168C88.5177 31.5067 88.8377 30.632 88.8377 29.544C88.8377 28.4773 88.5177 27.624 87.8777 26.984C87.2591 26.344 86.2457 26.024 84.8377 26.024H80.9977V33.16ZM98.7272 52.04L102.407 43.944H101.447L95.2712 29.128H99.7192L104.167 40.296L108.807 29.128H113.159L103.079 52.04H98.7272ZM121.758 45.384C120.265 45.384 118.931 45.0213 117.758 44.296C116.585 43.5707 115.657 42.5787 114.974 41.32C114.291 40.0613 113.95 38.632 113.95 37.032C113.95 35.432 114.291 34.0133 114.974 32.776C115.657 31.5173 116.585 30.536 117.758 29.832C118.931 29.1067 120.265 28.744 121.758 28.744C122.953 28.744 123.998 28.968 124.894 29.416C125.79 29.864 126.515 30.4933 127.07 31.304V21.96H131.166V45H127.518L127.07 42.728C126.558 43.432 125.875 44.0507 125.022 44.584C124.19 45.1173 123.102 45.384 121.758 45.384ZM122.622 41.8C123.945 41.8 125.022 41.3627 125.854 40.488C126.707 39.592 127.134 38.4507 127.134 37.064C127.134 35.6773 126.707 34.5467 125.854 33.672C125.022 32.776 123.945 32.328 122.622 32.328C121.321 32.328 120.243 32.7653 119.39 33.64C118.537 34.5147 118.11 35.6453 118.11 37.032C118.11 38.4187 118.537 39.56 119.39 40.456C120.243 41.352 121.321 41.8 122.622 41.8ZM137.545 26.664C136.798 26.664 136.18 26.44 135.689 25.992C135.22 25.544 134.985 24.9787 134.985 24.296C134.985 23.6133 135.22 23.0587 135.689 22.632C136.18 22.184 136.798 21.96 137.545 21.96C138.292 21.96 138.9 22.184 139.369 22.632C139.86 23.0587 140.105 23.6133 140.105 24.296C140.105 24.9787 139.86 25.544 139.369 25.992C138.9 26.44 138.292 26.664 137.545 26.664ZM135.497 45V29.128H139.593V45H135.497ZM144.604 45V32.552H142.428V29.128H144.604V27.272C144.604 25.352 145.084 23.9867 146.044 23.176C147.026 22.3653 148.348 21.96 150.012 21.96H151.772V25.448H150.652C149.948 25.448 149.447 25.5867 149.148 25.864C148.85 26.1413 148.7 26.6107 148.7 27.272V29.128H152.124V32.552H148.7V45H144.604ZM157.352 52.04L161.032 43.944H160.072L153.896 29.128H158.344L162.792 40.296L167.432 29.128H171.784L161.704 52.04H157.352Z" fill="#036B86"/>
      </svg>
      <button className="absolute bottom-4 left-6 right-6 z-10 rounded-lg border-[0.5px] bg-white py-1.5 text-sm font-medium text-black-500 backdrop-blur">
        Get Started
      </button>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-[#6fcf97]" />
    </div>
  );
};

export default Example;
