'use client'
import {Typography,Button, FormGroup, InputLabel, TextField, Select, MenuItem} from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function Citas() {
  
  return (
    <div className='bg-[#5B4739] flex flex-col items-center m-9'>
      <Typography variant="h3" component="h2" className='text-white text-3xl font-bold mt-5'>Registrar Cita</Typography>
      <div className='flex w-full justify-around mt-7'>
        <div className='bg-[#CF6123] flex flex-col w-2/5 p-8'>
          <form>
            <FormGroup>
              <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Nombre</InputLabel>
              <TextField
                className="pb-4"
                sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                id="Nombre"
                variant="filled"
                />

                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Tipo Cita</InputLabel>
                
                <Select 
                  
                  className='text-white'
                >
                    <MenuItem value="Baño">Baño</MenuItem>
                    <MenuItem value="Cortes">Cortes</MenuItem>
                    <MenuItem value="Salud">Salud</MenuItem>
                </Select>

                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Celular</InputLabel>
                <TextField
                className="pb-4"
                sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                id="Celular"
                variant="filled"
                />

                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Fecha</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Agenda" className='text-white w-full' />
                  </DemoContainer>
                </LocalizationProvider>
            </FormGroup>
          </form>
        </div>
        <div className='bg-[#CF6123] flex flex-col w-2/5 p-8'>
          <form>
            <FormGroup>
              <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Nombre</InputLabel>
              <TextField
                className="pb-4"
                sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                id="Nombre"
                variant="filled"
                />

                
                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Edad</InputLabel>
                <TextField
                  className="pb-4"
                  sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                  id="Edad"
                  variant="filled"
                />
                
                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Raza</InputLabel>
                <TextField
                  className="pb-4"
                  sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                  id="Raza"
                  variant="filled"
                  />
                
                <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Sintomas (opcional)</InputLabel>
                <TextField
                  className="pb-4"
                  sx={{input:{fontSize:15 , color:'white',fontWeight:'bold'}}}
                  id="Sintomas"
                  variant="filled"
                  />
            </FormGroup>
          </form>
        </div>
      </div>
      <div className='flex w-full justify-end mr-9 my-4'>
        <Button variant="contained"
                
                className='bg-[#CF6123] hover:bg-[#c95e20] px-4 py-2 uppercase font-bold'
              
        >Enviar</Button> 
      </div>
      
    </div>
  )
}

export default Citas