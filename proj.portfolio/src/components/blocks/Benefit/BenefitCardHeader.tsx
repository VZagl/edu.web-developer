import './BenefitCardHeader.scss';

interface i_BenefitCardHeaderProps {
	title: string;
}

export function BenefitCardHeader({ title }: i_BenefitCardHeaderProps) {
	return <div className='benefit-card-header'>{title}</div>;
}
