import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Grid } from '@mui/material';
import Stack from '@mui/joy/Stack';

interface CheckboxProps {
  label: string;
  name: string;
}

const AccordionWithCheckboxes: React.FC<{ checkboxes: CheckboxProps[]; title: string }> = ({
  checkboxes,
  title,
}) => {
  const [checkboxState, setCheckboxState] = useState<{ [key: string]: boolean }>(() => {
    const initialState: { [key: string]: boolean } = {};
    checkboxes.forEach(checkbox => {
      initialState[checkbox.name] = false;
    });
    return initialState;
  });

  const handleCheckboxChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxState({ ...checkboxState, [name]: event.target.checked });
  };

  return (
    <Stack sx={{width:'310px'}}>
    <Accordion style={{ width: '300px'}}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        {/* Set accordion title based on prop */}
        <b>{title}</b>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {checkboxes.map(checkbox => (
            <Grid item key={checkbox.name} xs={9}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState[checkbox.name]}
                    onChange={handleCheckboxChange(checkbox.name)}
                    value={checkbox.name}
                  />
                }
                label={checkbox.label}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
    </Stack>
  );
};

export default AccordionWithCheckboxes;
