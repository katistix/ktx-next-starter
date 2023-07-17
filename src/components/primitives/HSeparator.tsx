type Props = {
    className?: string;
    text?: string;
};

export const HSeparator = (props: Props) => {
    return (
        <div
            className={`flex items-center justify-center w-full my-2 space-x-2 ${props.className}`}
        >
            <div className="w-full h-px bg-gray-300"></div>

            {/* If text, display it and display another line too */}
            {props.text && (
                <>
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                        {props.text}
                    </span>
                    <div className="w-full h-px bg-gray-300"></div>
                </>
            )}
        </div>
    );
};
