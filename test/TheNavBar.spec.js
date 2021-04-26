import { mount } from '@vue/test-utils';
import TheNavBar from '@/components/TheNavBar.vue';

describe('YourComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheNavBar);
    expect(wrapper.vm).toBeTruthy();
  });
});
