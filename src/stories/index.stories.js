/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ComponentBreadcrumb from '../components/breadcrumb';


storiesOf('UI ELEMENTS', module)
.add('Breadcrumb', () => ({
    components: { ComponentBreadcrumb },
    methods: { action: action('clicked') },
}));
