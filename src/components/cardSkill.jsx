function CardSkill() {
  return (
    <>
      <div className="lg:flex flex-wrap gap-6 justify-evenly ml-20 lg:mt-0 -mt-5 ">
        <div className=" lg:w-52 lg:h-32 h-32 w-80 -ml-20 lg:-ml-0 lg:mr-0 shadow-2xl bg-white rounded-md mb-6 lg:mb-0">
          <img
            className=" lg:w-28 lg:mt-2 lg:mx-auto w-24 pt-3 lg:pt-0 mx-auto mt-8 rounded-md"
            src="/img/html.png"
            alt=""
          />
        </div>
        <div className="lg:w-52 lg:h-32 h-32 lg:ml-10 w-80 -ml-20 lg:mr-0 shadow-2xl bg-white rounded-md mb-6 lg:mb-0">
          <img
            className=" lg:w-24 lg:mx-auto lg:mt-4 w-24 pt-3 mx-auto  lg:pt-0 rounded-md"
            src="/img/css.png"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex flex-wrap gap-6 lg:ml-auto lg:mr-28 lg:-mt-28 justify-evenly ">
        <div className="lg:w-52 lg:h-32  h-32 w-80 -ml-0 shadow-2xl lg:-ml-0 lg:mr-0 bg-white rounded-md mb-6 lg:mb-0">
          <img
            className=" lg:w-24 lg:mx-auto lg:mt-4 w-24 pt-3 mx-auto  lg:pt-0 rounded-md"
            src="/img/js.png"
            alt=""
          />
        </div>
        <div className="lg:w-52 lg:h-32 h-32 w-80 -ml-0 lg:ml-10 lg:mr-0  shadow-2xl bg-white rounded-md mb-6 lg:mb-0">
          <img
            className=" lg:w-24 lg:mx-auto lg:mt-5 w-24 pt-5 mx-auto  lg:pt-0 rounded-md"
            src="/img/react.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default CardSkill;
