'use client'
import{FormGroup, InputLabel,Typography,TextField,Button,InputAdornment, OutlinedInput, IconButton, FilledInput} from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PetsIcon from '@mui/icons-material/Pets';
import Image from "next/image";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const route = useRouter();
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="w-3/2 bg-[#5C483A] p-7 md:w-1/2 lg:w-1/2 rounded-md shadow-lg">
        <form className="flex flex-col justify-center items-center">
          
          <PetsIcon fontSize="large" className="text-white"/>
          
          <FormGroup>
            <Typography
              className="text-white font-bold text-3xl uppercase "
              component={'h2'}
              marginY={5}
              variant="h3"
              textAlign={'center'}
            >
              Inicio de Sesion
            </Typography>
          
            <InputLabel  className="text-white font-bold text-xl uppercase mb-4">Usuario</InputLabel>
            <TextField
              className="pb-4"
              sx={{input:{fontSize:23 , color:'white',fontWeight:'bold'}}}
              id="Nombre"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment  className="text-white" position="start">
                    <AccountCircle fontSize="large" className="mb-2"/>
                  </InputAdornment>
                ),
              }}
              
            />
            <InputLabel className="text-white font-bold text-xl uppercase ">Contraseña</InputLabel>
            <FilledInput
              id="outlined-adornment-password"
              
              type={showPassword ? 'text' : 'password'}
              sx={{input:{fontSize:23 , color:'white',fontWeight:'bold'}}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    className="text-white"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              
            />


            <Button className="bg-[#CF6123] p-3 text-xl mt-3 text-white uppercase font-bold hover:bg-[#c77443]" variant="contained"
              onClick={()=>{
                route.push("/dashboard")
              }}
            >Ingresar</Button>
          </FormGroup>
        </form>
      </div>
    </main>
  );
}
