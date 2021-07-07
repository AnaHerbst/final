import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const VacinaData = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField 
            required
            id="selectService"
            name="selectService"
            label="Selecionar Serviço"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="selectUnidade"
            name="selectUnidade"
            label="Selecionar Unidade"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default VacinaData;