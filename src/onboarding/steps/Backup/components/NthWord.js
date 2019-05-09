import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import l10nMessages from './NthWord.messages';

const Word = styled.div`
    font-size: 3em;
    white-space: nowrap;
`;

const NthWord = ({ number }) => {
    if (!number) {
        return null;
    }
    return (
        <Word><FormattedMessage {...l10nMessages.TR_NTH_WORD} values={{ number }} /></Word>
    );
};

NthWord.propTypes = {
    number: (props, propName, componentName) => {
        if (props[propName] < 1 || props[propName] > 24) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to`
                + ` \`${componentName}\`. Validation failed.`,
            );
        }
        return null;
    },
};

export default NthWord;