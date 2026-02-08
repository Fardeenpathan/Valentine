"use client";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-1250 overflow-hidden ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/back_forever.png')",
          }}
        />

        {/* Overlay (optional dark layer) */}

        {/* Content */}
        <div className="relative z-10 flex flex-col  h-full text-white pt-80">

          <h2 className="text-[841426]  text-center leading-tight
     text-[50px] sm:text-5xl lg:text-[80px]
  flex flex-col items-center gap-y-6">

            <span className="font-playfair-display font-normal">I  Made <span className="italic"> Something</span>
              <br /> For <span className="italic">You</span></span>
            <span className="font-cormorant italic text-2xl">Lets rewind time for a little while</span>
          </h2>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-408">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>


          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40%] mr-[45%] mt-44">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[30%] mr-[45%] mt-120">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>
            </div>
          </div>

          <div className="bg-[url('/card1.png')] bg-no-repeat  bg-cover w-[380px] h-[330px] bg-center ml-[40.5%] mr-[45%] mt-78">
            <div className="flex flex-col   text-center">

              <h2 className="text-[#841426] lg:text-[30px] md:text-2xl text-[18px] mt-20 -rotate-10">
                <span className="font-carattere">The</span> <br />
                <span className="font-dancing-script font-bold text-3xl">BEGINNING</span>
                <span className="font-carattere"> of</span> <br />
                <span className="font-carattere text-5xl">Forever</span>
                <span className="font-dancing-script font-bold"> STARTS HERE</span>
              </h2>

              <h2 className="text-black font-cormorant-upright lg:text-[30px] md:text-2xl text-[22px] -rotate-10">
                First Meet
              </h2>

            </div>
          </div>

        </div>


      </section>

    </>
  );
}
