import { shallowMount } from '@vue/test-utils';
import TaskItem from '@/components/TaskItem.vue';

describe('TaskItem.vue', () => {
  it('renders task description', () => {
    const task = { id: 1, description: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    expect(wrapper.find('.task-input').element.value).toBe('Test Task');
  });

  it('emits toggle-completion event when checkbox is clicked', async () => {
    const task = { id: 1, description: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    await wrapper.find('input[type="checkbox"]').trigger('change');
    expect(wrapper.emitted()['toggle-completion']).toBeTruthy();
    expect(wrapper.emitted()['toggle-completion'][0]).toEqual([task.id]);
  });

  it('emits delete-task event when delete button is clicked', async () => {
    const task = { id: 1, description: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted()['delete-task']).toBeTruthy();
    expect(wrapper.emitted()['delete-task'][0]).toEqual([task.id]);
  });

  it('emits update-task event when task description is updated', async () => {
    const task = { id: 1, description: 'Test Task', completed: false };
    const wrapper = shallowMount(TaskItem, {
      propsData: { task }
    });
    const input = wrapper.find('.task-input');
    input.setValue('Updated Task');
    await input.trigger('blur');
    expect(wrapper.emitted()['update-task']).toBeTruthy();
    expect(wrapper.emitted()['update-task'][0]).toEqual([{ ...task, description: 'Updated Task' }]);
  });
});
