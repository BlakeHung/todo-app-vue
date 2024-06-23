import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddTask from '../AddTask.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('AddTask.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      addTask: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it('renders input and button', () => {
    const wrapper = shallowMount(AddTask, { store, localVue });
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('dispatches addTask action with task description', async () => {
    const wrapper = shallowMount(AddTask, { store, localVue });
    const input = wrapper.find('input');
    input.setValue('New Task');
    await wrapper.find('button').trigger('click');
    expect(actions.addTask).toHaveBeenCalled();
    expect(actions.addTask.mock.calls[0][1]).toEqual({ description: 'New Task' });
  });
});
