import type { MouseEventHandler, ReactNode } from "react";

export default function Button({
	children,
	onClick,
	disabled,
}: {
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
}) {
	return (
		<button
			disabled={disabled}
			style={{ backgroundColor: "white" }}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
}
