import React from 'react';
import { useParams } from 'react-router-dom';
import { linkData } from '../utils';

export const Section = () => {
    const { id } = useParams<{ id: string }>();
    const links = linkData[id as keyof typeof linkData] || [];

    return <LinkList data={links} />;
};