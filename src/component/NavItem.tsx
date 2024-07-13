interface NavItemProps {
    title: string;
}

export function NavItem({ title }: NavItemProps) {
    return (
        <div className="flex flex-col group">
            <p>{title}</p>
            <p className="h-0.5 scale-0 bg-white group-hover:scale-100 transition duration-200"></p>
        </div>
    )
}