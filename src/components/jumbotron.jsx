"use client";

function ComponentsJumbotron() {
    const nama = "Muhammad Daffa";
    const textSapa = "Halo Semua 👋, Saya"
    const angkatan = "Mahasiswa Angkatan 2022 UIN JAKARTA"
    const jurusan = "Teknik Informatika"
  return (
    <section id="home" className="lg:ml-8">
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="w-full self-center px-4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-base font-semibold text-cyan-400 md:text-xl lg:text-2xl">
              {textSapa} <br />
              <span
                id="typing"
                className="font-bold text-slate-900
                  text-4xl mt-1 lg:text-5xl"
              >
                {nama}
              </span>
            </h1>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed mt-5  md:text-lg lg:text-xl">
              {angkatan} <br />{" "}
              <span className="text-dark font-medium">{jurusan}</span>
            </p>
            <div className="info-popup">
              <a
                href="#"
                className="text-base font-semibold text-white bg-cyan-400 py-3 px-8 rounded-full
                  hover:shadow-lg hover:opacity-90 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          <div className="w-full px-4 self-end lg:w-1/2" data-aos="fade-left">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="img/foto-daffa-1.png"
                alt=""
                className="max-w-full mx-auto"
              />
              <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 -z-10">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#22D3EE"
                    d="M66,-22.2C74.7,5.6,63.7,39,43.9,51.2C24.1,63.4,-4.4,54.4,-22.1,39.4C-39.7,24.5,-46.5,3.6,-41,-19.6C-35.5,-42.9,-17.7,-68.4,5.4,-70.2C28.6,-71.9,57.2,-49.9,66,-22.2Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentsJumbotron;
