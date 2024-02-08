import { alpha, styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'; // STYLED COMPONENT
import PropTypes from 'prop-types';

const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&.simplebar-visible:before': {
      opacity: 1,
    },
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[400], 0.6),
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 9,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
})); // =============================================================

// =============================================================
const Scrollbar = ({ children, autoHide = true, sx, ...props }) => (
  <StyledScrollBar sx={sx} autoHide={autoHide} {...props}>
    {children}
  </StyledScrollBar>
);

export default Scrollbar;

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  autoHide: PropTypes.bool,
  sx: PropTypes.shape({}),
};

Scrollbar.defaultProps = {
  autoHide: true,
  sx: {},
};
