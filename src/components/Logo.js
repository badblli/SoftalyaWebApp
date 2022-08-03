import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Typography, } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  // eslint-disable-next-line
  const PRIMARY_LIGHT = theme.palette.primary.light;
  // eslint-disable-next-line
  const PRIMARY_MAIN = theme.palette.primary.main;
  // eslint-disable-next-line
  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="57.952" height="57.952" viewBox="0 0 57.952 57.952">
        <path id="Icon_awesome-bus-alt" data-name="Icon awesome-bus-alt" d="M55.235,14.488H54.33V9.055C54.33,3.984,43.1,0,28.976,0S3.622,3.984,3.622,9.055v5.433H2.716A2.716,2.716,0,0,0,0,17.2v9.055a2.717,2.717,0,0,0,2.716,2.716h.905v18.11a3.622,3.622,0,0,0,3.622,3.622V54.33a3.622,3.622,0,0,0,3.622,3.622h3.622A3.622,3.622,0,0,0,18.11,54.33V50.708H39.842V54.33a3.622,3.622,0,0,0,3.622,3.622h3.622a3.622,3.622,0,0,0,3.622-3.622V50.708h.724a2.857,2.857,0,0,0,2.9-2.9V28.976h.905a2.717,2.717,0,0,0,2.716-2.716V17.2A2.716,2.716,0,0,0,55.235,14.488ZM18.11,8.149a.905.905,0,0,1,.905-.905H38.936a.905.905,0,0,1,.905.905V9.96a.905.905,0,0,1-.905.905H19.015a.905.905,0,0,1-.905-.905ZM12.677,45.275A3.622,3.622,0,1,1,16.3,41.653,3.622,3.622,0,0,1,12.677,45.275ZM27.165,32.6H14.488a3.622,3.622,0,0,1-3.622-3.622V18.11a3.622,3.622,0,0,1,3.622-3.622H27.165Zm3.622,0V14.488H43.464a3.622,3.622,0,0,1,3.622,3.622V28.976A3.622,3.622,0,0,1,43.464,32.6ZM45.275,45.275A3.622,3.622,0,1,1,48.9,41.653,3.622,3.622,0,0,1,45.275,45.275Z" fill="#3a5ba0" />
      </svg>
    </Box >
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
