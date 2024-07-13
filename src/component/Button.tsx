interface ButtonProps {
    title: string;
    bgColor?: string;
    textColor?: string;
    border?: string;
    href?: string;
    }

export function Button ({ title, bgColor, textColor, border, href }: ButtonProps) {
    let hover = ""
    if (bgColor === "bg-white") {
        hover = "hover:bg-[#525050]"
    } else if (!bgColor) {
        hover = "hover:bg-white"
        textColor = "hover:text-black"
    }

    if (!href) {href = "#"}

  return <a href={href}><button className={`w-[170px] ${hover} ${border} h-[53px] font-inter rounded-full transition duration-150 ${bgColor} ${textColor}`}> {title} </button></a>
}