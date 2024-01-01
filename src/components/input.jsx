

function InputComponents() {
    return(
  <section id="contact" className="pt-36 pb-32">
  <div className="container">
    <div
      className="w-full px-4"
      data-aos="fade-right"
      data-aos-offset={300}
      data-aos-easing="ease-in-sine"
    >
      <div className="mx-auto mb-16 max-w-xl text-center">
        <h4 className="mb-2 text-lg font-semibold text-cyan-400">CONTACT</h4>
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
          Hubungi Kami
        </h2>
        <p className="text-md font-medium text-secondary md:text-lg">
          
        </p>
      </div>
    </div>
    <form>
      <div
        className="w-full lg:mx-auto lg:w-2/3"
        data-aos="fade-right"
        data-aos-offset={300}
        data-aos-easing="ease-in-sine"
      >
        <div className="mb-8 w-full px-4">
          <label htmlFor="name" className="text-base font-bold text-cyan-400">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div
          className="mb-8 w-full px-4"
          data-aos="fade-right"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
        >
          <label
            htmlFor="email"
            className="text-base font-bold text-cyan-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>
        <div
          className="mb-8 w-full px-4"
          data-aos="fade-right"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
        >
          <label
            htmlFor="message"
            className="text-base font-bold text-cyan-400"
          >
            Pesan
          </label>
          <textarea
            type="email"
            id="email"
            className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            defaultValue={""}
          />
        </div>
        <div
          className="w-full px-4"
          data-aos="fade-right"
          data-aos-offset={300}
          data-aos-easing="ease-in-sine"
        >
          <button className="w-full rounded-full bg-cyan-400 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
            Kirim
          </button>
        </div>
      </div>
    </form>
  </div>
</section>


    )
}

export default InputComponents;