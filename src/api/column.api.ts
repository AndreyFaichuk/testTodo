import { securityAxios } from './securityAxios';
import { PromiseAxiosResponse } from '../types';
import { ColumnType } from '../pages/TodosPage/components/DnDToDoProvider/hooks/useDnDManagement';
import {
  ColumnForReplace,
  ColumnForUpdate,
} from '../hooks/columns/useColumnsActions';
import { CurrentDnDColumnType } from '../pages/TodosPage/components/DnDToDoProvider/DnDToDoProvider.constants';

const BASE_URL = 'http://localhost:3000/columns';

export class ColumnApi {
  static addColumn(columnName: string): PromiseAxiosResponse<ColumnType> {
    const response = securityAxios.post(`${BASE_URL}/create`, {
      title: columnName,
    });

    return response;
  }

  static updateColumn(
    columnForUpdate: ColumnForUpdate,
    columnId: string,
  ): PromiseAxiosResponse<ColumnType> {
    const response = securityAxios.patch(
      `${BASE_URL}/${columnId}`,
      columnForUpdate,
    );

    return response;
  }

  static getColumns(): PromiseAxiosResponse<ColumnType[]> {
    const response = securityAxios.get(`${BASE_URL}/all`);
    return response;
  }

  static deleteColumn(id: string): PromiseAxiosResponse<ColumnType> {
    const response = securityAxios.delete(`${BASE_URL}/${id}`);

    return response;
  }

  static moveTodoColumns(
    moveTodo: CurrentDnDColumnType,
  ): PromiseAxiosResponse<ColumnType> {
    const response = securityAxios.post(`${BASE_URL}/move`, moveTodo);

    return response;
  }

  static replaceAllTodosToColumn(
    body: ColumnForReplace,
  ): PromiseAxiosResponse<ColumnType> {
    const response = securityAxios.put(`${BASE_URL}/replace`, body);

    return response;
  }
}
