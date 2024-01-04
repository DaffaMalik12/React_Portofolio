function CardSkill() {
  return (
    <>
      <div className=" shadow-2xl lg:w-32 bg-white rounded-md ">
        <img className="  mx-auto rounded-md" src="/img/html.png" alt="" />
      </div>
      <div className="shadow-2xl lg:w-32 bg-white rounded-md ">
        <img
          className=" w-40 pt-2 lg:w-28 lg:pt-2 lg:mx-auto mx-auto rounded-md"
          src="/img/css.png"
          alt=""
        />
      </div>

      <div className=" shadow-2xl lg:w-32  bg-white rounded-md ">
        <img
          className="  lg:w-24 lg:mx-auto mx-auto rounded-md"
          src="/img/js.png"
          alt=""
        />
      </div>
      <div className=" lg:w-32  shadow-2xl bg-white rounded-md  ">
        <img
          className=" w-40  lg:w-24 lg:pt-1 pt-4 lg:mx-auto mx-auto rounded-md"
          src="/img/react.png"
          alt=""
        />
      </div>
    </>
  );
}

export default CardSkill;
