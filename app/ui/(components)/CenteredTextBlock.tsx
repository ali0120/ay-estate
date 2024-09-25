interface CenteredTextBlockProps {
    heading: string;
    paragraph: string;
}

const CenteredTextBlock: React.FC<CenteredTextBlockProps> = ({ heading, paragraph }) => {
    return (
        <div className="text-center mx-auto">
            <h1 className='text-[24px] lg:text-[44px] font-soraBold text-YankeesBlue leading-[31.2px] lg:leading-[57.2px] capitalize'>
                {heading}
            </h1>
            <p className='text-[14px] lg:text-[18px] font-soraRegular text-RomanSilver leading-[22.4px] lg:leading-[28.8px] lg:w-[62%] lg:m-auto pt-[16px] lg:pt-[30px] pb-[30px]'>
                {paragraph}
            </p>
        </div>
    );
};

export default CenteredTextBlock;
