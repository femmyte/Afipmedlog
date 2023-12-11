const ContentBox = ({ title, text }) => {
  return (
    <div
      className={` py-4 px-5 h-full flex justify-center flex-col gap-4 border border-[#DCDCDC]`}
    >
      <p className="text-[#151515] text-[0.875rem] font-[400] leading-6 tracking-[0.0175rem]">
        {title}
      </p>
      <p className="text-[#151515] text-[1rem] font-[500] leading-6 tracking-[0.02rem]">
        {text}
      </p>
    </div>
  );
};

export default ContentBox;
