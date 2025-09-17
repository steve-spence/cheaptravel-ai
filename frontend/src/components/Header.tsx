type HeaderProps = {
    className?: string,
};

export default function Header({ className }: HeaderProps) {
    return (
        <header className={className}>
            <p>This is the beginning...</p>
        </header>
    )
}