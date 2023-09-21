// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  it, expect, vi, describe,
} from 'vitest';

import Topic from '../../src/components/Topic.vue';

vi.mock('vue-router', () => ({
  resolve: vi.fn(),
}));

const elements = ['Sobremesas', 'Carnes', 'Massas', 'Saladas e molhos', 'Vegano', 'Todas as receitas'];

describe('Topic', () => {
  it('Topic should be visible', () => {
    const wrapper = mount(Topic);

    expect(wrapper.isVisible()).toBe(true);
  });

  it('Topic should render 6 anchors', () => {
    const wrapper = mount(Topic);
    const container = wrapper.find('div');
    expect(container.findAll('a').length).toBe(6);
  });

  it(`Topic elements should be ${elements}`, () => {
    const wrapper = mount(Topic);
    const container = wrapper.find('div');
    const topics = container.findAll('a');

    elements.map((item, index) => expect(topics.at(index).text()).toBe(item));
  });
});
