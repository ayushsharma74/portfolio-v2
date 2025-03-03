export default function MaxWidthWrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="max-w-3xl mx-auto px-4">
            {children}
        </div>
    )
}