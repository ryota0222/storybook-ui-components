import React from "react";
import { Story, Meta } from "@storybook/react";
import { Props } from "./TaskList";

import { PureTaskList } from "./TaskList";
import * as TaskStories from "./Task.stories";
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs/blocks";

export default {
  component: PureTaskList,
  title: "TaskList",
  decorators: [(story: any) => <div style={{ padding: "3em" }}>{story()}</div>],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>TaskList</Title>
          <Description>Description</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args?.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args?.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args?.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args?.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args?.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args?.task, id: "6", title: "Task 6" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks!.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
