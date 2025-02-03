import { PriorityType } from '../../../../components/shared/ToDoForm/ToDoForm.constants';
import { TodoCardActionBlockProps } from '../TodoCardActionBlock/TodoCardActionBlock.types';

export type TodoCardProps = {
  name: string;
  description: string;
  progress: number;
  _id: string;
  created_at: Date;
  priority: PriorityType;
  attachmentsUrls: string[];
};

export type TodoCardForCreate = Omit<
  TodoCardProps,
  '_id' | 'created_at' | 'attachmentsUrls'
>;

export type TodoCardPropsWithActions = TodoCardProps & {
  actions: TodoCardActionBlockProps;
};
