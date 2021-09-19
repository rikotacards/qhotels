import React from 'react';
import { FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import { HotelRow } from '../components/hotelRow/HotelRow';
import { districts } from '../fixtures/districts.data'
import { HotelTable } from '../components/hotelTable/HotelTable';
export const HotelsPage: React.FC<unknown> = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <>
      <InputLabel id="demo-simple-select-label">Districts</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Districts"
        placeholder="Districts"
        onChange={handleChange}
      >
        {districts.map((district) => {
          return (
            <MenuItem value={district}>{district}</MenuItem>
          )
        })}
      </Select>
      <HotelTable />
    </>
  )
}