import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
	widthInPercent?: number;
	display?: string;
	justifyContent?: string;
	alignItems?: string;
	maxWidth?: string;
	maxHeight?: string;
	padding?: string;
}

const Container: React.FC<ContainerProps> = ({
	widthInPercent: width,
	children,
	justifyContent,
	alignItems,
	display,
	maxWidth,
	maxHeight,
	padding,
}) => {
	return (
		<ContainerDiv
			alignItems={alignItems}
			justifyContent={justifyContent}
			width={width}
			display={display}
			maxWidth={maxWidth}
			maxHeight={maxHeight}
			padding={padding}>
			{children}
		</ContainerDiv>
	);
};

export default Container;
const ContainerDiv = styled('div')<{
	width?: number;
	justifyContent?: string;
	alignItems?: string;
	display?: string;
	maxWidth?: string;
	maxHeight?: string;
	padding?: string;
}>`
	width: ${(props) => `${props.width}%` || '70%'};
	max-width: ${(props) => `${props.maxWidth}` || 'unset'};
	max-width: ${(props) => `${props.maxHeight}` || 'unset'};

	display: ${(props) => props.display || 'unset'};
	justify-content: ${(props) => props.justifyContent || 'unset'};
	align-items: ${(props) => props.alignItems || 'unset'};

	padding: ${(props) => props.padding || 'unset'};
`;
