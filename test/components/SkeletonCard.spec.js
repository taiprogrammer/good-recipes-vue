// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { it, expect, describe } from 'vitest';

import SkeletonCard from '../../src/components/SkeletonCard.vue';

describe('SkeletonCard', () => {
  it('SkeletonCard should render', () => {
    const wrapper = mount(SkeletonCard);

    expect(wrapper.isVisible()).toBe(true);
  });

  it('SkeletonCard should contains wrapper class', () => {
    const wrapper = mount(SkeletonCard);

    expect(wrapper.classes()).toContain('wrapper');
  });
});
