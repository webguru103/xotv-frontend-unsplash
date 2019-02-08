import React from 'react';
import SvgIcon from '../SvgIcon';

const AddIcon = ({ ...others }) => (
  <SvgIcon viewBox="0 0 32 32" {...others}>
    <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
  </SvgIcon>
);

export default AddIcon;
