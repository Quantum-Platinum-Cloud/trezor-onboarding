import React from 'react';
import styled from 'styled-components';
import {
    H6, TrezorImage,
} from 'trezor-ui-components';
import { FormattedMessage } from 'react-intl';

import types from 'config/proptypes';
import { OptionsList } from 'components/Options';
import { StepWrapper, StepHeadingWrapper, StepBodyWrapper } from 'components/Wrapper';

import l10nMessages from './index.messages';

const OptionWrapper = styled.div`
    text-align: center
`;

const DEVICE_HEIGHT = 130;

const SelectDeviceStep = ({ onboardingActions, model, device }) => {
    const actualVersion = device && device.features && device.features.major_version ? device.features.major_version : null;

    return (
        <StepWrapper>
            <StepHeadingWrapper>
                <FormattedMessage {...l10nMessages.TR_SELECT_YOUR_DEVICE_HEADING} />
            </StepHeadingWrapper>
            <StepBodyWrapper>
                <OptionsList
                    options={[{
                        content: (
                            <OptionWrapper data-test="select-device-1">
                                <TrezorImage style={{ margin: '15px' }} model={1} height={DEVICE_HEIGHT} />
                                <H6><FormattedMessage {...l10nMessages.TR_MODEL_ONE} /></H6>
                            </OptionWrapper>
                        ),
                        value: 1,
                        key: 1,
                    }, {
                        content: (
                            <OptionWrapper data-test="select-device-2">
                                <TrezorImage style={{ margin: '15px' }} model={2} height={DEVICE_HEIGHT} />
                                <H6><FormattedMessage {...l10nMessages.TR_MODEL_T} /></H6>
                            </OptionWrapper>
                        ),
                        value: 2,
                        key: 2,
                    }]}
                    selected={actualVersion || model}
                    onSelect={(value) => {
                        onboardingActions.selectTrezorModel(value);
                        onboardingActions.goToNextStep();
                    }}
                />
            </StepBodyWrapper>
        </StepWrapper>
    );
};

SelectDeviceStep.propTypes = {
    onboardingActions: types.onboardingActions,
    model: types.model,
    device: types.device,
};

export default SelectDeviceStep;