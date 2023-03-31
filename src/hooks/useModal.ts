import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return { handleClose, handleOpen, open };
};

export type UseModal = ReturnType<typeof useModal>;
