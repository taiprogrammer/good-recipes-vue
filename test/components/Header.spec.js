// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, it, expect } from 'vitest';

import { RouterLink } from 'vue-router';
import Header from '../../src/components/Header.vue';

describe('Header', () => {
  it('Header should be visible', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(wrapper.isVisible()).toBe(true);
  });

  it('Header should render 2 links if user not logged', () => {
    const wrapper = mount(Header, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });
    const nav = wrapper.find('#notLogged');
    const links = nav.findAllComponents(RouterLink);
    expect(links.length).toBe(2);
  });
});
