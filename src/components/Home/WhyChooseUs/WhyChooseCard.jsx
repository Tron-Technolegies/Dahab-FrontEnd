function WhyChooseCard({ icon, content, position }) {
  return (
    <div
      className={`flex flex-col gap-3 justify-center items-center p-3 md:p-5 rounded-lg w-[130px] h-[130px] md:w-[200px] md:h-[200px] border-2 border-[#004DF480] bg-[#000618] ${position}`}
    >
      <img
        src={icon}
        alt="Bitcoin Mining in Dubai"
        className="w-[30px] md:w-[50px]"
      />
      <p className="text-white text-xs md:text-sm text-start">{content}</p>
    </div>
  );
}

export default WhyChooseCard;
