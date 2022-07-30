import { Navbar } from "../components/Navbar/Navbar";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { red } from "@mui/material/colors";
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/searchforunits.scss';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import AddLocationIcon from '@mui/icons-material/AddLocation';

function SearchForUnits() {

    const { register, handleSubmit, setValue, setFocus } = useForm();

    const onSubmit = (e: any) => {
        console.log(e);
    }

    const checkCEP = (e: any) => {
        if (!e.target.value) {
            return
        }
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data);
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber');
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex' }}
                    >
                    <SearchIcon sx={{ p: '10px', color: red[500] }} />
                    <InputBase
                        placeholder="Pesquisar"
                        id="search-for-cep"
                        type="text"
                        {...register("cep")}
                        onBlur={checkCEP}
                    />
                </Paper>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex' }}
                                >
                                <HomeIcon sx={{ p: '10px', color: red[500] }} />
                                <InputBase
                                    placeholder="Endereço"
                                    id="address"
                                    type="text"
                                    {...register("address")}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex' }}
                                >
                                <DialpadIcon sx={{ p: '10px', color: red[500] }} />
                                <InputBase
                                    placeholder="Número"
                                    id="address-number"
                                    type="text"
                                    {...register("addressNumber")}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex' }}
                    id="neghborhood-content"
                    >
                    <AddLocationIcon sx={{ p: '10px', color: red[500] }} />
                    <InputBase
                        placeholder="Bairro"
                        id="neighborhood"
                        type="text"
                        {...register("neighborhood")}
                    />
                </Paper>

                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex' }}
                                >
                                <LocationCityIcon sx={{ p: '10px', color: red[500] }} />
                                <InputBase
                                    placeholder="Cidade"
                                    id="city"
                                    type="text"
                                    {...register("city")}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex' }}
                                >
                                <LocationOnIcon sx={{ p: '10px', color: red[500] }} />
                                <InputBase
                                    placeholder="Estado"
                                    id="UF"
                                    type="text"
                                    {...register("uf")}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            </form>
            </div>
        </div>
    )
}

export default SearchForUnits;