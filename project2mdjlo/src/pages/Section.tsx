import { useParams } from 'react-router';
import { linkData } from '../utils';
import { LinkList } from '../components/LinkList';

export const Section = () => {
    const { id } = useParams();
    const links = linkData[id as keyof typeof linkData] || [];

    return <LinkList data={links} />;
};