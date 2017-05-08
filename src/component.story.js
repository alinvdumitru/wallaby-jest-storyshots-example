import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {TestComponent} from './../src/component';

storiesOf('TestComponent', module)
    .add('TestComponent render', () => {
        return (
            <TestComponent />
        );
    });
