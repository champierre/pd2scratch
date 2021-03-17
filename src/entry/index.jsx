import React from 'react';
import {FormattedMessage} from 'react-intl';

import pd2ScratchIconURL from './entry-icon.png';
import pd2ScratchInsetIconURL from './inset-icon.svg';

const translationMap = {
    'ja': {
        'gui.extension.pd2Scratch.description': 'Xcratch 拡張の例'
    },
    'ja-Hira': {
        'gui.extension.pd2Scratch.description': 'Xcratch (えくすくらっち)かくちょうのれい'
    }
};

const entry = {
    name: 'Xcratch Example',
    extensionId: 'pd2Scratch',
    extensionURL: 'https://yokobond.github.io/xcratch-example/dist/pd2Scratch.mjs',
    collaborator: 'Yengawa Lab',
    iconURL: pd2ScratchIconURL,
    insetIconURL: pd2ScratchInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="example extension for Xcratch"
            description="Description for example extension for Xcratch"
            id="gui.extension.pd2Scratch.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: true,
    helpLink: 'https://github.com/champierre/pd2scratch/',
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
