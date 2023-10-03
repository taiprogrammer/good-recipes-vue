import { mount } from '@vue/test-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { it, expect, describe } from 'vitest';

import Home from '../../src/pages/Home/Index.vue';
import Topic from '../../src/components/Topic.vue';
import Header from '../../src/components/Header.vue';
import Footer from '../../src/components/Footer.vue';
import Carousel from '../../src/components/Carousel.vue';
import SkeletonCard from '../../src/components/SkeletonCard.vue';

describe('Home', () => {
  it('Home should render', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(page.isVisible()).toBe(true);
  });

  it('Home should render Header component', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(page.findComponent(Header).exists()).toBe(true);
  });

  it('Home should render Topic component', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(page.findComponent(Topic).exists()).toBe(true);
  });

  it('Home should render Carousel component', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(page.findComponent(Carousel).exists()).toBe(true);
  });

  it('Home should render SkeleteonCard component', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    expect(page.findComponent(SkeletonCard).exists()).toBe(true);
  });

  it('Home should render Footer component', () => {
    const page = mount(Home, {
      global: {
        stubs: ['router-link', 'router-views'],
      },
    });

    expect(page.findComponent(Footer).exists()).toBe(true);
  });
});
