import * as React from 'react';

import { cx } from '@emotion/css';
import Check from '@mui/icons-material/Check';
import Warning from '@mui/icons-material/Warning';

import createUseStyles from '../../../styles/createUseStyles';

const useStyles = createUseStyles(theme => ({
  root: {
    width: 40,
    height: 40,
    color: theme.colors.grey[300],
    backgroundColor: theme.colors.grey[200],
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    fontSize: theme.textSize('default'),
    fontWeight: theme.fontWeight('semibold')
  },
  finished: {
    backgroundColor: theme.colors.success.main,
    fontWeight: theme.fontWeight('semibold'),
    color: '#fff'
  },
  check: {
    fontSize: theme.textSize('default')
  },
  warning: {
    color: theme.colors.error.main
  }
}));

interface IStepIconProps {
  icon: React.ReactNode;
  active: boolean;
  completed: boolean;
  error: boolean;
}

const StepIcon: React.FC<IStepIconProps> = ({ icon, active, completed, error }) => {
  const classes = useStyles();

  return (
    <>
      {error && <Warning className={classes.warning} />}
      {!error && (
        <div
          className={cx(classes.root, {
            [classes.finished]: active || completed
          })}
        >
          {completed && <Check className={classes.check} />}
          {!completed && icon}
        </div>
      )}
    </>
  );
};

export default StepIcon;
