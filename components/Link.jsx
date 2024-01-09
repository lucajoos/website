const Link = ({ href, children, className }) => {
	return (
		<a href={href} className={className} target={'_blank'} rel={'noreferrer'}>
			{children}
		</a>
	)
};

export default Link;