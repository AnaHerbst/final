import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  
}));
function initialState(){
  return{
    name: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    dataVacina: '',
    horarioVacina: ''
  };
}
export default function UserData(props) {

  const classes = useStyles();
  const [values, setValues] = useState(initialState);
  function verificarinformacoes({ name, email, cpf, dataNascimento, dataVacina, horarioVacina}){}
  
  function onChange(event){
    const {value, name } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event){
    event.preventDefault();
    verificarinformacoes(values);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dados do usuário
      </Typography>
      <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Nome completo"
            fullWidth
            onChance={onChange}
            value={values.name}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            onChance={onChange}
            value={values.email}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            onChance={onChange}
            value={values.cpf}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="date"
            label="Birthday"
            type="date"
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChance={onChange}
            defaultValue={values.dataNascimento}
          />
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
        Selecionar data e horário
      </Typography>
      </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dataVacina"
            label="Data de vacinação"
            type="date"
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChance={onChange}
            defaultValue={values.dataVacina}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="time"
            label="Horário da vacinação"
            type="time"
            fullWidth
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            onChance={onChange}
            defaultValue={values.horarioVacina}
          />
        </Grid>
        
      </Grid>
      </form>
    </React.Fragment>
  );
}