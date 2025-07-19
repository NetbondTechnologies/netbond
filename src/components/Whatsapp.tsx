
const Whatsapp = () => {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=919056995190&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <div className="whatsapp w-[50px] h-[50px] z-[8] fixed right-[10px] bottom-[10px] md:right-[20px] cursor-pointer md:bottom-[20px] shadow-md rounded-xl">
          <img className="w-full" src="./asset 26.svg" alt="" />
        </div>
      </a>
    </>
  );
};

export default Whatsapp;
