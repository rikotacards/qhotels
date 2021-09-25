import React from 'react';
import { HotelRowProps } from '../hotelRow/HotelRowStacked';
import { hotelsData } from '../../fixtures/hotelsNew.data';
import clx from 'clsx';
import { Button, Card, CardContent, Chip, makeStyles, MenuItem, Select, TextField, Theme, Typography } from '@material-ui/core';
import { HotelRowsContainerMemo } from '../hotelRowsContainer/hotelRowsContainer';
import { isMobile } from '../../platform/platform';
import { getLocations } from '../../utils/getLocations';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: theme.spacing(1)
  },
  selectContainer: {
    // margin: theme.spacing(1)
    marginBottom: isMobile() ? theme.spacing(1): 0,
    height: '40px'
  },
  totalHotels: {
    marginLeft: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(0.5)
  },
  textInput: {
    marginRight: theme.spacing(1),
    marginBottom: isMobile() ? theme.spacing(1) : 0,
    display: 'flex'
  },
  card: {
    margin: theme.spacing(0.5)
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column'
  },
  horizontal: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  buttonsContainer: {
    margin: theme.spacing(0.5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: isMobile() ? 'column' : 'row'
  },
  marginRight: {
    marginRight: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  },
}))

interface State {
  minAmount: string;
  maxAmount: string;
}

export const HotelTable: React.FC = () => {
  const [location, setLocation] = React.useState('');
  const locations = getLocations(hotelsData);
  const [minInt, setMinInt] = React.useState<number | undefined>(undefined);
  const [maxInt, setMaxInt] = React.useState<number | undefined>(undefined)

  const [searchList, setSearchList] = React.useState<HotelRowProps[]>(hotelsData)
  const [values, setValues] = React.useState<State>({
    minAmount: '',
    maxAmount: ''
  });
  const classes = useStyles();

  const clearFilter = () => {
    setLocation('')
    setValues({
      minAmount: '',
      maxAmount: ''
    })
    setMinInt(undefined);
    setMaxInt(undefined);
    setSearchList(hotelsData)
  }

  const handleChange = (event: any) => {
    setLocation(event.target.value)
  };



  const handleTextChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const onSearchClick = () => {
    const minInt = parseInt(values.minAmount || '0')
    const maxInt = parseInt(values.maxAmount || '99999')
    setMinInt(minInt);
    setMaxInt(maxInt)
    if (!location.length) {
      const priceFiltered = hotelsData.filter((hotel) => {
        const price = hotel.rooms.filter((room) => room.price >= minInt && room.price <= maxInt)
        return price.length

      })
      setSearchList(priceFiltered)
      return;

    }
    const priceFiltered = hotelsData.filter((hotel) => {
      const rooms = hotel.rooms.filter((room) => room.price >= minInt && room.price <= maxInt)
      return rooms.length
    })
    const filteredData = priceFiltered.filter((hotel) => (hotel.subway === location))

    setSearchList(filteredData)
  }



  return (
    <div>
      <div >
        <Card className={clx(classes.card)}>
          <CardContent >
            <Chip className={classes.chip} label={`Selected Hotels ${searchList.length}`}/>
            <div className={isMobile() ? classes.vertical : classes.horizontal}>

              <Select
                variant='outlined'
                displayEmpty
                className={clx(classes.selectContainer, classes.marginRight)}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                autoWidth
                fullWidth={isMobile()}
                placeholder="Districts"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <Typography><em>Filter by MTR Station</em></Typography>
                </MenuItem>
                {locations.map((district) => {
                  return (
                    <MenuItem value={district}><Typography variant='body1'>{district}</Typography></MenuItem>
                  )
                })}
              </Select>
              <TextField
                variant='outlined'
                id="outlined-adornment-amount"
                value={values.minAmount}
                size='small'
                onChange={handleTextChange('minAmount')}
                label="Min amount $"
                className={classes.textInput}
                fullWidth={isMobile()}
              />
              <TextField
                variant='outlined'

                id="outlined-adornment-amount"
                value={values.maxAmount}
                size='small'
                onChange={handleTextChange('maxAmount')}
                label="Max amount $"
                className={classes.textInput}
                fullWidth={isMobile()}

              />
              <div className={clx(classes.buttonsContainer)}>
                <Button disabled={(!location.length && values.minAmount.length <= 0 && values.maxAmount.length <= 0)} fullWidth={isMobile()} onClick={onSearchClick} variant='outlined' className={classes.button}>Search</Button>
                <Button  fullWidth={isMobile()} onClick={clearFilter} variant='outlined' className={clx(classes.button)}>clear filter</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <HotelRowsContainerMemo minInt={minInt} maxInt={maxInt} rooms={searchList} />
    </div>
  )
}