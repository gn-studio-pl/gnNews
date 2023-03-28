import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

type Props = {
  toggle: () => void;
};
const SideBarArrow = ({ toggle }: Props) => {
  return <AiOutlineRight className="sidebar-arrow " onClick={toggle} />;
};

export default SideBarArrow;
