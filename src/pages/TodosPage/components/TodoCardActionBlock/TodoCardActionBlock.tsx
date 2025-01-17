import { TodoCardActionBlockProps } from './TodoCardActionBlock.types';
import { IconButton, Stack } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export const TodoCardActionBlock = ({
  actions,
  currentId,
}: {
  actions: TodoCardActionBlockProps;
  currentId: string;
}) => {
  const handleDelete = () => {
    console.log('Delete action triggered');
    actions.onDelete();
  };

  const handleEdit = () => {
    actions.onEdit(currentId);
  };
  // const handleView = () => {
  //   actions.onView(currentId);
  // };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <IconButton onClick={handleEdit}>
          <ModeOutlinedIcon />
        </IconButton>
        {/* <IconButton aria-label="view" onClick={handleView}>
          <RemoveRedEyeOutlinedIcon />
        </IconButton> */}
      </Stack>
      <IconButton color="warning" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};
