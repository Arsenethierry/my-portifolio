interface Props {
    text: string;
    type: 'solid' | 'outlined';
    // onClickHandler: () => void;
  }

export default function Button({ text, type,
    //  onClickHandler = () => {} 
    }: Props): JSX.Element {
    return(
        <>
        <button
            type="button"
            // onClick={onClickHandler}
            className={
                `font-regular
                px-6 w-[100%] sm:px-4 xl:px-6 py-1 sm:py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl xs:h-10 sm:h-25 transition-all
                rounded oversflow-hidden border-2 border-transparent
                hover:shadow-light-xl
                ${
                    type === 'solid' ? 'bg-[#8892B0] text-blue hover:outline-none hover:bg-transparent hover:text-[#8892B0] focus:outline-none' :
                    'text-[#fff] bg-[#232946] border-[#8892B0] hover:outline-none  hover:bg-[#8892B0] hover:text-blue hover:border-[#8892B0] focus:outline-none' 
                }
                `
            }>
                {text}
            </button>
        </>
    )
}