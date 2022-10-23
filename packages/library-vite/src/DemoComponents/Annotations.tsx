import React, { FC } from 'react';

export type AnnotationsProps = {
    /** Example annotation */
    title: string;
};

export const Annotations: FC<AnnotationsProps> = ({ title }) => {
    return <div>{title}</div>;
};
